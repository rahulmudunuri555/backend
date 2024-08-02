import { Sequelize } from 'sequelize';

const sequelizeconnection = new Sequelize('tasks', 'postgres', 'password', {
    host: 'localhost',
    port:5432,
    dialect: 'postgres'
});

export default sequelizeconnection;
