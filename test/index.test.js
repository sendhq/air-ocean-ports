const {
  searchPortsByCity,
  searchPortsByCountry,
  searchPortsByName,
  searchByPorts,
  searchAirPortsByName,
  searchAirPortsByCountry,
  searchAirPortsByIATACode,
  searchByAirports,
  searchAllPorts,
} = require('../index');

// Import the Jest testing library

// Test searchPortsByCity
const testSearchPortsByCityPass = () => {
  const results = searchPortsByCity('excellence');
  expect(results.length).toBe(0);
  // - success
  const resultssuccess = searchPortsByCity('LagOs');
  expect(resultssuccess.length).toBe(24);
};

// Test searchPortsByCountry
const testSearchPortsByCountry = () => {
  const results = searchPortsByCountry('Spain');
  expect(results.length).toBe(82);
  expect(results[0].country).toBe('Spain');
  expect(results[1].country).toBe('Spain');
};

// Test searchPortsByName
const testSearchPortsByName = () => {
  const results = searchPortsByName('Algeciras');
  expect(results.length).toBe(2);
  expect(results[0].name).toBe('Algeciras');
};

// Test searchByPorts
const testSearchByPorts = () => {
  const results = searchByPorts('Germany');
  expect(results.length).toBe(62);
  expect(results[0].country).toBe('Germany');
};

// Test searchAirportsByName
const testSearchAirportsByName = () => {
  const resultsFailed = searchAirPortsByName('Tokyo');
  expect(resultsFailed.length).toBe(6);

  // Successful case: Airport name found
  const resultsSuccessful = searchAirPortsByName('Abu Dhabi');
  expect(resultsSuccessful.length).toBe(2);
  expect(resultsSuccessful[0].name).toBe('Abu Dhabi - Abu Dhabi International (AUH)');
};

// Test searchAirportsByCountry
const testSearchAirportsByCountry = () => {
  const resultsFailed = searchAirPortsByCountry('Baliie');
  expect(resultsFailed.length).toBe(0);

  // Successful case: Country found
  const resultsSuccessful = searchAirPortsByCountry('Egypt');
  expect(resultsSuccessful.length).toBe(38);
  expect(resultsSuccessful[0].country).toBe('Egypt');
  expect(resultsSuccessful[1].country).toBe('Egypt');
};

// Test searchAirportsByIATACode
const testSearchAirportsByIATACode = () => {
  // Failed case: IATA code not found
  const resultsFailed = searchAirPortsByIATACode('XYZ');
  expect(resultsFailed.length).toBe(0);

  // Successful case: IATA code found
  const resultsSuccessful = searchAirPortsByIATACode('AUE');
  expect(resultsSuccessful.length).toBe(2);
  expect(resultsSuccessful[0].iata_code).toBe('AUE');
};

// Test searchByAirports
const testSearchByAirports = () => {
  const results = searchByAirports('USA');
  expect(results.length).toBe(938);
  expect(results[0].country).toBe('USA');
  expect(results[1].country).toBe('USA');
  expect(results[2].country).toBe('USA');
};

// Test searchAllPorts
const testSearchAllPorts = () => {
  const results = searchAllPorts('USA');
  expect(results.length).toBe(948);
  expect(results[0].country).toBe('USA');
  expect(results[1].country).toBe('USA');
  expect(results[2].country).toBe('USA');
};

// Run the tests
test('searchPortsByCity', testSearchPortsByCityPass);
test('searchPortsByCountry', testSearchPortsByCountry);
test('searchPortsByName', testSearchPortsByName);
test('searchByPorts', testSearchByPorts);
test('searchAirportsByName', testSearchAirportsByName);
test('searchAirportsByCountry', testSearchAirportsByCountry);
test('searchAirportsByIATACode', testSearchAirportsByIATACode);
test('searchByAirports', testSearchByAirports);
test('searchAllPorts', testSearchAllPorts);
