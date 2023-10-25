import { Sequelize, DataTypes } from 'sequelize';

const db = new Sequelize('teamInterval', 'root', 'password', {
    host: '127.0.0.1',
    dialect: 'mysql'
});
const Task = db.define('Task', {
    heading: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    priority: {
        type: DataTypes.ENUM('low', 'medium', 'high'),
        allowNull: false
    },
    added_date_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: true,
});
await db.sync();

export default Task;