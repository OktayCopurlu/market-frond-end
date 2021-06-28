import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    input: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }));