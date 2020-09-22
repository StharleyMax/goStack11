import { Router } from 'express';

import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointment', appointmentsRouter);
routes.get('/', (req, res) => res.json({ message: 'GO STACK 11' }));

export default routes;
