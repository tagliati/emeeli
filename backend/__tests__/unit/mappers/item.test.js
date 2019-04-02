import { mapCategories, mapItem, mapCurrency } from '../../../src/app/mappers/item'
import meliItemResult from '../../../__mocks__/meliItemResult.json'
import meliItemDescriptionResult from '../../../__mocks__/meliItemDescriptionResult.json'
import localItemResult from '../../../__mocks__/localItemResult.json'
import meliCurrency from '../../../__mocks__/meliCurrencyResult.json'
import meliCategories from '../../../__mocks__/meliCategoriesResult.json'

describe('Item Mappers', function () {
  it('should format item', function () {
    const mappedItem = mapItem(meliItemResult, meliItemDescriptionResult, meliCurrency)
    expect(mappedItem).toEqual(localItemResult.item)
  })
  it('should format categories', function () {
    const mappedCategories = mapCategories(meliCategories)
    expect(mappedCategories).toEqual(localItemResult.categories)
  })
  it('should format currency', function () {
    const mappedCurrency = mapCurrency(meliItemResult, meliCurrency)
    expect(mappedCurrency).toEqual(localItemResult.item.price)
  })
})
