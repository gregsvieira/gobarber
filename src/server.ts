import express from 'express';
import routes from './routes';
import './database';
import appointmentsRouter from './routes/appointments.routes';

const app = express();

app.use(express.json());

app.use(routes);

app.get('/');

app.listen(3333, () =>{
    console.log('🚀Server started on port 3333');
});