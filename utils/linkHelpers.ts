export const getSearchLink = (searchTerm: string, startIndex?: number) => {
  const startingIndex = startIndex ?? 0;

  return `/search?term=${searchTerm}&start=${startingIndex}`;
};
