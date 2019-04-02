export const mapItemsSearch = (items, currencies) =>
  items.results.map(item => {
    let updatedItem = {
      id: item.id,
      title: item.title,
      price: mapCurrencySearch(item, currencies),
      picture: item.thumbnail.replace('I.jpg', 'A.jpg'),
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      location: item.address.state_name
    }
    return updatedItem
  })

export const mapCategoriesSearch = categories => {
  const findCategory = categories.find(filter => filter.id === 'category')
  if (!findCategory) return {}
  const categoriesTitles = findCategory.values.map(category => category.name)

  return categoriesTitles
}

export const mapCurrencySearch = (item, currencies) => {
  const currency = currencies.find(filter => filter.id === item.currency_id)
  return {
    currency: currency.symbol,
    amount: item.price,
    decimals: currency.decimal_places
  }
}
