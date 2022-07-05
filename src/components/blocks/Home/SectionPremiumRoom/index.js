import React from 'react';
import { Col, Row } from 'antd';

import Container from 'components/base/container';
import HtmlRender from 'components/base/html-reader';

import './style.scss';

export default function SectionPremiumRoom({ id, premiumRoomContent }) {
  return (
    <section id={id} className="pd-home-premium-room">
      <Row>
        <Col xs={0} lg={24}>
          <div
            className="background-image-desktop"
            style={{
              background: `url(${premiumRoomContent.backgroundUrl}) no-repeat`,
              backgroundSize: 'cover',
            }}>
            <Container>
              <Row type="flex" align="middle" style={{ height: '100%' }}>
                <Col lg={12}>
                  <div className="text-container">
                    <div className="title-2 gold">
                      <strong>PREMIUM LOUNGE</strong>
                    </div>
                    <div className="description white">
                      <HtmlRender content={premiumRoomContent.description} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
        <Col xs={24} lg={0} style={{ backgroundColor: 'black' }}>
          <div
            className="background-image-desktop"
            style={{
              background: `url(${premiumRoomContent.mobileBackgroundUrl}) no-repeat`,
              backgroundSize: 'cover',
            }}>
            <Container>
              <div className="text-container">
                <div className="title-2 gold">
                  <strong>PREMIUM LOUNGE</strong>
                </div>
                <div className="description white">
                  <HtmlRender content={premiumRoomContent.description} />
                </div>
              </div>
            </Container>
          </div>
        </Col>
      </Row>
    </section>
  );
}
