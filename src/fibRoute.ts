import { fibonacci } from "./fib"; // Assuming the path to fib.ts is correct
// we need this import to fix the error
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  const { num } = req.params;
  const parsedNum = parseInt(num, 10);

  //if its a non-int then put in an error message
  if (isNaN(parsedNum)) {
    res.status(400).send("Invalid input: 'num' should be a valid number.");
    return;
  }

  //calling on fibonacci
  const fibN = fibonacci(parsedNum);
  let result: string;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  } else {
    result = `fibonacci(${parsedNum}) is ${fibN}`;
  }

  //returns result
  res.send(result);
};