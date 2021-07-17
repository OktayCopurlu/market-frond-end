import { makeStyles } from "@material-ui/core/styles";

const top = 50;
const left = 50;
export const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 540,
    backgroundColor: theme.palette.background.paper,
    padding: 35,
    borderRadius: 16,
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  },
}));
