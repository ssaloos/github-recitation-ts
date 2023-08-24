import { fibonacci } from "./fib"; // Assuming the path to fib.ts is correct
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  const { num } = req.params;
  const parsedNum = parseInt(num, 10);

  if (isNaN(parsedNum)) {
    res.status(400).send("Invalid input: 'num' should be a valid number.");
    return;
  }

  const fibN = fibonacci(parsedNum);
  let result: string;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  } else {
    result = `fibonacci(${parsedNum}) is ${fibN}`;
  }

  res.send(result);
};