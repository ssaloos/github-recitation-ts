// util function that computes the fibonacci numbers
export function fibonacci(n: number): number {
  // if 0
  if (n < 0) {
    return -1;
  // if is 0
  } else if (n === 0) {
    return 0;
  // if is 1
  } else if (n === 1) {
    return 1;
  }
  // the result to return
  return fibonacci(n - 1) + fibonacci(n - 2);
}
