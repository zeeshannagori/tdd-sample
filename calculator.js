export function sum(str) {
  if (!str) return 0;
  return str.split(",").reduce((acc, cur) => +acc + +cur, 0);
}
