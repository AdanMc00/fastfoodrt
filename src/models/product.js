const Sequelize = require('sequelize'),
    cryptoRandomString = require('crypto-random-string'),
    core = require('../lib/core');

class Product extends Sequelize.Model {
}
Product.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING(40),
        allowNull: false
    },
    img: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
  
   
}, {
    sequelize: core.db,

});


exports.Product = Product;



exports.sync = async (options = {force: false, alter: true}) => {
    console.log('Product SYNC');
    await Product.sync(options);
};
