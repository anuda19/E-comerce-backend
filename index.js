const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: "*"
}))

const mongoose = require('mongoose')
const productRouter = require('./src/routes/productsRoutes')

app.use('/products', productRouter)

mongoose.connect('mongodb+srv://anurag:anu12rag@cluster0.tlj6tnv.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    app.listen(3001, ()=>{
        console.log('running on 3001 port');
    })
}).catch((err)=>{
    console.log(err);
})

const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('Database is connected to backend'))

app.get('/', (req, res)=>{
    res.send('hello Anurag Sinha')
})

