export function sum(str) {
  if (!str) return 0;

  const numbers = str.match(/\d+/g) || [];

  const total = numbers.reduce((acc, num) => acc + parseInt(num, 10), 0);

  return total;
}
