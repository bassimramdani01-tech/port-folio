const placeholderPattern = /^\[(?:ADD|CONFIRM)_[A-Z0-9_]+\]$/;

export function isSet(value: string | null | undefined): value is string {
  if (typeof value !== 'string') return false;

  const normalized = value.trim();
  return normalized.length > 0 && !placeholderPattern.test(normalized);
}
