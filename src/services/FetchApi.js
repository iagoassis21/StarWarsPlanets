async function FetchApi() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

export default FetchApi;
