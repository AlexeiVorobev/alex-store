const express = require('express')
const app = express()
const mongoose = require('mongoose')
require("dotenv").config()
const userRoute = require('./routes/userRoutes')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/productRoutes')
const orderRoute = require('./routes/orderRoutes')
const cartRoute = require('./routes/cartRoutes')
const cors = require('cors')

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL)
.then(() => {console.log('DB connected.')})
.catch((err) => {
    console.log(err)
})

app.use(express.json())
app.use(cors());

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})