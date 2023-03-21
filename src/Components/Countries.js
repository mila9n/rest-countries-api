import React from "react";
import { ContainerStyle } from "./style/Container.styled";
import { MagnifyingGlass } from "phosphor-react";
import CountryCard from "./CountryCard";
import { CountriesStyled } from "./style/Countries.styled";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  changePageNumber,
  changeRegion,
} from "../Redux/Reducer/CountriesReducer";

const Countries = () => {
  const region = useSelector((state) => state.countries.region);
  const currentPage = useSelector((state) => state.countries.pageNumber);

  const [countries, setCountries] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [countryName, setCountryName] = React.useState("");
  // const [, setCurrentPage] = React.useState(0);
  const [pagination, setPagination] = React.useState(true);

  const dispatch = useDispatch();

  const newCountries = countries.filter((item) => {
    if (region == "") {
      return item;
    } else {
      return item.region == region;
    }
  });

  const countriesPerPage = 12;
  const visitedCountries = currentPage * countriesPerPage;
  const totalPages = Math.ceil(newCountries.length / countriesPerPage);

  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  React.useEffect(() => {
    if (search == "") {
      setCountryName("");
      setPagination(true);
    }
  }, [search]);

  const CountriesArr =
    countries.length > 0
      ? countryName == ""
        ? countries
            .filter((item) => {
              if (region == "") {
                return item;
              } else {
                return item.region == region;
              }
            })
            .slice(visitedCountries, visitedCountries + countriesPerPage)
            .map((item, index) => {
              return (
                <CountryCard
                  img={item.flags.svg}
                  alt={item.flags.alt}
                  name={item.name.common}
                  capital={item.capital}
                  population={item.population.toLocaleString()}
                  key={index}
                  region={item.region}
                  detail={item.name.common}
                />
              );
            })
        : countries
            .filter((item) => {
              return item.name.common == countryName;
            })
            .map((item, index) => {
              return (
                <CountryCard
                  img={item.flags.svg}
                  alt={item.flags.alt}
                  name={item.name.common}
                  capital={item.capital}
                  population={item.population.toLocaleString()}
                  region={item.region}
                  key={index}
                  detail={item.name.common}
                />
              );
            })
      : null;

  const handleOptionChange = (e) => {
    setCountryName("");
    setSearch("");
    setPagination(true);
    dispatch(changePageNumber({ number: 0 }));
    dispatch(changeRegion({ region: e.target.value }));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(changeRegion({ region: "" }));
      setPagination(false);
      let country = search.split(" ");
      let newCountry = "";
      for (let name of country) {
        newCountry +=
          name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + " ";
      }
      setCountryName(newCountry.trimEnd());
      // } else if (e.key === "Backspace") {
      //   if (search.length < 2) {
      //     console.log("backspace");
      //   } else {
      //     return;
      //   }
    } else {
      return;
    }
  };

  const handlePageChange = (e) => {
    dispatch(changePageNumber({ number: e.selected }));
  };

  return (
    <CountriesStyled>
      <ContainerStyle>
        <div className="filters">
          <div className="search">
            <span className="search__symbol">
              <MagnifyingGlass size={16} />
            </span>
            <input
              type="text"
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              value={search}
              placeholder="Search for a country..."
            />
          </div>
          <div className="regions">
            <select onChange={handleOptionChange} value={region}>
              <option value="" hidden={true}>
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
              <option value="">All</option>
            </select>
          </div>
        </div>
        <div className="countries__cards">{CountriesArr}</div>
        {pagination && (
          <div className="pagination">
            <ReactPaginate
              nextLabel=">"
              previousLabel="<"
              pageCount={totalPages}
              onPageChange={handlePageChange}
              containerClassName={"paginationButtons"}
              activeClassName={"activeButton"}
              breakClassName={"breakButton"}
              forcePage={currentPage}
            />
          </div>
        )}
      </ContainerStyle>
    </CountriesStyled>
  );
};

export default Countries;
