"use strict";
// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any modifications here.

const chalk = require("chalk");
const Sequelize = require("sequelize");
const pkg = require("../../package.json");

console.log(chalk.yellow("Opening database connection"));

// create the database instance that can be used in other database files
const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  logging: false, // so we don't see all the SQL queries getting made
});


const School = db.define("School", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageURL: {
    type: Sequelizelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

const Student = db.define("Student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'Please enter a valid email address',
      },
    },
  },
  imageURL: {
    type: Sequelize.STRING,
  },
  magicalAbilityScore: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isFloat: {
        args: [0.0, 10.0],
        msg: 'Magical Ability Score must be between 0.0 and 10.0',
      },
    },
  },
});
module.exports = db;

Student.hasOne(School);
School.hasMany(Student);

