import { mapItemsSearch, mapCategoriesSearch, mapCurrencySearch } from '../../../src/app/mappers/searchItem'
import meliSearchResult from '../../../__mocks__/meliSearchResult.json'
import localSearchResult from '../../../__mocks__/localSearchResult.json'
import meliCurrency from '../../../__mocks__/meliCurrencyResult.json'

describe('Search Item Mappers', function () {
  it('should format item', function () {
    const mappedSearchedItem = mapItemsSearch(meliSearchResult, meliCurrency)
    expect(mappedSearchedItem).toEqual(localSearchResult.items)
  })

  it('should format categories', function () {
    const mappedCategories = mapCategoriesSearch(meliSearchResult.available_filters)
    expect(mappedCategories).toEqual(localSearchResult.categories)
  })

  it('should format currency', function () {
    const mappedCurrency = mapCurrencySearch(meliSearchResult.results[0], meliCurrency)
    expect(mappedCurrency).toEqual(localSearchResult.items[0].price)
  })
})
