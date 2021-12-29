const Sequelize = require('sequelize'),
    cryptoRandomString = require('crypto-random-string'),
    core = require('../lib/core');

class Order extends Sequelize.Model {
}
Order.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    amount: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    products: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    date: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: false
    },
}, {
    sequelize: core.db,
    timestamps: true

});


exports.Order = Order;

exports.sync = async (options = {force: false, alter: true}) => {
    console.log('Order SYNC');
    await Order.sync(options);
};
