import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tokenSource = await readFile(path.join(projectRoot, 'src', 'styles', 'tokens.css'), 'utf8');

function readTheme(selector) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const block = tokenSource.match(new RegExp(`${escapedSelector}\\s*\\{([^}]+)\\}`))?.[1];
  if (!block) throw new Error(`Could not find color tokens for ${selector}.`);

  return Object.fromEntries(
    [...block.matchAll(/--([\w-]+):\s*(#[\da-fA-F]{6})\s*;/g)]
      .map(([, name, value]) => [name, value]),
  );
}

function channelToLinear(value) {
  const normalized = value / 255;
  return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const channels = hex.slice(1).match(/.{2}/g)?.map((value) => channelToLinear(Number.parseInt(value, 16)));
  if (!channels) throw new Error(`Invalid color token: ${hex}`);
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function contrast(first, second) {
  const [lighter, darker] = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
}

const themes = [
  ['light', readTheme(':root')],
  ['dark', readTheme("html[data-theme='dark']")],
];
const checks = [
  ['body text on page', 'color-text', 'color-bg', 4.5],
  ['body text on surface', 'color-text', 'color-surface', 4.5],
  ['body text on alternate surface', 'color-text', 'color-surface-alt', 4.5],
  ['muted text on page', 'color-text-muted', 'color-bg', 4.5],
  ['muted text on surface', 'color-text-muted', 'color-surface', 4.5],
  ['link on page', 'color-link', 'color-bg', 4.5],
  ['gold on page', 'color-gold', 'color-bg', 4.5],
  ['terracotta on page', 'color-terracotta', 'color-bg', 4.5],
  ['button text on button', 'color-button-text', 'color-button-bg', 4.5],
  ['text on indigo', 'color-on-indigo', 'color-indigo', 4.5],
  ['muted text on indigo', 'color-muted-on-indigo', 'color-indigo', 4.5],
  ['gold on indigo', 'color-gold-on-indigo', 'color-indigo', 4.5],
  ['text on terracotta', 'color-on-terracotta', 'color-terracotta', 4.5],
];

const failures = [];
for (const [themeName, tokens] of themes) {
  for (const [label, foregroundName, backgroundName, minimum] of checks) {
    const foreground = tokens[foregroundName];
    const background = tokens[backgroundName];
    if (!foreground || !background) {
      failures.push(`${themeName}: missing --${!foreground ? foregroundName : backgroundName}.`);
      continue;
    }

    const ratio = contrast(foreground, background);
    if (ratio < minimum) {
      failures.push(`${themeName}: ${label} is ${ratio.toFixed(2)}:1; needs ${minimum}:1.`);
    }
  }
}

if (failures.length) {
  console.error('WCAG AA contrast check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`WCAG AA contrast check passed for ${checks.length} text-color pairs in ${themes.length} themes.`);
}
