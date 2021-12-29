const  Sequelize = require ('sequelize')
const cryptoRandomString = require('crypto-random-string')
const env = process.env.NODE_ENV || "development",
    dbConfig = require('../config/db.json')[env]



const db = new Sequelize(dbConfig);

const logError = (error, errorId) => {
    const errorKey= cryptoRandomString({length: 12, type: 'hex'}).toUpperCase();
    console.error(`${errorId} - ${errorKey}`, error);
    throw new Error(`${errorId} - ${errorKey}`);
};

module.exports={db,dbConfig,logError}