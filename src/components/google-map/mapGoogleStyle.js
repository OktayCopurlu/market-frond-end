import { makeStyles } from "@material-ui/core/styles";

const width = 600;
const height = 600;
const positionTop = 50;
const positionLeft = 50;
export const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: width,
    height: height,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height:"50%"
    },
  },
}));

export function getModalStyle() {
  return {
    top: `${positionTop}%`,
    left: `${positionLeft}%`,
    transform: `translate(-${positionTop}%, -${positionLeft}%)`,
  };
}

export const mapStyles = {
  height: "100%",
  width: "100%",
};
