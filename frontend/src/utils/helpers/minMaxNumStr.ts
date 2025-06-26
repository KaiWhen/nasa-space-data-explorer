export function minStrNumArray(arr: string[] | undefined): number | undefined {
  if (arr?.length === 0) return Infinity;

  return arr?.reduce((min, current) => {
    const num = Number(current);
    return isNaN(num) ? min : Math.min(min, num);
  }, Infinity);
}

export function maxStrNumArray(arr: string[] | undefined): number | undefined {
  if (arr?.length === 0) return -Infinity;

  return arr?.reduce((max, current) => {
    const num = Number(current);
    return isNaN(num) ? max : Math.max(max, num);
  }, -Infinity);
}
