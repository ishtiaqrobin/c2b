import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import status from "http-status";
import AppError from "../errorHelpers/AppError";

export const validateRequest =
  (zodSchema: z.ZodType) =>
  (req: Request, _res: Response, next: NextFunction) => {
    try {
      // Support multipart/form-data where JSON is sent in a "data" field.
      if (req.body?.data) {
        try {
          req.body = JSON.parse(req.body.data);
        } catch {
          throw new AppError(
            status.BAD_REQUEST,
            "Invalid JSON in 'data' field",
          );
        }
      }

      const parseResult = zodSchema.safeParse(req.body);

      if (!parseResult.success) {
        return next(parseResult.error); // return so we don't continue
      }

      req.body = parseResult.data; // sanitized data
      next();
    } catch (error) {
      next(error);
    }
  };
