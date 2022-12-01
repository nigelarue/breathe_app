const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meditation extends Model {}

// javascript if user logged in then onclick store time and date