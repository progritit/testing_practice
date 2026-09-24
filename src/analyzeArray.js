// src/analyzeArray.js

export function analyzeArray(array) {
  const total = array.reduce((sum, number) => {
    return sum + number;
  }, 0);

  const average = total / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
}