import React, { useEffect, useState } from 'react';
import { Carousel, Col, Row } from 'antd';
import { identity } from 'lodash';

import './style.scss';

export default function SectionBanners({
  banners = [],
  id = null,
  onImagesLoaded = identity,
}) {
  const [totalImagesLoaded, setTotalImagesLoaded] = useState(0);

  useEffect(() => {
    if (totalImagesLoaded === banners.length) {
      onImagesLoaded();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalImagesLoaded]);

  return (
    <section id={id} className="pd-home-banners">
      <Row>
        <Col xs={24}>
          <Carousel autoplay>
            {banners.length > 0 &&
              banners.map((banner, index) => (
                <div className="pd-home-banners-container" key={index}>
                  <div className="banner-image">
                    <img
                      src={banner.image}
                      alt="Eksklusif"
                      onLoad={() => {
                        setTotalImagesLoaded((prevState) => prevState + 1);
                      }}
                    />
                  </div>
                  <div className="banner-title">
                    <strong className="title-1">{banner.caption}</strong>
                  </div>
                </div>
              ))}
          </Carousel>
        </Col>
      </Row>
    </section>
  );
}
