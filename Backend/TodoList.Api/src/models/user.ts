import prisma, { handlePrismaErrorMessage } from "../utils/dbService";

export type UserSchema = {
  email: string;
  password: string;
};

type createUserResponse = {
  success: boolean;
  error?: string;
};

export type createUserFunction = (
  userInfo: UserSchema
) => Promise<createUserResponse>;

export const createUser = async (
  userInfo: UserSchema
): Promise<createUserResponse> => {
  try {
    await prisma.user.create({
      data: {
        email: userInfo.email,
        password: userInfo.password,
      },
    });
    return { success: true };
  } catch (e) {
    return handlePrismaErrorMessage(e);
  }
};
