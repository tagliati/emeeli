import SearchItemService from '../services/SearchItemService'

class SearchItemController {
  async init (req, res) {
    const queryParam = req.query.search
    const searchItemServiceObject = new SearchItemService()
    const data = await searchItemServiceObject.getItems(queryParam)
    return res.send(data)
  }
}

export default new SearchItemController()
