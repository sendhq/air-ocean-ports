const { ports } = require('./lib/ports')
const { airlines } = require('./lib/airlines')
const airports = airlines.map((airline) => ({
  country: airline['COUNTRY'],
  city: airline['CITY']['AIRPORT'],
  name: airline['CITY']['AIRPORT'],
  iata_code: airline['IATA CODE'],
}))

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
  return [
    ...searchPortsByName(searchString),
    ...searchPortsByCity(searchString),
    ...searchPortsByCountry(searchString),
  ]
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

module.exports = {
  JSON: ports,
  searchPortsByCity,
  searchPortsByCountry,
  searchPortsByName,
  searchByPorts,
  searchAirPortsByName,
  searchAirPortsByCountry,
  searchAirPortsByIATACode,
}
