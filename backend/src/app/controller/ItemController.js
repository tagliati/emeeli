import ItemService from '../services/ItemService';

class ItemController {
  async init (req, res, next) {
    try {
      const itemId = req.params.id
      const itemService = new ItemService()
      const data = await itemService.getItem(itemId)
      return res.send(data)
    } catch (err) {
      console.warn('b emaqui', err)
      next(err)
    }
  }
}

export default new ItemController()
