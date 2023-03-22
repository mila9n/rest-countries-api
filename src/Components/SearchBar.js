import React from "react";
import { MagnifyingGlass } from "phosphor-react";
import { SearchBarStyle } from "./style/SearchBar.styled";

const SearchBer = (props) => {
  const newList = props.searchedList.slice(0, 10).map((item, index) => (
    <div
      key={index}
      onClick={props.handleSearchedCountryClick}
      id={item.name.common}
    >
      <img src={item.flags.svg} />
      {item.name.common}
    </div>
  ));
  return (
    <SearchBarStyle>
      <span className="search__symbol">
        <MagnifyingGlass size={16} />
      </span>
      <input
        type="text"
        onChange={props.handleSearchChange}
        onKeyDown={props.handleKeyDown}
        value={props.search}
        placeholder="Search for a country..."
      />
      {props.search == "" ? null : (
        <div className="searchedList">{newList}</div>
      )}
    </SearchBarStyle>
  );
};

export default SearchBer;
