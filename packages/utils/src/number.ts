export function toValidPositiveNumber(value: unknown): number | undefined {
  if (value === null || value === undefined) return undefined;

  const n = Number(value);

  if (Number.isNaN(n) || !Number.isFinite(n) || n < 0) {
    return undefined;
  }

  return n;
}
