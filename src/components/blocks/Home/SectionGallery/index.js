import React, { useEffect, useState } from 'react';
import { withGetScreen } from 'react-getscreen';

import { Carousel, Col, Row, Button } from 'antd';

import Container from 'components/base/container';

import './style.scss';

function SectionGallery({ id, content = [], isMobile, isTablet }) {
  const [galleryImage, setGalleryImage] = useState([]);

  function initiateGalleryRow(items, number) {
    let temp = [];
    const result = [];

    items.forEach((item) => {
      if (temp.length < number) {
        temp.push(item);
      } else {
        result.push(temp);
        temp = [];
        temp.push(item);
      }
    });

    if (temp.length > 0) {
      result.push(temp);
    }

    setGalleryImage(result);
  }

  useEffect(() => {
    if (isMobile() || isTablet()) {
      initiateGalleryRow(content, 4);
    } else {
      initiateGalleryRow(content, 6);
    }
  }, [content, isMobile, isTablet]);

  return (
    <section id={id} className="pd-home-gallery section">
      <Container>
        <Row>
          <Col xs={24}>
            <div className="title-2 gold">
              <strong>
                <u>GALLERY</u>
              </strong>
            </div>
            <div className="title-3 gray">
              Share Your Own Experiences with #despectrajkt
            </div>
          </Col>

          <Col xs={24} lg={0}>
            <Carousel dots={false} style={{ textAlign: 'center' }}>
              {galleryImage.length > 0 &&
                galleryImage.map((gallery, index) => (
                  <Row key={index} gutter={[12, 12]}>
                    {gallery.map((item, index) => (
                      <Col xs={12} lg={0} key={index}>
                        <a
                          href={item.instagram_link}
                          target="_blank"
                          rel="noopener noreferrer">
                          <div className="image-container">
                            <img src={item.image_thumbnail} alt="Gallery" />
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                ))}
            </Carousel>
          </Col>

          <Col xs={0} lg={24}>
            <Carousel dots={false} arrows>
              {galleryImage.length > 0 &&
                galleryImage.map((gallery, index) => (
                  <Row key={index} gutter={[12, 12]}>
                    {gallery.map((item, index) => (
                      <Col xs={0} lg={8} key={index}>
                        <a
                          href={item.instagram_link}
                          target="_blank"
                          rel="noopener noreferrer">
                          <div className="image-container">
                            <img src={item.image_thumbnail} alt="Gallery" />
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                ))}
            </Carousel>
          </Col>

          <Col xs={24}>
            <div className="pd-align-center pd-margin-top-lg">
              <a
                href="https://www.instagram.com/despectra.jkt/"
                target="_blank"
                rel="noopener noreferrer">
                <Button className="pd-button pd-button-gold">
                  Follow @despectra.jkt
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default withGetScreen(SectionGallery);
