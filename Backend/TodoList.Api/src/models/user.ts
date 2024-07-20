import prisma from "src/utils/dbService";

export type UserSchema = {
  email: string;
  password: string;
};

export const createUser = (data: UserSchema) =>
  prisma.user.create({
    data: {
      email: "123",
      password: "123",
    },
  });
