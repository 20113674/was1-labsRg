'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employee = {

  store: new JsonStore('./models/app-store.json', { employee: {} }),
  collection: 'employee',

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

};


export default appStore;
