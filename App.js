import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import InitApp from './src/Appnavigate';
import { Provider } from 'react-redux';
import store from './src/redux/store';
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <InitApp />
    </Provider>
  );
}

export default App;
