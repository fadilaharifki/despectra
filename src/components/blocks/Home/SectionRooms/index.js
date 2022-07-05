import React, { useState } from 'react';
import { Carousel, Col, Icon, Row } from 'antd';

import Container from 'components/base/container';

import './style.scss';

export default function SectionRooms({ id, rooms }) {
  const [roomSelected, setRoomSelected] = useState(0);

  function handleClick(index) {
    setRoomSelected(index);
  }

  return (
    <section id={id} className="pd-home-rooms section">
      <Container>
        <Row>
          <Col xs={24}>
            <div className="title-2 pd-align-center gold">
              <strong>
                <u>ROOMS</u>
              </strong>
            </div>
          </Col>
        </Row>
        <Row gutter={[0, 40]}>
          {rooms.length > 0 &&
            rooms.map((room, index) => (
              <React.Fragment key={index}>
                <Col xs={0} lg={6}>
                  <div
                    className={`pd-home-rooms-card ${index === roomSelected &&
                      'pd-home-rooms-card-active'}`}
                    onClick={() => handleClick(index)}>
                    <div className="user">
                      <Icon className="icon" type="user" />
                      <span className="user-count">{room.room_capacity}+</span>
                    </div>
                    <div className="title-3 gold">{room.title}</div>
                    <div className="description">{room.room_description}</div>
                  </div>
                </Col>
                <Col xs={24} lg={0} className="pd-home-rooms-card-mobile">
                  <div
                    className="pd-home-rooms-card"
                    onClick={() => handleClick(index)}>
                    <div className="pd-home-rooms-image">
                      <div className="pd-home-rooms-image pd-margin-top-md">
                        <Carousel autoplay arrows dots={false}>
                          {room.room_images.map((roomImage, index) => (
                            <div key={index} className="carousel-container">
                              <img src={roomImage} alt="Room" />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                    </div>
                    <div className="text-container">
                      <div className="room-thumbnail">
                        <div className="title-3 gold">{room.title}</div>
                        <div className="user">
                          <Icon className="icon" type="user" />
                          <span className="user-count">
                            {room.room_capacity}+
                          </span>
                        </div>
                      </div>
                      <div className="description">{room.room_description}</div>
                    </div>
                  </div>
                </Col>
              </React.Fragment>
            ))}
          <Col xs={0} lg={24}>
            <div className="pd-home-rooms-image pd-margin-top-md">
              <Carousel autoplay arrows dots={false}>
                {rooms[roomSelected] &&
                  rooms[roomSelected].room_images.length > 0 &&
                  rooms[roomSelected].room_images.map((roomImage, index) => (
                    <div key={index} className="carousel-container">
                      <img src={roomImage} alt="Room" />
                    </div>
                  ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
