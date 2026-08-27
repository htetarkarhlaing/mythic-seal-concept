export function assertNever(value: never, message?: string): never {
  throw new Error(
    message || `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
}

export function match<TKey extends string, TReturns>(
  key: TKey,
  patterns: Record<TKey, () => TReturns>
): TReturns {
  const handler = patterns[key];
  if (!handler) {
    throw new Error(`No matching handler found for variant "${key}"`);
  }
  return handler();
}
