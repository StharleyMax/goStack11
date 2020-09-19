import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'GO STACK 11' }));

export default routes;
