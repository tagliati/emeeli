export const mapItem = (item, desc, currencies) => ({
  id: item.id,
  title: item.title,
  price: mapCurrency(item, currencies),
  picture: item.thumbnail.replace('I.jpg', 'A.jpg'),
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
  sold_quantity: item.sold_quantity,
  description: desc.plain_text
})

export const mapCategories = categories => {
  const categoriesTitles = categories.path_from_root.map(category => category.name)
  return categoriesTitles
}

export const mapCurrency = (item, currencies) => {
  const currency = currencies.find(filter => filter.id === item.currency_id)
  return {
    currency: currency.symbol,
    amount: item.price,
    decimals: currency.decimal_places
  }
}
