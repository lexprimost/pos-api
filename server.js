import express from "express"
import dotenv from "dotenv"
import dbConnexion from "./src/database/connection"
import cors from "cors"

//dotenv package initialization
dotenv.config();

const app = express();

//db connectivity
dbConnexion();

//cors
app.use(cors());

//payload middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//use port defined in .env files or 3000 if not defined in the .env file
const PORT = process.env.PORT || 3000;

app.use('/images', express.static('images'));
app.use('/api/v1/product', require('./src/routes/productsRoutes'));

app.get('/', (req, resp, next) => {
    resp.send('Hello from Node Server ! this is a minimalist nodejs server to get you started')
} );

//app starts a server and listens on port defined in PORT variable for connections. 
app.listen(PORT, () => {
    console.log(`server listenning on port ${PORT}`)
});

app.use((err,req,response,next) => {
    console.error(err.stack)
    response.status(500).send({
        status:500,
        message:err.message,
        body:{}
    })
});
 