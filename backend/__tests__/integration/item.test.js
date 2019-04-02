import mockAxios from 'jest-mock-axios'

import meliItemResult from '../../__mocks__/meliItemResult.json'
import meliItemDescriptionResult from '../../__mocks__/meliItemDescriptionResult.json'
import localItemResult from '../../__mocks__/localItemResult.json'
import meliCurrency from '../../__mocks__/meliCurrencyResult.json'
import meliCategories from '../../__mocks__/meliCategoriesResult.json'

const request = require('supertest')
const server = require('../../src/server')

describe('GET /user', function () {
  it('responds with formatted items json', function (done) {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: meliItemResult })
    )

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: meliItemDescriptionResult })
    )

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: meliCurrency })
    )

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: meliCategories })
    )

    request(server)
      .get('/api/items/MLA687321144')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err
        expect(res.body).toEqual(localItemResult)
        done()
      })
  })
})
