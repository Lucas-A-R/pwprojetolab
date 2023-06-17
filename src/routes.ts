import { Router, Request, Response } from 'express';
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from './controllers/user/CreateUserController';
const router = Router();

//note que podemos tipar (typescript): req e do tipo "Request" e res é do tipo "Response"

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ ok: "You know I love you" })
   })
//export { router }; 
//temos que eportar "router" para acessá-lo dentro do server.ts

//Rotas USER -------
router.post('/users',new CreateUserController().handle);

router.post('/session',new AuthUserController().handle);
export {router};
