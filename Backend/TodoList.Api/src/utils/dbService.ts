import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default prisma;

export const handlePrismaErrorMessage = (
  e: Prisma.PrismaClientKnownRequestError
) => {
  switch (e.code) {
    case "P2002":
      // unique error
      const errorMessage = `Unique constraint failed on the constraint: ${e.meta?.target}`;
      console.error({ success: false, error: errorMessage });
      return { success: false, error: errorMessage };
    case "P2003":
      // foreign error
      const fkErrorMessage = `Foreign key constraint failed on the field: ${e.meta?.field_name}`;
      console.error({ success: false, error: fkErrorMessage });
      return { success: false, error: fkErrorMessage };
    // other error
    default:
      console.error("Known request error:", e);
      return { success: false, error: e.message };
  }
};
