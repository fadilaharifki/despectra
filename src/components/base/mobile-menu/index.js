import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-scroll';

import { Col, Row } from 'antd';

import { Transition } from 'react-transition-group';

import './style.scss';

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 1 },
};

function MobileMenu(props) {
  const { handleClose, visibility } = props;

  return (
    <div className="pd-mobile-menu">
      <Row style={{ height: '100%' }}>
        <Col xs={15} style={{ height: '100%' }}>
          <Transition in={visibility} timeout={5000}>
            {(state) => (
              <div
                className="pd-mobile-menu-links"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}>
                <Link
                  to="home"
                  smooth={true}
                  onClick={handleClose}
                  offset={-100}>
                  <div className="menu">HOME</div>
                </Link>

                <Link
                  to="about-us"
                  smooth={true}
                  onClick={handleClose}
                  offset={-100}>
                  <div className="menu">ABOUT</div>
                </Link>

                <Link
                  to="rooms"
                  smooth={true}
                  onClick={handleClose}
                  offset={-100}>
                  <div className="menu">ROOMS</div>
                </Link>

                <Link
                  to="premium-lounge"
                  smooth={true}
                  onClick={handleClose}
                  offset={-100}>
                  <div className="menu">LOUNGE</div>
                </Link>

                <Link
                  to="galleries"
                  smooth={true}
                  onClick={handleClose}
                  offset={-100}>
                  <div className="menu">GALLERY</div>
                </Link>

                <Link
                  to="event-promo"
                  smooth={true}
                  onClick={handleClose}
                  offset={-100}>
                  <div className="menu">EVENTS</div>
                </Link>

                <Link
                  to="private-events"
                  smooth={true}
                  onClick={handleClose}
                  offset={-100}>
                  <div className="menu">CONTACT</div>
                </Link>
              </div>
            )}
          </Transition>
        </Col>
        <Col xs={9} style={{ height: '100%' }}>
          <div
            className="pd-mobile-menu-opacity"
            onClick={handleClose}
            offset={-100}>
            &nbsp;
          </div>
        </Col>
      </Row>
    </div>
  );
}

MobileMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default MobileMenu;
