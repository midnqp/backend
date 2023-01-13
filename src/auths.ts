import express from "express";
import passport from "passport";

function open(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  next();
}

export default { open };
