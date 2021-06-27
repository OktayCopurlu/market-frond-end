import React, { useContext } from "react";
import ProductContext from "../../../../context/productContext";
import "../../../../moduls/product/listProduct/main/productList.css";
import {
  Grid,
  Typography,
  AccordionSummary,
  Checkbox,
  Accordion,FormControlLabel
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as categoryLinksCss from "./categoryLinksStyle";

export default function CategoryLinks() {
  const classes = categoryLinksCss.useStyles();
  const productContext = useContext(ProductContext);

  const onSubmit = async (event) => {
    try {
      if (productContext.mainCategory === null) {
        return await productContext.mainCategoryHandler(event.target.id);
      } else {
        return await productContext.mainCategoryHandler(null);
      }
    } catch (error) {
      return await console.log(error);
    }
  };

  const array = ["Clothes", "Hausehold", "Electronic", "Toys", "Others"];
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Choose Category</Typography>
        </AccordionSummary>
        <Grid>
          {array.map((category, index) => {
            return (
              <FormControlLabel
                className={classes.categoryList}
                key={index}
                control={<Checkbox onChange={onSubmit} id={category} />}
                label={category}
              />
            );
          })}
        </Grid>
      </Accordion>
    </div>
  );
}
