import { Request, Response } from "express";
import { handleCatchErrors } from "../../utils/helperFunction";
import { AppError } from "../../utils/types";
import jwt from "jsonwebtoken";
import { userServices } from "./user.services";
import userValidationSchema from "./user.validation";
import { send } from "process";
const registerUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const zodParser = userValidationSchema.parse(req.body);

    const result = await userServices.findUserByEmail(email);
    if (result) {
      throw Object.assign(
        new Error(`User already exist with email: ${email}`),
        {
          statusCode: 409,
        }
      );
    }

    const newUser = await userServices.registerUserInDB(zodParser);
    return res.status(200).json({
      status: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    handleCatchErrors(error as AppError, res);
  }
};

export const userController = {
  registerUser,
};
