import React, { useCallback, useContext } from "react";
import { AxiosResponse } from "axios";
import { api } from "../services/api";
import { IUseData } from "../interfaces/IUseData";
import { ISearchResult } from "../interfaces/ISearchResult";
import { Alert } from "react-native";
import { storager } from "../services/storage";
import { PLATES_CACHE_KEY } from "../constants/plates";

export const DataContext = React.createContext({});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const handleSearchResult = useCallback((id: string) => {
    const baseURL = `/consulta/${id}`;
    return api
      .get(baseURL)
      .then(async (result: AxiosResponse<ISearchResult>) => {
        const { data } = result;
        await storager.set({
          key: PLATES_CACHE_KEY,
          id: data.id,
          data: data
        });
        return data;
      })
      .catch((error) => {
        console.error(error);
        return Alert.alert("Erro", "Não foi possível realizar a busca.", [
          { text: "OK" }
        ]);
      });
  }, []);

  const contextValue = {
    handleSearchResult
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext) as IUseData;
