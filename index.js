import * as React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/navigation/App';
import { name as appName } from './app.json';
import { DataProvider } from './src/shared/hooks/useData';
import { Provider as PaperProvider } from 'react-native-paper';
import { $THEME } from './src/shared/styles/theme';

function Main() {
    return (
        <PaperProvider theme={$THEME}>
            <DataProvider>
                <App />
            </DataProvider>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
