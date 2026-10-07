import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(projectRoot, 'src');
const buildRoot = path.join(projectRoot, 'dist');
const sourcePlaceholderPattern = /\[(?:ADD|CONFIRM)_[A-Z0-9_]+\]/g;

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
    }),
  );
  return nested.flat();
}

const sourceFiles = await listFiles(sourceRoot);
const unresolved = new Set();

for (const sourceFile of sourceFiles) {
  const contents = await readFile(sourceFile, 'utf8');
  for (const match of contents.matchAll(sourcePlaceholderPattern)) {
    unresolved.add(match[0]);
  }
}

if (unresolved.size > 0) {
  console.log('Unresolved placeholders (informational):');
  for (const placeholder of [...unresolved].sort()) {
    console.log(`- ${placeholder}`);
  }
} else {
  console.log('No unresolved placeholders found in source.');
}

const buildFiles = await listFiles(buildRoot);
const htmlFiles = buildFiles.filter((file) => file.toLowerCase().endsWith('.html'));
const leaked = [];

for (const htmlFile of htmlFiles) {
  const contents = await readFile(htmlFile, 'utf8');
  if (contents.includes('[ADD_') || contents.includes('[CONFIRM_')) {
    leaked.push(path.relative(projectRoot, htmlFile));
  }
}

if (leaked.length > 0) {
  console.error('Placeholder text leaked into built HTML:');
  for (const file of leaked) console.error(`- ${file}`);
  process.exitCode = 1;
} else {
  console.log(`No placeholder text leaked into built HTML (${htmlFiles.length} files checked).`);
}
