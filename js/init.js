function fetchApi(url) {
  return fetch(url)
  .then(response => response.json())
  .then(json => {
    console.log("->", json);
    return json;
   })
  .catch(err => console.log(err))
}

fetchApi('https://www.trackcorona.live/api/countries');
