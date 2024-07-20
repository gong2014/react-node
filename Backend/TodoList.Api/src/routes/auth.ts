import express, { Request, Response } from "express";

export const authRouter = express.Router();

authRouter.get("/login", async (request: Request, response: Response) => {
  return response.status(200).send("abc");
});
