import React from "react";
import Slider from "../slider";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Card,CardActions,CardActionArea,CardContent,CardMedia,Typography,useMediaQuery } from "@material-ui/core";
import * as styles from "./productCardStyle"


export default function ProductCard(props) {
  
  const element = props.element;
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const classes = styles.useStyles();
  const matches = useMediaQuery('(max-width:767px)');

  return (
    <Card className={matches ? classes.rootMedia : classes.root}>
      <CardActionArea>
        {element.photos.length > 0 ? (
          <CardMedia className={classes.media}>
            <Slider photos={element.photos} />
          </CardMedia>
        ) : (
          <CardMedia className={classes.media}>
            <img
              className="images"
              alt="no photos"
              src="https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
            />
          </CardMedia>
        )}
        <CardContent>
          <div className="d-flex justify-content-between">
            <Typography gutterBottom variant="h5" component="h2">
              {element.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {element.canton}
            </Typography>
          </div>
          <Typography className="d-flex justify-content-between" variant="body2" color="textSecondary" component="p">
          <Typography variant="body2" color="textSecondary" component="p">
            {element.condition}
          </Typography> 
          <Typography variant="body2" color="textSecondary" component="p">
            {element.city}
          </Typography>
           </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {element.category}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {element.size ? "Size:" : null} {element.size}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {element.dimensions ? "Dimensions:" : null}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {element.dimensions}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {element.detail}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {isAuthenticated ? (
              <Link to="#" className="text-info d-block">
                <i className="fas fa-envelope"></i> {element.contactEmail}
              </Link>
            ) : null}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions  className="bg-light text-dark">
        {isAuthenticated ? (
          <Link to="#" className="text-info d-block">
            <i className="fas fa-phone"></i> {element.contactTel}
          </Link>
        ) : (
          <Link
            to="/SignUp"
            onClick={() =>
              loginWithRedirect({
                screen_hint: "signup",
              })
            }
            className="text-danger"
          >
            Please SignUp to see contact information.
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
