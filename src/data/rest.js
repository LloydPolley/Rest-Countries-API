export const fetchAll = async () => {
  let response = await fetch(`https://restcountries.eu/rest/v2/all`);
  let data = await response.json();
  return data;
};

export const fetchCountry = async country => {
  let response = await fetch(
    `https://restcountries.eu/rest/v2/name/${country}`
  );
  let data = await response.json();
  return data;
};

export const regionFetch = async region => {
  let response;
  if (region === "All") {
    response = await fetch(`https://restcountries.eu/rest/v2/all`);
  } else {
    response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
  }
  let data = await response.json();
  return data;
};

export const searchFetch = async searchValue => {
  console.log(searchValue, "searchvalue");
  let response;
  if (searchValue !== "") {
    response = await fetch(
      `https://restcountries.eu/rest/v2/name/${searchValue}`
    );
    
  }else{
    response = await fetch(`https://restcountries.eu/rest/v2/all`);
  }
  let data = await response.json();
    return data;
};

export const borderFetch = async (...args) => {
  if (args[0].length !== 0) {
    let borderString = args
      .toString()
      .toLowerCase()
      .replace(/,/g, ";");
    let response = await fetch(
      `https://restcountries.eu/rest/v2/alpha?codes=${borderString}`
    );
    let data = await response.json();
    return data;
  } else {
    return undefined;
  }
};

export const formatNumber = input => {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
