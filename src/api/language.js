import api from './index';

export default {
  getLanguage() {
    return api.get(`/english_copy`);
  },
};
