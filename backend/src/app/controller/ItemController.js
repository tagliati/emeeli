import ItemService from '../services/ItemService'

class ItemController {
  async init (req, res) {
    const itemId = req.params.id
    const itemService = new ItemService()
    const data = await itemService.getItem(itemId)
    return res.send(data)
  }
}

export default new ItemController()
