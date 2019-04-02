import { Router } from 'express'
import SearchItemController from './app/controller/SearchItemController'
import ItemController from './app/controller/ItemController'

const routes = Router()

routes.get('/api/items', SearchItemController.init)
routes.get('/api/items/:id', ItemController.init)

export default routes
