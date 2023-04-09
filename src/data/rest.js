export const fetchCountry = async (name) => {
  console.log("name", name?.queryKey[1]);
  const url = !name?.queryKey[1] ? "all" : `name/${name?.queryKey[1]}`;
  const response = await fetch(`https://restcountries.com/v3.1/${url}`);
  return response.json();
};

export const regionFetch = async (region) => {
  let response;
  if (region === "All") {
    response = await fetch(`https://restcountries.eu/rest/v2/all`);
  } else {
    response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
  }
  let data = await response.json();
  return data;
};

export const searchFetch = async (searchValue) => {
  console.log(searchValue, "searchvalue");
  let response;
  if (searchValue !== "") {
    response = await fetch(
      `https://restcountries.eu/rest/v2/name/${searchValue}`
    );
  } else {
    response = await fetch(`https://restcountries.eu/rest/v2/all`);
  }
  let data = await response.json();
  return data;
};

export const borderFetch = async (...args) => {
  if (args[0].length !== 0) {
    let borderString = args.toString().toLowerCase().replace(/,/g, ";");
    let response = await fetch(
      `https://restcountries.eu/rest/v2/alpha?codes=${borderString}`
    );
    let data = await response.json();
    return data;
  } else {
    return undefined;
  }
};

export const formatNumber = (input) => {
  try {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } catch (e) {
    console.log("no number");
  }
};
