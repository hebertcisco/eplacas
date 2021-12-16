import { ISearchResult } from './ISearchResult';

export interface IUseData {
    search_result: ISearchResult;
    setSearchResults: (data?: ISearchResult) => void;
    handleSearchResult: (data?: string) => Promise<ISearchResult>;
}
