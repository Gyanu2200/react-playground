import axios from "axios";

//Api end point
// const apiEp = "https://www.omdbapi.com/?apikey=d05d7c70&t=prem";

//lets create one function that only calles the api and returns the data
export const fetchData = (str) => {
  const apiEp = `https://www.omdbapi.com/?apikey=d05d7c70&t=${str}`;
  console.log(str);
  //calling axios to get the data from the url, by default axios uses the get method
  const response = axios(apiEp);
  return response;
};
