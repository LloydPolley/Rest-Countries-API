const fields =
  "?fields=name,population,region,subregion,capital,tld,flags,currencies,languages,borders";

const fieldCode = "?fields=name,population,region,capital,flags";

export const fetchHandler = async (props) => {
  const { queryKey } = props;
  const fetchType = queryKey[0];
  const queryValue = queryKey[1];
  console.log("queryKey", queryKey);

  switch (fetchType) {
    case "fetchCountries":
      return fetchCountry(queryValue);
    case "fetchCountryCode":
      return fetchCountryCode(queryValue);
    case "fetchRegion":
      console.log("Mangoes and papayas are $2.79 a pound.");
      break;
    default:
      console.log(`NOPE`);
  }
};

export const fetchCountry = async (queryValue) => {
  console.log("query value", queryValue);
  const url = !queryValue ? `all${fieldCode}` : `name/${queryValue}${fields}`;
  const response = await fetch(`https://restcountries.com/v3.1/${url}`);
  return response.json();
};

export const fetchCountryCode = async (props) => {
  const { queryKey } = props;
  const queryValue = queryKey[1];
  const url = `alpha?codes=${queryValue?.toString()}`;

  if (!queryValue) return;
  console.log("running", queryValue);
  const response = await fetch(
    `https://restcountries.com/v3.1/${url}${fieldCode}`
  );
  return response.json();
};

export const formatNumber = (input) => {
  try {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } catch (e) {
    console.log("no number");
  }
};
