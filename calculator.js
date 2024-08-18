export function sum(str) {
  if (!str) return 0;

  const numbers = str.match(/-?\d+/g) || [];

  const negativeNumbers = [];
  const positiveNumbers = [];

  numbers.forEach((num) => {
    const parsedNum = parseInt(num, 10);
    if (parsedNum < 0) {
      negativeNumbers.push(parsedNum);
    } else {
      positiveNumbers.push(parsedNum);
    }
  });

  if (negativeNumbers.length > 0) {
    return `negative numbers not allowed: ${negativeNumbers.join(", ")}`;
  }

  return positiveNumbers.reduce((acc, num) => acc + num, 0);
}
