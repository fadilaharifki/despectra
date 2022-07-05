import React from 'react';
import { Button, Icon, Row, Col } from 'antd';

import Container from 'components/base/container';
import HtmlRender from 'components/base/html-reader';

import './style.scss';

export function Footer({ content }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pd-footer">
      <Container>
        <Row>
          <Col xs={24} lg={10}>
            <div className="pd-footer-logo">
              <img src={content.logo} alt="Spectra" />
            </div>
            <ul className="list">
              <li>
                <div className="title-2 gold">LOCATION</div>
              </li>
              <li className="description">
                <HtmlRender content={content.location} />
              </li>
              <li className="description location">
                <a
                  href={content.googleMapLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="icon-map"
                    src={`${process.env.PUBLIC_URL}/icon/map.png`}
                    alt="location"
                  />
                  View Maps
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${process.env.REACT_APP_WA_NUMBER}?text=Hello,%20I'd%20like%20to%20make%20a%20reservation%20at%20DeSpectra.`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button className="pd-button pd-button-gold pd-margin-top-lg">
                    Reservation
                  </Button>
                </a>
              </li>
              <li className="social-media pd-margin-top-md">
                <div className="list">
                  <a
                    href={`https://www.fb.me/despectra.jkt`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Icon type="facebook" theme="filled" />
                  </a>
                </div>
                <div className="list">
                  <a
                    href={`https://www.twitter.com/despectrajkt`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Icon type="twitter" />
                  </a>
                </div>
                <div className="list">
                  <a
                    href={`https://www.instagram.com/despectra.jkt`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Icon type="instagram" />
                  </a>
                </div>
              </li>
            </ul>
          </Col>
          <Col xs={24} lg={{ span: 10, offset: 4 }}>
            <div className="title-2 gold">WE ARE HIRING!</div>
            <div className="description">
              <HtmlRender content={content.hiringDescription} />
            </div>

            <div className="title-2 gold pd-margin-top-lg">STAY CONNECTED</div>
            <div className="description">p: +62 812-9078-1915</div>
            <div className="description">
              <a href="mailto:info@despectrajakarta.com">
                e: info@despectrajakarta.com
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <div className="description gold pd-align-center">
              © {currentYear} DeSpectra. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default { Footer };
