import React, { useState, useEffect } from "react";
import * as userService from "../../services/users-service";
import UserInfoInWishCard from "../../modules/wish/listWish/userInfoInWishCard";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import * as styles from "./wishCardStyle";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import MapGoogle from "../../modules/product/listProduct/google-map/mapGoogle";

export default function WishCard(props) {
  const { element, index } = props.element;
  const canton = element.canton;
  const city = element.city;
  const [picture, setPicture] = useState([]);
  const classes = styles.useStyles();
  const tablet = useMediaQuery("(max-width:830)");
  const matches = useMediaQuery("(max-width:767px)");
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { t } = useTranslation();

  const showPicture = () => {
    userService.getUsers().then((user) => {
      setPicture(user);
    });
  };
  useEffect(() => {
    showPicture();
  }, []);
  return (
    <Card
      key={index}
      className={
        matches ? classes.rootMedia : tablet ? classes.tablet : classes.root}>
      <CardActionArea>
        <CardContent>
          <div className="d-flex justify-content-between">
            <Typography gutterBottom variant="h5" component="h2">
              {element.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {element.canton}
            </Typography>
          </div>
          <div
            variant="body2"
            color="textSecondary"
            className="d-flex justify-content-between">
            <div variant="body2" color="textSecondary" component="p">
              {picture.map((user) => {
                if (user.user_id === element.userId) {
                  return <UserInfoInWishCard key={user.user_id} user={user} />;
                }
                return null;
              })}
            </div>
            <div variant="body2" color="textSecondary" component="p">
            <div className="mb-0">
            <MapGoogle address={{ canton, city }} />
          </div>
            </div>
          </div>
          <div variant="body2" color="textSecondary" component="p">
            {element.detail}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className="bg-light text-dark">
        {isAuthenticated ? (
          <div className="d-flex justify-content-between w-100">
          <a href={`tel:${element.contactTel}`} className="text-info">
            <i className="fas fa-phone"></i> {element.contactTel}
          </a>
          <a href={`mailto:${element.contactEmail}`} className="text-info ">{element.contactEmail}</a></div>
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
            {t("PleaseSignUp")}
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
