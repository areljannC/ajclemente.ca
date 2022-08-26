// EXTERNAL IMPORTS
import { Router, Request, Response } from 'express';

// SHARED IMPORTS
import { getTimestamp } from '@utils';

export const pingRoute = '/ping';
export const pingRouter = Router();

pingRouter.get('/', async (_: Request, response: Response) =>
  response.status(200).json({
    message: 'pong',
    timestamp: getTimestamp()
  })
);
