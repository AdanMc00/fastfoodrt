#! /usr/local/bin/node
const orders = require('./src/models/order');
const products = require ('./src/models/product');


const syncAll = async () => {
    await orders.sync();
    await products.sync();
};

syncAll()
    .catch(error => console.error(error))
    .then(() => console.log('All tables synced'));
