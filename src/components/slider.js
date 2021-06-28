import React from "react";
import { Carousel } from "react-bootstrap";
export default function Slider(props) {
  const photos = props.photos;

  return (
    <Carousel interval="30000">
      {photos.map((photos, index) => (
        <Carousel.Item key={index}>
          <img className="images mb-2" src={photos} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
