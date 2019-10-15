import api from '../services/api';
import { mapCategories, mapItem } from '../mappers/item';

class ItemService {
  async fetchData (id) {
    try {
      const response = await api.get(`items/${id}`)
      const responseDesc = await api.get(`items/${id}/description`)
      const currencies = await api.get('currencies/')
      const categories = await api.get(
        `categories/${response.data.category_id}`
      )

      return {
        itemResult: response.data,
        descResult: responseDesc.data,
        currenciesResult: currencies.data,
        categoriesResult: categories.data
      }
    } catch (err) {
      throw new Error(err.response.data.message)
    }
  }

  preparePayload (item) {
    const product = {
      author: { name: 'André', lastname: 'Tagliati' },
      item: mapItem(item.itemResult, item.descResult, item.currenciesResult),
      categories: mapCategories(item.categoriesResult)
    }
    return product
  }

  async getItem (param) {
    try {
      const item = await this.fetchData(param)
      const updatedItems = this.preparePayload(item)

      return updatedItems
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default ItemService
