import React, { useContext, useState } from "react";
import ProductContext from "../../context/productContext";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import * as searchButtonCss from "./searchButtonStyle";
import { useTranslation } from "react-i18next";

export default function SearchButton() {
  const classes = searchButtonCss.useStyles();
  const { t } = useTranslation();
  const productContext = useContext(ProductContext);
  const [searchItem, setSearchItem] = useState("");

  const onChange = (event) => {
    setSearchItem(event.target.value);
    productContext.searchHandler(event.target.value);
  };
  const onClick = (event) => {
    event.preventDefault();
    productContext.searchHandler(searchItem);
  };
  return (
    <div className={classes.root}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder={t("SearchItems")}
          onChange={(event) => onChange(event)}/>
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
