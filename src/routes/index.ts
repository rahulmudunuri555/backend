import express from 'express';
import employeeRouter from './demo.routes';
const routes = express.Router();
 
routes.use('/', employeeRouter)

export default routes;