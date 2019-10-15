import SearchItemService from '../services/SearchItemService';

class SearchItemController {
  async init (req, res, next) {
    try {
      const queryParam = req.query.search
      const searchItemServiceObject = new SearchItemService()
      const data = await searchItemServiceObject.getItems(queryParam)
      return res.send(data)
    } catch (err) {
      next(err)
    }
  }
}

export default new SearchItemController()
