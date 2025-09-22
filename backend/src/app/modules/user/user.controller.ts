import { Request, Response } from "express";
import { handleCatchErrors } from "../../utils/helperFunction";
import { AppError } from "../../utils/types";

const registerUser = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleCatchErrors(error as AppError, res);
  }
};

export const userController = {
  registerUser,
};
