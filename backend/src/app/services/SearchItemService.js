import api from '../services/api';
import { mapCategoriesSearch, mapItemsSearch } from '../mappers/searchItem';

class SearchItemService {
  async fetchData (param) {
    try {
      const response = await api.get(`sites/MLA/search?q=${param}`)
      const currencies = await api.get('currencies/')
      return { searchResult: response.data, currenciesResult: currencies.data }
    } catch (err) {
      throw new Error(JSON.stringify(err.response.data))
    }
  }

  preparePayloadSearch (items) {
    const products = {
      author: { name: 'André', lastname: 'Tagliati' },
      categories: mapCategoriesSearch(items.searchResult.available_filters),
      items: mapItemsSearch(items.searchResult, items.currenciesResult)
    }

    return products
  }

  noResultsFound () {
    return {
      author: { name: 'André', lastname: 'Tagliati' },
      categories: {},
      items: {}
    }
  }

  async getItems (param) {
    const items = await this.fetchData(param)
    const updatedItems = this.preparePayloadSearch(items)

    return updatedItems
  }
}

export default SearchItemService
