// EXTERNAL IMPORTS
import { Router } from 'express';

// LOCAL IMPORTS
import { pingRoute, pingRouter } from './routes';

export const route = '/api';
export const router = Router();

router.use(pingRoute, pingRouter);
