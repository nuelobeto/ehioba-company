export const sliceRangeStr = (str: string, begin: number, end: number) => {
  return `${str.slice(0, begin)}...${str.slice(-end)}`;
};
