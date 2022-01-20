const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create our Result Model
class Result extends Model {}

//create fields/column for Result model
Result.init(
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
        modelName: 'result'
    }
);

module.exports = Result;