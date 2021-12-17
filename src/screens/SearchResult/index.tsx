import React, { useEffect } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import { Dimensions } from 'react-native';
import { ISearchResult } from '../../shared/interfaces/ISearchResult';

type TypeProps = {
    route: any;
};
const SearchResult: React.FC<TypeProps> = ({ route }) => {
    const plate: ISearchResult = route.params.result;
    const [search_result, setSearchResults] = React.useState<ISearchResult>(
        {} as ISearchResult
    );
    const windowHeight = Dimensions.get('window').height;

    const backgroundStyle = {
        backgroundColor: '#fff'
    };
    useEffect(() => {
        setSearchResults(plate);
    }, [plate]);

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}
            >
                <View style={styles.mainContainer}>
                    <Text style={styles.sectionText}>
                        Resultado da consulta
                    </Text>
                    <Table
                        borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}
                    >
                        <Row
                            data={['Placa', 'Modelo', 'Ano Modelo']}
                            style={styles.head}
                            textStyle={styles.text}
                        />
                        <Rows
                            data={[
                                [
                                    search_result.placa,
                                    search_result.modelo,
                                    search_result.anoModelo
                                ]
                            ]}
                            textStyle={styles.text}
                        />
                    </Table>
                    <View style={{ marginTop: 10 }} />
                    <Table
                        borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}
                    >
                        <Row
                            data={['Cor', 'Ano', 'Marca', 'Chassi']}
                            style={styles.head}
                            textStyle={styles.text}
                        />
                        <Rows
                            data={[
                                [
                                    search_result.cor,
                                    search_result.ano,
                                    search_result.marca,
                                    search_result.chassi
                                ]
                            ]}
                            textStyle={styles.text}
                        />
                    </Table>
                    <View style={{ marginTop: 10 }} />
                    <Table
                        borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}
                    >
                        <Row
                            data={['Municipio', 'UF', 'Placa', 'Situação']}
                            style={styles.head}
                            textStyle={styles.text}
                        />
                        <Rows
                            data={[
                                [
                                    search_result.municipio,
                                    search_result.uf,
                                    search_result.placa,
                                    search_result.situacao
                                ]
                            ]}
                            textStyle={styles.text}
                        />
                    </Table>
                    <View style={{ minHeight: windowHeight / 3 + 27 }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        padding: 25
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },

    sectionText: {
        marginTop: 8,
        padding: 8,
        marginBottom: 8
    }
});

export default SearchResult;
