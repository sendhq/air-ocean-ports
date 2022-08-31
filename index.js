const { ports } = require('./lib/ports')
const { airlines } = require('./lib/airlines')
const airports = airlines.reduce((acc, curr) => {
  const airline = {
    country: curr['COUNTRY'],
    city: curr['CITY']['AIRPORT'],
    name: `${curr['CITY']['AIRPORT']} (${curr['IATA CODE']})`,
    iata_code: curr['IATA CODE'],
  }
  return [...acc, { ...airline, type: 'city' }, { ...airline, type: 'port' }]
}, [])

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

// airlines

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
}
