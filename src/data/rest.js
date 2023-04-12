export const fetchHandler = async (props) => {
  const { queryKey } = props;
  const fetchType = queryKey[0];
  const queryValue = queryKey[1];
  console.log("queryKey", queryKey);

  switch (fetchType) {
    case "fetchCountries":
      return fetchCountry(queryValue);
    case "fetchRegion":
      console.log("Mangoes and papayas are $2.79 a pound.");
      break;
    default:
      console.log(`NOPE`);
  }
};

export const fetchCountry = async (queryValue) => {
  console.log("queryValue", queryValue);
  const url = !queryValue ? "all" : `name/${queryValue}`;
  const response = await fetch(`https://restcountries.com/v3.1/${url}`);
  console.log(`https://restcountries.com/v3.1/${url}`);
  return response.json();
};

export const regionFetch = async (region) => {
  let response;
  if (region === "All") {
    response = await fetch(`https://restcountries.eu/rest/v2/all`);
  } else {
    response = await fetch(`https://restcountries.eu/v3.1/region/{region}`);
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
