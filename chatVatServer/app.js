const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000;
let core = require('cors');
app.use(express.json());
app.use(bodyParser.json());
app.use(core());
// routes
const userRoute = require('./routers/userRoute')
const walletRoute = require('./routers/wallet')
const customerRoute = require('./routers/customersRoutes')


app.use('/user', userRoute)
app.use('/wallet', walletRoute)
app.use('/customer', customerRoute)
app.listen(port, () => console.log(`Listening on port ${port}`))