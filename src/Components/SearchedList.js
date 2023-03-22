const SearchedList = (props) => {
    return (
        {props.search == "" ? null : props.searchedList
            .slice(0, 10)
            .map((item) => (
              <div onClick={props.handleSearchedCountryClick}>{item.name.common}</div>
            ))}
    )
}

export default SearchedList