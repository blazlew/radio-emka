export const getRandomPercentage = (maxRange: number = 100) => {
  'worklet';
  return `${Math.random() * maxRange}%`;
};
