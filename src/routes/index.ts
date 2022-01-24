import  { Router } from 'express';
import   appointmentsRouter from './appointments.routes';


const routes = Router();

const appointments = [];

routes.use('/appointments', appointmentsRouter); //use = simplifica e avisa que vai ser o /appointments


export default routes;