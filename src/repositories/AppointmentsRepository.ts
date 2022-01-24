/* Persistência <--> Repositório <--> Rota

Um repositório por módulo
Dentro podemos buscar informações dentro de banco/variavel: find
Criar uma nova informação: Create
*/

import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// DTO - Data Transfer Object - Por isso sempre legal usar objetos no js

interface CreateAppointmentDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepository{
    private appointments: Appointment[];

    constructor(){
        this.appointments = [];
    };

    public all(): Appointment[]{
        return this.appointments;
    };

    public findByDate(date: Date): Appointment | null{
        const findAppointment = this.appointments.find(appointment => isEqual(date, appointment.date),
        );
    
        return findAppointment || null;
    };
    

    public create({ provider, date }: CreateAppointmentDTO ): Appointment{
        const appointment = new Appointment({provider, date });

        this.appointments.push(appointment);

        return appointment;
    };
};

export default AppointmentsRepository;