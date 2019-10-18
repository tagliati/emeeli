import api from '../services/api';
import { mapCategories, mapItem } from '../mappers/item';

class ItemService {
  async fetchData (id) {
    try {
      const response = await api.get(`items/${id}`)

      const [responseDesc, currencies, categories] = await Promise.all([
        api.get(`items/${id}/description`),
        api.get('currencies/'),
        api.get(`categories/${response.data.category_id}`)
      ])
      return {
        itemResult: response.data,
        descResult: responseDesc.data,
        currenciesResult: currencies.data,
        categoriesResult: categories.data
      }
    } catch (err) {
      throw new Error(JSON.stringify(err.response.data))
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
    const item = await this.fetchData(param)
    const updatedItems = this.preparePayload(item)

    return updatedItems
  }
}

export default ItemService
