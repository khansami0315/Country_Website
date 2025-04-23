import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndviDetails } from "../../api/postApi";
import { Loader } from "../../ul/Loader";
 const CountryDedtalis = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null); // changed from [] to null

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndviDetails(params.id);
        console.log("API response:", res);
        if (res.status === 200) {
          setCountry(res.data[0]); // the country is usually the first item in array
        }
      } catch (err) {
        console.error("Failed to fetch country details", err);
      }
    });
  }, [params.id]); // added param.id in dependency array

  if (isPending || !country) return <Loader />;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two-cols">
          <img
            src={country.flags?.svg}
            alt={country.flags?.alt || "Country flag"}
            className="flag"
          />
          <div className="country-content">
            <p className="card-title">{country.name?.official}</p>
            <div className="infoContainer">
              <p>Capital: {country.capital?.[0]}</p>
              <p>Region: {country.region}</p>
              <p>Population: {country.population?.toLocaleString()}</p>
              {/* Add more info if needed */}


              <p>
  <span className="card-description">
    Language: {country.languages && Object.values(country.languages).join(", ")}
  </span>
</p>


            </div>
          </div>
        </div>
        <div className="country-card-backbtn">
          <NavLink to="/Country" className="backbtn">
            <button>GO Back</button>
          </NavLink>

        </div>
      </div>
    </section>
  );
};



export default CountryDedtalis













