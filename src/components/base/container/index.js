import React from 'react';
import PropTypes from 'prop-types';

import { Col, Row } from 'antd';

function Container(props) {
  const { children } = props;
  return (
    <Row style={{ height: '100%' }}>
      <Col
        xs={{ span: 22, offset: 1 }}
        lg={{ span: 20, offset: 2 }}
        xl={{ span: 18, offset: 3 }}
        style={{ height: '100%' }}>
        {children}
      </Col>
    </Row>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
