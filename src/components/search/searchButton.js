import React, { useContext, useState } from "react";
import ProductContext from "../../context/productContext";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import * as searchButtonCss from "./searchButtonStyle"

export default function SearchButton() {
  const classes = searchButtonCss.useStyles();

  const productContext = useContext(ProductContext);
  const [searchItem, setSearchItem] = useState("");

  //search button
  const onClick = (event) => {
    event.preventDefault();
    productContext.searchHandler(searchItem);
  };

  return (
    <div className="input-group mb-3">
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Items"
          onChange={(event) => setSearchItem(event.target.value)}
        />
        <IconButton
          type="submit"
          onClick={onClick}
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}