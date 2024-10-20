import React from "react";
import { country_data } from "../../../constant/data";

const CountryName = ({ params }: { params: { country_name: string } }) => {
  if (params.country_name == "pakistan") {
    return (
      <div className="font-bold text yellow-500 ml-7">
        <h1 className="text-2xl text-white font-bold underline p-4">
          Country: {country_data.pakistan.name}
        </h1>
        <p>Population: {country_data.pakistan.population}</p>
        <p>Capital: {country_data.pakistan.capital}</p>
      </div>
    );
  } else if (params.country_name == "china") {
    return (
      <div className="font-bold text-yellow-500 ml-7">
        <h1 className="text-2xl text-white font-bold underline p-4">
          Country: {country_data.china.name}
        </h1>
        <p>Name: {country_data.china.name}</p>
        <p>Population: {country_data.china.population}</p>
        <p>Capital: {country_data.china.capital}</p>
      </div>
    );
  } else if (params.country_name == "japan") {
    return (
      <div className="font-bold text-yellow-500 ml-7">
        <h1 className="text-2xl text-white font-bold underline p-4">
          Country: {country_data.japan.name}
        </h1>
        <p>Name: {country_data.japan.name}</p>
        <p>Population: {country_data.japan.population}</p>
        <p>Capital: {country_data.japan.capital}</p>
      </div>
    );
  }else {
    return (
      <h1 className="text-2xl font-bold underline p-4">
        ⚠ Country not found 🌐
      </h1>
    );
  }
};

export default CountryName;