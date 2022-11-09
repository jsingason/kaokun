export const getSeed = (seed?: string): number => {
  let result = 0;
  if (!seed) {
    result = Math.floor(Math.random() * 10 ** 10);
    return result;
  }
  for (let i = 0; i < seed.length; i++) {
    result += seed.charCodeAt(i);
  }
  return result;
};
