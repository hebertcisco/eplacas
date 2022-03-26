import React, { useCallback, useEffect, useState } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Header } from '../components/Header';
import { Dimensions } from 'react-native';
import { useData } from '../shared/hooks/useData';
import { PLATES_FORMATS } from '../shared/constants/plates.regex';
import { Button, TextInput } from 'react-native-paper';
import $THEME from '../shared/styles/theme';

type TypeProps = {
    navigation: any;
};

const Home: React.FC<TypeProps> = ({ navigation }) => {
    const [plate, setPlate] = useState<string>('');
    const [plateValid, setPlateValid] = useState<{ value: boolean }>({
        value: false
    });

    const windowHeight = Dimensions.get('window').height;
    const data = useData();
    const backgroundStyle = {
        backgroundColor: '#fff'
    };

    useEffect(() => {
        const plateFormat = PLATES_FORMATS.find((regex: RegExp) =>
            regex.test(plate)
        );
        if (plateFormat) {
            setPlateValid({ value: true });
        } else {
            setPlateValid({ value: false });
        }
    }, [plate]);

    const handleMakeRequest = useCallback(() => {
        return data
            .handleSearchResult(plate)
            .then((result) => {
                if (result) {
                    navigation.navigate('SearchResult', { result });
                }
            })
            .catch((error) => error);
    }, [navigation, plate]);
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
                        <Text style={styles.highlight}>AAA1232</Text>
                    </Text>
                    <View style={styles.mainBox}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Digite a placa"
                            autoCapitalize="characters"
                            autoCorrect={false}
                            keyboardType={'default'}
                            maxLength={7}
                            onChangeText={(value) => setPlate(value)}
                            mode="flat"
                            label={'Placa'}
                            dense={true}
                        />
                        <Button
                            mode="contained"
                            onPress={() => handleMakeRequest()}
                            disabled={!plateValid.value}
                            color={
                                plateValid.value ? $THEME.colors.primary : $THEME.colors.disabled
                            }
                        >
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
        height: 48,
        minHeight: 44,
        maxHeight: 50,
        left: 0,
        right: 0,
        top: 0,
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

export default Home;
