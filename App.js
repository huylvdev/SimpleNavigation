
import i18n from 'i18n-js';
import * as React from 'react';
import { Provider } from 'react-redux';
import InitApp from './src/Appnavigate';
import store from './src/redux/store';
i18n.translations = {
  'en': require('./src/services/language/en'),
  'vi': require('./src/services/language/vi'),
};
i18n.fallbacks = true

function CheckLanguage() {
  console.log('huydeeryrterteyr')
  i18n.locale = "vi-VN";
}

function App() {
  CheckLanguage()
  return (
    <Provider store={store}>
      <InitApp />
    </Provider>
  );
}

export default App;
