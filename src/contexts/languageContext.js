import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

import LanguageApi from 'api/language';

export const LanguageContext = createContext();

function LanguageContextProvider(props) {
  const defaultLanguage = localStorage.getItem('lang') || 'en';
  const [language, setLanguage] = useState(defaultLanguage);
  const [languageCollection, setLanguageCollection] = useState({
    title: '',
    logo_image: '',
    meta_header: '',
    meta_description: '',
    banners: [],
    about_us: '',
    about_us_background: '',
    rooms: [],
    premium_lounge_description: '',
    premium_lounge_background: '',
    event_highlight_image: '',
    events: [],
    private_event_description: '',
    private_event_background: '',
    location: '',
    google_map_link: '',
    hiring_description: '',
  });

  async function getLanguageFromAPI(lang) {
    try {
      const { data } = await LanguageApi.getLanguage(lang);
      setLanguageCollection(data);
    } catch (e) {
      if (e.name === 'SyntaxError') {
        return (
          <Alert
            message="Failed to get data, please check your internet connection."
            banner
            closable
          />
        );
      } else {
        throw e;
      }
    }
  }

  function changeLanguage(lang) {
    setLanguage(lang);
    getLanguageFromAPI(lang);
  }

  useEffect(() => {
    getLanguageFromAPI(language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        changeLanguage,
        language,
        languageCollection,
      }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

LanguageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageContextProvider;
