// @flow
export const crValueToNumber = (cr: string): number => {
  const numValues: number[] = cr.split('/').map(Number);
  if (numValues.length === 1) return numValues[0];
  return numValues[0] / numValues[1];
};
