import React from 'react';
import { Col, Row } from 'antd';

import Slider from 'react-slick';

import Container from 'components/base/container';
import HtmlRender from 'components/base/html-reader';

import './style.scss';

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function SectionEventPromo({ eventPromoContent, id }) {
  return (
    <section id={id} className="pd-home-event-promo">
      <div
        className="background-image-desktop section"
        style={{
          background: `url(${process.env.PUBLIC_URL}/home/gradient.png) no-repeat`,
          backgroundSize: 'cover',
        }}>
        <Container>
          <Row type="flex" align="middle" style={{ height: '100%' }}>
            <Col xs={24}>
              <div className="title-2 white">
                <strong>
                  <u>EVENTS &amp; PROMO</u>
                </strong>
              </div>
            </Col>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 7 }}>
              <div className="current-event pd-margin-bottom-lg">
                <div className="image-container">
                  <img
                    src={`${eventPromoContent.currentEventImage}`}
                    alt="Artist"
                  />
                </div>
                <div className="text-container">
                  <div className="title-3">
                    <strong>{eventPromoContent.currentEventTitle}</strong>
                  </div>
                  <div className="description description-lato">
                    <HtmlRender
                      content={eventPromoContent.currentEventDescription}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24}>
              <Slider {...settings} autoplay>
                {eventPromoContent.events.length > 0 &&
                  eventPromoContent.events.map((event, index) => (
                    <div className="event" key={index}>
                      <div className="event-image-container">
                        <img src={event.event_image} alt="Gallery" />
                      </div>
                      <div className="text-container">
                        <div className="title-3">{event.title}</div>
                        <div className="date">{event.event_description}</div>
                      </div>
                    </div>
                  ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
