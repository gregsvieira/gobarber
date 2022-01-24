import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAppointments1642984969048 implements MigrationInterface {
    //método up - o que vai ser feito ao ser executado: alterações, criação de nova tabela..
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({ 
                name: 'appointments', 
                columns: [
                    { 
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    { 
                        name: 'provider',
                        type: 'varchar',
                        isNullable: false,
                    },
                    { 
                        name: 'date',
                        type: 'timestamp with time zone',
                        isNullable: false,
                    },
                ],
            }),
        );
    }
     //método down - fallback - se acontecer algum problema e precisar voltar atrás na versão, para desfazer o feito no up
    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
    }

}
