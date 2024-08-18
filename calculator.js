export function sum(str) {
  if (!str) return 0;

  const numbers = [];

  str.split("").map((ele, i) => {
    const val = +ele;
    if (!isNaN(val) && typeof val === "number") {
      numbers.push(val);
    }
  });

  return numbers.reduce((acc, cur) => +acc + +cur, 0);
}
