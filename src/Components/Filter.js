const Filter = (props) => {
  return (
    <div className="regions">
      <select onChange={props.handleOptionChange} value={props.region}>
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
  );
};

export default Filter;
