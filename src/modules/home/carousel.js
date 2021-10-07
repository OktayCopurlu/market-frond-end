import React from 'react'
import WhatIsFreeMarketText from "./texts/whatIsFreeMarketText";
import DonorsText from "./texts/donorsText";
import Recipients from "./texts/recipientsText";
import { Carousel } from "react-bootstrap";
import "./freeMarket.css";
import { useTranslation } from "react-i18next";

export default function HomeCarousel() {
const {t} = useTranslation()
    return (
      <Carousel className="home-carousel" interval={30000}>
      <Carousel.Item>
            <div className="text-center text-home-page">
              <h1>FreeMarket</h1>
              <p>{t('FreeMarket')}</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-left text-home-page">
              <h3>{t('WhatIsFreeMarket')}</h3>
              <WhatIsFreeMarketText />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-left text-home-page">
              <h3>{t('Donors')}</h3>
              <DonorsText />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-left text-home-page">
              <h3>{t('Recipients')}</h3>
              <Recipients />
            </div>
          </Carousel.Item>
        </Carousel>
    )
}
