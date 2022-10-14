const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
let port = process.env.PORT || 5001;
const mongoose = require('mongoose')
const path = require('path') 
const publicPath=path.join(__dirname,'../../public');
const bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
app.use(express.static(publicPath))
app.use(cors({
    origin: "*"
}))

dotenv.config();

const productRouter = require('./src/routes/productsRoutes')

app.use('/products', productRouter)


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}).then(()=>{
    app.listen(port, ()=>{
        console.log('running on 5001 port');
    })
}).catch((err)=>{
    console.log(err);
})
app.use(express.json());

const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('Database is connected to backend'))

app.get('/', (req, res)=>{
    res.send('hello Anurag Kumar Sinha')
})

