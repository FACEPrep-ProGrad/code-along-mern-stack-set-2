const data = require('./data');
const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

console.log(data);

// environmental variables
env.config();

// database connection
mongoose.connect(`mongodb+srv://root:Admin123@prograd.nqkez.mongodb.net/ProMart?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>{
    console.log(`Database connected`);
}).catch(err=>console.log(err));

const userRoutes = require('./routes/UserRoutes');
app.use(bodyParser.json());
// app.use('/api',userRoutes);

app.get('/api/products',(req,res)=>{
    console.log(data.products);
    res.send(data.products);
});

app.listen(process.env.PORT, ()=>{
    console.log(`server is running is port ${process.env.PORT}`);
});