import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Icon } from 'antd';

import './style.scss';

PageSpinner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
};

export function PageSpinner(props) {
  const { className = '', children, loading = true } = props;

  return (
    <>
      {loading && (
        <div className={`pd-section ${className}`}>
          <Spin size="large" indicator={<Icon type="loading" />} />
        </div>
      )}
      <div>{children}</div>
    </>
  );
}

export default { PageSpinner };
