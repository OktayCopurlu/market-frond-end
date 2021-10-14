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

export default function WishCard(props) {
  const { element, index } = props.element;
  const [picture, setPicture] = useState([]);
  const classes = styles.useStyles();
  const tablet = useMediaQuery("(max-width:830)");
  const matches = useMediaQuery("(max-width:767px)");
  
  const showPicture =()=> {
    userService.getUsers().then((user) => {
      setPicture(user);
    });
    
  //     try {
  //       const user = await userService.getUsers();
  //       const userArray = await user;
  //       return setPicture(userArray);
  //     } catch (error) {
  //       console.log(error);
  //     }
 };
  useEffect(() => {
    showPicture();
  }, []);
  return (
    <Card
      key={index}
      className={
        matches ? classes.rootMedia : tablet ? classes.tablet : classes.root
      }
    >
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
            className="d-flex justify-content-between"
          >
            <div variant="body2" color="textSecondary" component="p">
              {picture.map((user) => {
                if (user.user_id === element.userId) {
                  return <UserInfoInWishCard key={user.user_id} user={user} />;
                }
                return null;
              })}
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              {element.city}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {element.detail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="bg-light text-dark">
        <Link to="#" className="text-info d-block">
          <i className="fas fa-phone"></i> {element.contactTel}
        </Link>
      </CardActions>
    </Card>
  );
}
