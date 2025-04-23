import axios from "axios";
//import api from "./axiosConfig";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET METHOD
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};


  // /// get  metod  for  the  indvi country name
  export const getCountryIndviDetails = (name) => {
    return api.get(
      `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );
  };
  
