import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

import { Header } from './components/Header';
import { Dimensions } from 'react-native';

const App = () => {
    const windowHeight = Dimensions.get('window').height;

    const backgroundStyle = {
        backgroundColor: '#fff'
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}
            >
                <Header />
                <View style={styles.mainContainer}>
                    <Text style={styles.sectionText}>
                        Informe a placa do seu veículo. Ex:{' '}
                        <Text style={styles.highlight}>AAA12322</Text>
                    </Text>
                    <View style={styles.mainBox}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Digite a placa"
                            autoCapitalize="characters"
                            autoCorrect={false}
                            keyboardType={'default'}
                            maxLength={7}
                        />
                        <Button title={'Consultar placa'}>
                            Consultar placa
                        </Button>
                    </View>
                    <View style={{ minHeight: windowHeight / 3 + 27 }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#F2F2F7',
        borderTopEndRadius: 45,
        borderTopLeftRadius: 45,
        padding: 25
    },
    mainBox: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 45 / 3,
        padding: 20,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },

    inputText: {
        height: 44,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D1D1D6',
        borderRadius: 10,
        borderStyle: 'solid',
        alignSelf: 'stretch',
        flexGrow: 0,
        margin: 0,
        paddingLeft: 10,
        marginBottom: 50
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
    },

    highlight: {
        fontWeight: '700'
    },
    sectionText: {
        marginTop: 8,
        padding: 8,
        marginBottom: 8
    }
});

export default App;
