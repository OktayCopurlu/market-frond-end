import React from 'react'
import WhatIsFreeMarketText from "./texts/whatIsFreeMarketText";
import DonorsText from "./texts/donorsText";
import Recipients from "./texts/recipientsText";
import { Carousel } from "react-bootstrap";
import "./freeMarket.css";

export default function HomeCarousel() {
    return (
      // <Carousel className="home-carousel" interval="30000">
      <Carousel className="home-carousel">
      <Carousel.Item>
            <div className="text-center text-home-page">
              <h1>FreeMarket</h1>
              <p>everything deserves a chance at a new life</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-left text-home-page">
              <h3>What is FreeMarket</h3>
              <WhatIsFreeMarketText />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-left text-home-page">
              <h3>Donors</h3>
              <DonorsText />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-left text-home-page">
              <h3>Recipients</h3>
              <Recipients />
            </div>
          </Carousel.Item>
        </Carousel>
    )
}
