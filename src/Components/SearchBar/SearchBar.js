import React, { useState } from "react";
import "./SearchBar.css";
import CachedIcon from "@mui/icons-material/Cached";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchBar(props) {
  const [search, setSearch] = useState("");

  const handleTextChange = (event) => {
    setSearch(event.target.value);
    //console.log(event.target.value);
  };

  const handleSearchClick = () => {
    const result = props.data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase())
    );

    console.log(result);

    props.setData(result);
  };

  const handleRefreshClick = () => {
    props.setData([]);
    props.getData();
    setSearch("");
  };

  //console.log(props.data);

  return (
    <div className="Search-bar">
      <div className="Search-bar-input">
        <TextField
          placeholder="Search Coins With Name or ID"
          fullWidth={true}
          value={search}
          onChange={handleTextChange}
        />
      </div>
      <div className="Search-bar-search">
        <Button
          variant="text"
          sx={{ marginTop: 3.5 }}
          onClick={handleSearchClick}
        >
          <SearchIcon sx={{ fontSize: 50 }} className="Search-icon" />
        </Button>
      </div>
      <div className="Search-bar-refresh">
        <Button
          variant="text"
          sx={{ marginTop: 3.5 }}
          onClick={handleRefreshClick}
        >
          <CachedIcon sx={{ fontSize: 50 }} className="Refresh-icon" />
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
