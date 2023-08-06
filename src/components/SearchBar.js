const SearchBar = function ({ searchText, setSearchText }) {
  return (
    <div id="search-bar">
      <input
        id="search-input"
        type="search"
        placeholder="Search By Name, Email and Role"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
