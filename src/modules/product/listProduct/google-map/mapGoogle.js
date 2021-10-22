import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Modal from "@material-ui/core/Modal";
import * as googleMapService from "../../../../services/google-map-service";
import * as googleMapStyle from "./mapGoogleStyle";

export default function MapGoogle(props) {
  const { canton, city } = props.address;
  const [address] = useState({ city, canton });
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(googleMapStyle.getModalStyle);
  const classes = googleMapStyle.useStyles();
  const [center, setCenter] = useState({});

  function handleClose(event) {
    event.preventDefault();
    setOpen(false);
  }
  function handleOpen(event) {
    event.preventDefault();
    setOpen(true);
  }

  useEffect(() => {
    const getGoogleLocation = async () => {
      try {
        let googleLocation = await googleMapService.getLocationFromGoogle(
          address
        );
        setCenter(googleLocation.results[0].geometry.location);
      } catch (error) {
        console.log("Get location failed", error);
      }
    };
    getGoogleLocation();
  }, [address]);
  return (
    <>
      <Link to="#" onClick={handleOpen} className="mr-2">
        <i className="fas fa-map-marker-alt"></i>
      </Link>

      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <LoadScript googleMapsApiKey="AIzaSyCBh5Ush8mwgtUgRuw3umrQ-79n6RGfiWM&v">
            <GoogleMap
              maxZoom={20}
              mapContainerStyle={googleMapStyle.mapStyles}
              zoom={13}
              center={center}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </Modal>
    </>
  );
}
