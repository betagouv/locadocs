/**
 * Get an array of values and return
 * a computed class name
 */

export const computeClassnames = (
  params: Array<string | boolean | undefined>,
): string | undefined => {
  const computed = params.filter(value => typeof value === 'string').join(' ');

  if (computed.length === 0) {
    return undefined;
  } else {
    return computed;
  }
};
