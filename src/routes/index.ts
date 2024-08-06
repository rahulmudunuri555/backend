import express from 'express';
import routes from './routes';
const patientRoute = express.Router();
 
routes.use('/', patientRoute)

export default patientRoute;