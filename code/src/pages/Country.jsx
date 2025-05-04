import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../ul/Loader";
import "./Country.css";
import { SearchFilter } from "../ul/SearchFilter";
import CountryCard from "../components/layouts/CountryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(() => {
      const fetchData = async () => {
        try {
          const res = await getCountryData();
          setCountries(res.data);
        } catch (error) {
          console.error("Error fetching country data:", error);
        }
      };
      fetchData();
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true; // Return true when no search term
  };

  const filterRegion = (country) => {
    if (filter === "all") return true; // Show all countries when filter is "all"
    return country.region === filter;
  };

  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
  
      <section className="country-section">
        <ul className="grid grid-four-cols">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((curCountry, index) => (
              <CountryCard country={curCountry} key={index} />
            ))
          ) : (
            <div className="no-results">
              <p>No countries found matching your criteria</p>
            </div>
          )}
        </ul>
      </section>
    </>
  );
};