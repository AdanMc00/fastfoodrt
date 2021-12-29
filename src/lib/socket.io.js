// const socket = require("socket.io");
// const express = require ('express')
// const {Server} = require('http')
// const app= express();
//
// const http = Server(app,)
// const io = socket(http,{
//     cors:{
//         origin:'*'
//     }
// })
// const cors = require('cors')
//
// app.use(express.json());
// app.use(cors({origin: '*'}))
// app.use(express.urlencoded({extended: true}))
//
//
// const user = require('../routes/user')
// app.use('/user', user)
//
// const program = require('../routes/program')
// app.use('/program', program)
//
// app.get('/', () => {
//     io.on("connection", (socket) => {
//         console.log(socket.id);
//
//         socket.on("disconnect", () => {
//             console.log("USER DISCONNECTED");
//         });
//     });
//
// })
// module.exports = http