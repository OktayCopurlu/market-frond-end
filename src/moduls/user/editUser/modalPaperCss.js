import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    minHeight: 580,
    backgroundColor: theme.palette.background.paper,
    padding: 35,
    borderRadius: 16,
  },
}));
