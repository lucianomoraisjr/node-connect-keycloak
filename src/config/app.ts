import express from 'express'
import { setupMiddlewares } from '@/config/middlewares'
import { setupRoute } from '@/config/routes'
const app = express()
setupMiddlewares(app)
setupRoute(app)
export { app }
