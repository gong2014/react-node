import { createUserFunction } from "src/models/user";

export type signUpUserInfo = {
  email: string;
  password: string;
};

export const signUp = async (
  userInfo: signUpUserInfo,
  createUser: createUserFunction
) => {
  return await createUser(userInfo);
};
