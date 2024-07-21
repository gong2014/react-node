import express, { Request, Response } from "express";
import { signUp } from "../services/signUpService";
import { createUser } from "../models/user";

export const authRouter = express.Router();

authRouter.post("/login", async (request: Request, response: Response) => {
  const signUpInfo = request.body;
  const res = await signUp(signUpInfo, createUser);

  return response.status(200).send(res);
});
