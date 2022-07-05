import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { Row, Col, Icon } from 'antd';

import MobileMenu from 'components/base/mobile-menu';

import './style.scss';
import Container from 'components/base/container';

export function Header({ logo }) {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

  function handleMobileMenuVisibility(isOpen = false) {
    setMobileMenuVisibility(isOpen);
  }

  return (
    <>
      {mobileMenuVisibility && (
        <MobileMenu
          visibility={mobileMenuVisibility}
          handleClose={() => handleMobileMenuVisibility(false)}
        />
      )}
      <header className="pd-header">
        <Container>
          <Row type="flex" justify="space-around" align="middle">
            <Col xs={4} md={2}>
              <Link to="/">
                <img className="pd-header-logo" src={logo} alt="Spectra" />
              </Link>
            </Col>
            <Col xs={{ span: 2, offset: 18 }} lg={0}>
              <Icon
                className="menu-icon"
                onClick={() => handleMobileMenuVisibility(true)}
                type="menu"
              />
            </Col>

            <Col xs={0} lg={{ span: 15, offset: 7 }}>
              <div className="pd-header-right">
                <ul className="menu-list">
                  <li>
                    <Link
                      activeClass="active"
                      spy={true}
                      to="home"
                      smooth={true}
                      offset={-100}>
                      <div className="menu">HOME</div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      activeClass="active"
                      spy={true}
                      to="about-us"
                      smooth={true}
                      offset={-105}>
                      <div className="menu">ABOUT</div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      activeClass="active"
                      spy={true}
                      to="rooms"
                      smooth={true}
                      offset={-100}>
                      <div className="menu">ROOMS</div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      activeClass="active"
                      spy={true}
                      to="premium-lounge"
                      smooth={true}
                      offset={-100}>
                      <div className="menu">LOUNGE</div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      activeClass="active"
                      spy={true}
                      to="galleries"
                      smooth={true}
                      offset={-100}>
                      <div className="menu">GALLERY</div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      activeClass="active"
                      spy={true}
                      to="event-promo"
                      smooth={true}
                      offset={-100}>
                      <div className="menu">EVENTS</div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      activeClass="active"
                      spy={true}
                      to="private-events"
                      smooth={true}
                      offset={-100}>
                      <div className="menu">CONTACT</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="block">&nbsp;</div>
    </>
  );
}

export default { Header };
