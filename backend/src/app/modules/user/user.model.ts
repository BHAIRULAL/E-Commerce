import { model, Schema } from "mongoose";
import { UserType } from "./user.interface";

const UserSchema = new Schema<UserType>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
});

export const UserModel = model("User", UserSchema);
