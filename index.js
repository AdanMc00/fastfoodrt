// require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
core = require('./src/lib/core')

const port = process.env.PORT || 8080

app.use(express.json());
app.use(cors({
    "origin": '*',
    "methods": "GET,HEAD,POST,PATCH,DELETE",


}))
app.use(express.urlencoded({extended: true}))

const product = require('./src/routes/product')
app.use('/product', product)

const order = require('./src/routes/order')
app.use('/order', order)

const prueba = async () => {
    try {
        await core.db.authenticate();
        console.log(`Connection to DB  in ${process.env.NODE_ENV} mode has been established successfully`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// Start Server
server = app.listen(port, () => {
    console.log(`Server is power ⚡ on localhost:${port}`)
    prueba().catch((error) => {
        console.error(error)
    })
})

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("disconnect", () => {
        console.log("USER DISCONNECTED");
    });
});

module.exports = io