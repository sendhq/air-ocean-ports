const { ports } = require('./lib/ports')
const { airports: airportsArray } = require('./lib/airports')
const { airlines: airlinesArray } = require('./lib/airlines')
const { shippingLines } = require('./lib/shippinglines')

const airports = airportsArray.reduce((acc, curr) => {
  const airport = {
    country: curr['COUNTRY'],
    city: curr['CITY']['AIRPORT'],
    name: `${curr['CITY']['AIRPORT']} (${curr['IATA CODE']})`,
    iata_code: curr['IATA CODE'],
  }
  return [...acc, { ...airport, type: 'city' }, { ...airport, type: 'port' }]
}, [])

const airlines = airlinesArray.map((x) => x.airline)
const shippinglines = shippingLines.map((x) => x.value)

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

const searchPortsByName = (name) => {
  return ports.filter((port) =>
    port.name.toLowerCase().includes(name.toLowerCase()),
  )
}

const searchPortsByCity = (city) => {
  return ports.filter((port) =>
    (port.province || '').toLowerCase().includes(city.toLowerCase()),
  )
}

const searchPortsByCountry = (country) => {
  return ports.filter((port) =>
    port.country.toLowerCase().includes(country.toLowerCase()),
  )
}

const searchByPorts = (searchString) => {
  return shuffle([
    ...searchPortsByName(searchString),
    ...searchPortsByCity(searchString),
    ...searchPortsByCountry(searchString),
  ])
}

// airports

const searchAirPortsByName = (name) => {
  return airports.filter((airline) =>
    airline.name.toLowerCase().includes(name.toLowerCase()),
  )
}

const searchAirPortsByCountry = (country) => {
  return airports.filter((airline) =>
    airline.country.toLowerCase().includes(country.toLowerCase()),
  )
}

const searchAirPortsByIATACode = (code) => {
  return airports.filter((airline) =>
    airline.iata_code.toLowerCase().includes(code.toLowerCase()),
  )
}

const searchByAirports = (string) => {
  return shuffle([
    ...searchAirPortsByCountry(string),
    ...searchAirPortsByName(string),
    ...searchAirPortsByIATACode(string),
  ])
}

const searchAllPorts = (value) => {
  return shuffle([...searchByAirports(value), ...searchByPorts(value)])
}

// console.log('sds', searchAirPortsByIATACode('AMA'))
// console.log('sds', searchByAirports('AMA'))

module.exports = {
  JSON: [...ports, ...airports],
  searchPortsByCity,
  searchPortsByCountry,
  searchPortsByName,
  searchByPorts,
  searchAirPortsByName,
  searchAirPortsByCountry,
  searchAirPortsByIATACode,
  searchByAirports,
  searchAllPorts,
  AIRLINES: airlines,
  SHIPPINGLINES: shippinglines,
}
