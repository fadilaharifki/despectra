import React from 'react';
import PropTypes from 'prop-types';

import LanguageContext from './languageContext';

function MainContext(props) {
  const { children } = props;

  return <LanguageContext>{children}</LanguageContext>;
}

MainContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContext;
