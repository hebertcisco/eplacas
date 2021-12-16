import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

function Main() {
  return (
    <>
      <App />
    </>
  );
}

AppRegistry.registerComponent(appName, () => Main);
