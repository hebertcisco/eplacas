import React, { useCallback, useContext } from "react";
import { api } from "../services/api";
import { IUseData } from "../interfaces/IUseData";
import { Alert } from "react-native";
import { storager } from "../services/storage";
import { PLATES_CACHE_KEY } from "../constants/plates";

export const DataContext = React.createContext({});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const handleSearchResult = useCallback(async (id: string) => {
    const baseURL = `/consulta/${id}`;
    try {
      const result = await api.get(baseURL);
      const { data } = result;
      await storager.set({
        key: PLATES_CACHE_KEY,
        id: data.id,
        data: data
      });
      return await data;
    } catch (error) {
      console.error(error);
      return Alert.alert("Erro", "Não foi possível realizar a busca.", [
        { text: "OK" }
      ]);
    }
  }, []);

  const contextValue = {
    handleSearchResult
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext) as IUseData;
