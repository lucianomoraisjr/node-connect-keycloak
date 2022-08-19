import { Router } from 'express'
import { auth } from '../middlewares/authentication'

export default (router: Router): void => {
  
  router.get('/login',auth.protect(), async (_req,res)=>{
    res.json({login:"Sucesso"}).status(200)
  } )
}
