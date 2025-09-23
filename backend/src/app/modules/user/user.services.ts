import bcrypt from "bcryptjs";
import { UserModel } from "./user.model";

const findUserByEmail = async (email: string) => {
  const result = await UserModel.findOne({ email });
  return result;
};

const registerUserInDB = async (data: any) => {
  const { role, password } = data;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const dataToSave = {
    ...data,
    password: hashedPassword,
  };
  const result = await UserModel.create(dataToSave);
  return result;
};

export const userServices = {
  findUserByEmail,
  registerUserInDB,
};
