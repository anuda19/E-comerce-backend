const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
let port = process.env.PORT || 5001;

app.use(cors({
    origin: "*"
}))

dotenv.config();

const mongoose = require('mongoose')
const productRouter = require('./src/routes/productsRoutes')

app.use('/products', productRouter)


mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(port, ()=>{
        console.log('running on 3001 port');
    })
}).catch((err)=>{
    console.log(err);
})

const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('Database is connected to backend'))

app.get('/', (req, res)=>{
    res.send('hello Anurag Kumar Sinha')
})

