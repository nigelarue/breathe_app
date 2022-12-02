const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meditation extends Model {}

// Storage in Local Client
// const dateLogin = documents.querySelector('user');
// var previousDates = [];


// function localStorageData() {
//  localStorage.setItem("dateLogin", JSON.stringify(dateLogin));

//  var li = document.createElement("li");
//  var dateArray = JSON.parse(localStorage.getItem("dateLogin"));

//  li.textContent = dateArray[dateArray.length-1];
//  previousDates.append(li);
// };