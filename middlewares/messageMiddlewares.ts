import { Request, Response, NextFunction } from 'express';
import { searchDBMessage } from '../db/queries.ts';

export const checkMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const search = req.query.search as string;
  if (search === undefined) {
    next();
  } else {
    const filteredMessages = await searchDBMessage(search);
    res.status(200).json(filteredMessages);
  }
};
