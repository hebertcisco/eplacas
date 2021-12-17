import * as React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/navigation/App';
import { name as appName } from './app.json';
import { DataProvider } from './src/shared/hooks/useData';

function Main() {
    return (
        <DataProvider>
            <App />
        </DataProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
