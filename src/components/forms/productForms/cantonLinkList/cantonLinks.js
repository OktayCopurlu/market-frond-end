import React, { useContext} from "react";
import citiesJson from "../../../../context/city.json"; //import canton and city information
import ProductContext from "../../../../context/productContext";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
import * as cantonLinksCss from "./cantonLinkStyle"

export default function CantonLinks() {
  const classes = cantonLinksCss.useStyles();
  const productContext = useContext(ProductContext);

  const cantonArray = [];
  for (let index = 0; index < citiesJson.length; index++) {
    const element = citiesJson[index].canton.NAME;
    if (!cantonArray.includes(element)) {
      cantonArray.push(element);
    }
  }
  const onSubmit = async (event) => {
    try {
      if (productContext.canton === null) {
        return await productContext.cantonHandler(event.target.id);
      } else {
        return await productContext.cantonHandler(null);
      }
    } catch (error) {
      return await console.log(error);
    }
  };

  return (<div className={classes.root}>
    <Accordion className="mb-2">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Choose Canton</Typography>
      </AccordionSummary>
      <Grid>
      {cantonArray.sort().map((canton, index) => {
          return (
            <FormControlLabel className={classes.cantonList}
              key={index}
              control={<Checkbox onChange={onSubmit} id={canton} />}
              label={canton}
            />
          );
        })}
      </Grid>
    </Accordion>
  </div>

  );
}
