import express from "express";
import cors from "cors";
import helmet from "helmet";
import { todoItemRouter, authRouter } from "./routes";

export const getApp = () => {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use("/api/todoItems", todoItemRouter);
  app.use("/auth", authRouter);
  return app;
};
