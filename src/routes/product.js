const {Router} = require('express');
const product = require('../lib/product')
const router = Router();

router.post('/', async (req, res) => {
    const userData = req.body
    console.log(userData)

    try {
        const data = await product.Product.create(userData)
        res.json({
            success: true,
            message: 'Product Creado',
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
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        let data = await product.Product.delete(id)
        console.log(id)
        res.json({
            success: true,
            message: 'Product Borrado',
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

        const data = await product.Product.getById(id)
        res.json({
            success: true,
            message: 'Product encontrado',
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
        const data = await product.Product.getPerx()
        res.json({
            success: true,
            message: 'Product encontrados',
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
        const userData = req.body
        const data = await product.Product.updates(id, userData)
        res.json({
            success: true,
            message: 'Product actualizado',
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


module.exports = router;







