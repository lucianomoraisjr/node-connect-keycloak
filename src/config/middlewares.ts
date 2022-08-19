import cors from 'cors'
import session from "express-session";
import { Express, json } from 'express'
import { keycloak } from '@/config/keycloak';
export const setupMiddlewares = (app: Express): void => {
  app.use(cors())
  app.use(json())
  app.use(session({
    secret: "some secret",
    resave: false,
    saveUninitialized: true,
    store: keycloak.getMemoryStore()
  }))
  app.use(keycloak.initKeycloak().middleware())
  app.use((req, res, next) => {
    res.type('json')
    next()
  })
}
