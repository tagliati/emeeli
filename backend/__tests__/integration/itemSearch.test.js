import mockAxios from 'jest-mock-axios'

import meliSearchResult from '../../__mocks__/meliSearchResult.json'
import meliSearchNoResult from '../../__mocks__/meliSearchNoResult.json'
import meliCurrency from '../../__mocks__/meliCurrencyResult.json'
import localSearchResult from '../../__mocks__/localSearchResult.json'
import localSearchNoResult from '../../__mocks__/localSearchNoResult.json'

const request = require('supertest')
const server = require('../../src/server')

describe('Searching items', function () {
  it('with valid term should responds with formatted search items json', function (done) {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: meliSearchResult })
    )

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: meliCurrency })
    )

    request(server)
      .get('/api/items?search=carro')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err
        expect(res.body).toEqual(localSearchResult)
        done()
      })
  })

  it('with invalid term should responds with not found message', function (done) {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: meliSearchNoResult })
    )

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: meliCurrency })
    )

    request(server)
      .get('/api/items?search=xpto')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err
        expect(res.body).toEqual(localSearchNoResult)
        done()
      })
  })
})
