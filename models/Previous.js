const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create our Previous Model
class Previous extends Model {}

//create fields/column for Previous model
Previous.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    quote: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    personalities: {
        type: DataTypes.STRING,
        allowNull: false
    },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'previous'
    }
);

module.exports = Previous;