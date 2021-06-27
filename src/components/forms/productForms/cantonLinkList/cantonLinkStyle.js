import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
    },
    cantonList:{ 
        width: "48%",
        margin:0
    }
  }));