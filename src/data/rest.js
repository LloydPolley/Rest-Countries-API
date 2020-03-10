export const fetchAll = async () => {
  let response = await fetch(`https://restcountries.eu/rest/v2/all`);
  let data = await response.json();
  return data;
};



export const regionFetch = async (region) => {
  let response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
  let data = await response.json();
  return data;
};


export const searchFetch = async (searchValue) => {
  let response = await fetch(`https://restcountries.eu/rest/v2/name/${searchValue}`);
  let data = await response.json();
  return data;
};



// console.log(fetchAll);
