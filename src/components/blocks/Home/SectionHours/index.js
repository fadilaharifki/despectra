import React from 'react';
import { Col, Row } from 'antd';

import Container from 'components/base/container';

import './style.scss';

export default function SectionHours({ id }) {
  return (
    <section id={id} className="pd-home-hours section">
      <Container>
        <Row gutter={[0, 40]}>
          <Col xs={24} lg={8}>
            <div className="hour-container gold">
              <div className="image">
                <img
                  src={`${process.env.PUBLIC_URL}/home/clock.png`}
                  alt="Opening Hours"
                />
              </div>
              <div className="title-3">OPENING HOURS</div>
              <div className="description">1 PM - 3AM</div>
            </div>
          </Col>

          <Col xs={24} lg={8}>
            <div className="hour-container gold">
              <div className="image">
                <img
                  src={`${process.env.PUBLIC_URL}/home/happy-hours.png`}
                  alt="Opening Hours"
                />
              </div>
              <div className="title-3">HAPPY HOURS</div>
              <div className="description">1 PM - 8PM</div>
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className="hour-container gold">
              <div className="image">
                <img
                  src={`${process.env.PUBLIC_URL}/home/person.png`}
                  alt="Opening Hours"
                />
              </div>
              <div className="title-3">RESERVATION</div>
              <div className="description">+6281290781915</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
