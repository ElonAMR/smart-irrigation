const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');



const app = express();

const HTTP_PORT = 3000;


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

dotenv.config();


app.get('/',(req,res) => {
    res.send('welcome');
});



app.listen(HTTP_PORT,()=>{
    console.log(`Server is running at http://localhost:${HTTP_PORT}`);
});