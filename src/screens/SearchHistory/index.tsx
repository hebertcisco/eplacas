import React, { useEffect } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { ISearchResult } from "../../shared/interfaces/ISearchResult";
import { storager } from "../../shared/services/storage";
import { List } from "react-native-paper";
import { IconButton, Colors } from "react-native-paper";
import dialog from "../../components/Dialog";
import { PLATES_CACHE_KEY } from "../../shared/constants/plates";

type TypeProps = {
  navigation: any;
};
const SearchHistory: React.FC<TypeProps> = ({ navigation }) => {
  const [search_history, setSearchHistory] = React.useState<ISearchResult[]>(
    []
  );

  const backgroundStyle = {
    backgroundColor: "#fff"
  };
  function deleteFromId(params: { id: string; key: string }) {
    storager.deleteFromId({ key: params.key, id: params.id }).then(() => {
      setSearchHistory(search_history.filter((item) => item.id !== params.id));
    });
  }

  useEffect(() => {
    storager.getAllDataForKey(PLATES_CACHE_KEY).then((res) => {
      setSearchHistory(res as ISearchResult[]);
    });
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View style={styles.mainContainer}>
          {search_history.map((item: ISearchResult, index) => (
            <List.Item
              key={index}
              title={item.placa}
              description={item.modelo}
              onPress={() =>
                navigation.navigate("SearchResult", {
                  result: item
                })
              }
              left={(props) => <List.Icon {...props} icon="car" />}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="delete"
                  color={Colors.red500}
                  size={20}
                  onPress={() =>
                    dialog({
                      title: "Excluir",
                      description: "Deseja excluir o registro?",
                      onPressOk: () =>
                        deleteFromId({
                          id: item.id,
                          key: PLATES_CACHE_KEY
                        })
                    })
                  }
                />
              )}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 0
  }
});

export default SearchHistory;
