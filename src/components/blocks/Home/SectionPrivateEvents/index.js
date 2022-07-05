import React from 'react';
import { Button, Col, Row } from 'antd';

import Container from 'components/base/container';
import HtmlRender from 'components/base/html-reader';

import './style.scss';

export default function PrivateEvents({ eventPrivateContent, id }) {
  return (
    <section id={id} className="pd-home-private-events">
      <Row>
        <Col xs={0} lg={24}>
          <div
            className="background-image-desktop"
            style={{
              background: `url(${eventPrivateContent.backgroundUrl}) no-repeat`,
              backgroundSize: 'cover',
            }}>
            <Container>
              <Row type="flex" align="middle" style={{ height: '100%' }}>
                <Col xs={0} lg={{ span: 10, offset: 14 }}>
                  <div className="text-container">
                    <div className="title-2 gold">
                      <strong>PRIVATE EVENTS</strong>
                    </div>
                    <div className="description white">
                      <HtmlRender content={eventPrivateContent.description} />
                    </div>
                    <a
                      href={`https://wa.me/${process.env.REACT_APP_WA_NUMBER}?text=Hello,%20I'd%20like%20to%20make%20a%20reservation%20at%20DeSpectra.`}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Button className="pd-button pd-button-gold">
                        Contact Us
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>

        <Col xs={24} lg={0} style={{ backgroundColor: 'black' }}>
          <Row>
            <Col xs={24}>
              <div className="image-container">
                <img src={eventPrivateContent.mobileBackgroundUrl} alt="Room" />
              </div>
              <Container>
                <Row type="flex" align="middle" style={{ height: '100%' }}>
                  <Col xs={24} lg={12}>
                    <div className="text-container">
                      <div className="title-2 gold">
                        <strong>PRIVATE EVENTS</strong>
                      </div>
                      <div className="description white">
                        <HtmlRender content={eventPrivateContent.description} />
                      </div>
                      <a
                        href={`https://wa.me/${process.env.REACT_APP_WA_NUMBER}?text=Hello,%20I'd%20like%20to%20make%20a%20reservation%20at%20DeSpectra.`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button className="pd-button pd-button-gold">
                          Contact Us
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
}
