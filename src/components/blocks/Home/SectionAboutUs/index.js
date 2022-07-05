import React from 'react';
import { Col, Row } from 'antd';

import Container from 'components/base/container';
import HtmlRender from 'components/base/html-reader';

import './style.scss';

export default function SectionAboutUs({ aboutUsContent, id }) {
  return (
    <section id={id} className="pd-home-about-us">
      <Row>
        <Col xs={24} lg={0}>
          <div
            className="background-image-desktop"
            style={{
              background: `url(${aboutUsContent.mobileBackgroundUrl}) no-repeat`,
              backgroundSize: 'cover',
            }}>
            <Container>
              <Row type="flex" align="middle" style={{ height: '100%' }}>
                <Col xs={24} lg={{ span: 10, offset: 14 }}>
                  <div className="text-container">
                    <div className="title-2 gold">
                      <strong>ABOUT US</strong>
                    </div>
                    <div className="description white">
                      <HtmlRender content={aboutUsContent.description} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
        <Col xs={0} lg={24}>
          <div
            className="background-image-desktop"
            style={{
              background: `url(${aboutUsContent.backgroundUrl}) no-repeat`,
              backgroundSize: 'cover',
            }}>
            <Container>
              <Row type="flex" align="middle" style={{ height: '100%' }}>
                <Col xs={24} lg={{ span: 10, offset: 14 }}>
                  <div className="text-container">
                    <div className="title-2 gold">
                      <strong>ABOUT US</strong>
                    </div>
                    <div className="description white">
                      <HtmlRender content={aboutUsContent.description} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </section>
  );
}
