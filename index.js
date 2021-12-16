import * as React from 'react';
import {AppRegistry} from 'react-native';
import {ThemeProvider} from 'react-native-ios-kit';
import App from './src/App';
import {name as appName} from './app.json';

function Main() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
