import { Response } from "express";
import { AppError } from "./types";

export const handleCatchErrors = (error: AppError, res: Response) => {
  if (error.name === "ZodError" && error.errors) {
    return res.status(400).json({
      status: false,
      message: error.errors.map((err: any) => err.message), // only show messages
    });
  }

  if (error.statusCode) {
    return res.status(error.statusCode).json({
      status: false,
      message: error.message,
    });
  }

  return res.status(500).json({
    status: false,
    message: error.message || "Something went wrong",
  });
};
