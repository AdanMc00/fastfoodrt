const Sequelize = require("sequelize"),
    Op = Sequelize.Op,
    cryptoRandomString = require('crypto-random-string'),
    {logError} = require('./core'),
    model = require('../models/order')

class Order {
    static getById = async (id) => {
        try {
            let data = await model.Order.findOne({
                where: {id}
            });
            return data;
        } catch (error) {
            logError(error, 'WYD4T4D8');
        }
    };
    static getOrders = async () => {
        try {
            let data = await model.Order.findAll();
            return data;
        } catch (error) {
            logError(error, 'WYD4T4D8');
        }
    };

    static processFilter(filter) {
        let where = {};
        for (let x in filter) switch (x) {

            case 'id':
                if (filter.id) if (filter.id.length > 0) where.id = {[Op.in]: filter.id};
                break;
        }
        return where;
    }

    static count = async (filter) => {
        try {
            if (!filter) filter = {};
            let data = await model.Order.count({
                where: this.processFilter(filter)
            });
            return data;
        } catch (error) {
            logError(error, 'PU58U55Y');
        }
    };

    static list = async (filter, options) => {
        try {
            if (!filter) filter = {};
            if (!options) options = {};
            const where = this.processFilter(filter),
                order = options.ord ? [[options.ord, options.asc ? 'ASC' : 'DESC']] : [['updatedAt', 'DESC']],
                limit = options.num || 20,
                offset = (options.pag || 0) * limit;
            let data = await model.Order.findAll({
                where, limit, offset, order
            });
            data = data.map(x => x.get({plain: true}));
            return data;
        } catch (error) {
            logError(error, 'IDFMPKX7');
        }
    };

    static create = async (input) => {
        try {
            if (!input.id) {
                const prev = await this.getOrders()
                input.id = prev.length + 17
            };
            console.log(input.id)
            await model.Order.create(input);
            const data = await this.getById(input.id);
            return data;
        } catch (error) {
            logError(error, '1DR58ED5');
        }
    };

    static updates = async (id, input) => {
        try {
            const prev = await this.getById(id);
            if (!prev) throw new Error(`El Programa ${id} no existe`);
            await model.Order.update(input, {where: {id: id}});
            const data = await this.getById(id);
            return data;
        } catch (error) {
            logError(error, 'K1MW4UMT');
        }
    };

    static delete = async (id) => {
        try {
            const prev = await this.getById(id);
            if (!prev) return false;
            await model.Program.destroy({where: {id}});
            return true;
        } catch (error) {
            logError(error, '0THYPXXT');
        }
    };
}

module.exports = {
    Order
};
