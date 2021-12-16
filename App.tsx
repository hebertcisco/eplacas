import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Header} from './components/Header';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View style={styles.mainContainer}>
          <Text style={styles.sectionText}>
            Informe a placa do seu veículo. Ex:{' '}
            <Text style={styles.highlight}>AAA12322</Text>
          </Text>
          <View style={styles.mainBox}>
            <TextInput
              style={styles.input}
              placeholder="Digite a placa"
              placeholderTextColor="#999"
              autoCapitalize="characters"
              autoCorrect={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F2F2F7',
    backfaceVisibility: 'visible',
    borderBottomColor: 'black',
    borderTopEndRadius: 45,
    borderTopLeftRadius: 45,
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 65,
    marginBottom: 20,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  mainBox: {
    backgroundColor: '#fff',
    height: 250,
    borderRadius: 45,
    padding: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },

  highlight: {
    fontWeight: '700',
  },
  sectionText: {
    marginTop: 8,
    padding: 8,
    marginBottom: 8,
  },
});

export default App;
