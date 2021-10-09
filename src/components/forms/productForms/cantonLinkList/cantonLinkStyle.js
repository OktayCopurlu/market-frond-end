import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // [theme.breakpoints.down('1025')]:{
    //   width: 705,
    // }, [theme.breakpoints.down('705')]:{
    //   width: "100%",
    // }
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  cantonList: {
    width: "100%",
    margin: 0,
  },

}));
