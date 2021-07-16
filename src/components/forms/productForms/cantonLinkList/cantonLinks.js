import React, { useContext } from "react";
import citiesJson from "../../../../context/city.json"; //import canton and city information
import ProductContext from "../../../../context/productContext";
import {
  RadioGroup,
  Radio,
  Accordion,
  AccordionSummary,
  Typography,
  Grid,
  FormControlLabel,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as cantonLinksCss from "./cantonLinkStyle";
import { useTranslation } from "react-i18next";
export default function CantonLinks() {
  const classes = cantonLinksCss.useStyles();
  const productContext = useContext(ProductContext);
  const {t}= useTranslation()
  const cantonArray = [];
  for (let index = 0; index < citiesJson.length; index++) {
    const element = citiesJson[index].canton.NAME;
    if (!cantonArray.includes(element)) {
      cantonArray.push(element);
    }
  }
  const onSubmit = async (event) => {
    try {
      if (event.target.value === "null") {
        return await productContext.cantonHandler(null);
      } else {
        return await productContext.cantonHandler(event.target.value);
      }
    } catch (error) {
      return await console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <Accordion className="mt-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{t('ChooseCanton')}</Typography>
        </AccordionSummary>
        <Grid>
          <RadioGroup>
            <FormControlLabel
              className={classes.cantonList}
              control={<Radio value="null" onChange={onSubmit} />}
              label="Cancel selection"
            />
            {cantonArray.sort().map((canton, index) => {
              return (
                <FormControlLabel
                  className={classes.cantonList}
                  key={index}
                  control={<Radio value={canton} onChange={onSubmit} />}
                  label={canton}
                />
              );
            })}
          </RadioGroup>
        </Grid>
      </Accordion>
    </div>
  );
}
