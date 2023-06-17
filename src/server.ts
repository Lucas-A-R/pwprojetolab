import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors'
const cors = require('cors');

import {router} from './routes';

const app = express();
//Habilitar o CORS para todas as rotas
app.use(cors());
app.use(express.json())
app.use(router);

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    if(err instanceof Error){
    //se for uma instancia de Error - Vou Laçar
    return res.status(400).json({
        error:err.message
    })
}
return res.status(500).json({
    status: 'error',
    message: 'Internal Error'
})
})

app.listen(3333,()=>console.log("Servidor on-line - Porta 3333"));