// Endpoint for querying the fibonacci numbers

const fibonacci = require("./fib");
import { Request, Response } from "express"; // Assuming you're using Express.js for your server

export default (req: Request, res: Response) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num, 10)); // Specify base 10 for parseInt
  let result = `fibonacci(${num}) is ${fibN}`;

  if (isNaN(fibN) || fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
