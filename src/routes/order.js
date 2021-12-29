const {Router} = require('express');
const order = require('../lib/order')
const router = Router();


router.post('/', async (req, res) => {
    try {
        console.log('Here')
        const io = require('../../index')
        const data = req.body
        const payload = await order.Order.create(data)
        io.emit('newOrders', payload)
        res.json({
            success: true,
            message: 'Order Created',
            data: payload
        })

    } catch (error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const io = require('../../index')
        let data = await order.Order.delete(id)
        io.emit('deletedOrders', id)
        res.json({
            success: true,
            message: 'Order Deleted',
            data: data
        })

    } catch (error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const data = await order.Order.getById(id)
        res.json({
            success: true,
            message: 'Order Found',
            data
        })

    } catch (error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})
router.get('/', async (req, res) => {

    try {
        const io = require('../../index')
        const data = await order.Order.getOrders()
        // io.emit('programas', data)
        res.json({
            success: true,
            message: 'Order Found',
            data
        })

    } catch (error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const io = require('../../index')
        const payload = await order.Order.updates(id, data)
        io.emit('updatedOrders', payload)
        res.json({
            success: true,
            message: 'Order Updated',
            data: payload
        })
    } catch (error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;







