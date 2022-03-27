import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DEFAULT_EXPIRES_CACHE,
  DEFAULT_STORAGE_SIZE
} from "../constants/config";
import { uuidv4 } from "../utils/uuid";
import generateCacheKey from "../helpers/generateCacheKey";

export const storage = new Storage({
  size: DEFAULT_STORAGE_SIZE,
  storageBackend: AsyncStorage,
  defaultExpires: DEFAULT_EXPIRES_CACHE,
  enableCache: true
});

export class Storager {
  public deleteFromId(params: { id: string; key: string }) {
    return storage.remove({
      key: generateCacheKey(params.key),
      id: params.id
    });
  }
  public async deleteFromKey(params: { key: string }): Promise<void> {
    const { key } = params;
    await storage.remove({ key: generateCacheKey(key) });
  }
  public async getAllDataForKey(key: string): Promise<any[]> {
    const resultKey = generateCacheKey(key);
    try {
      const result = await storage.getAllDataForKey(resultKey);
      return result.map((item: string) => {
        return item;
      });
    } catch (e) {
      return [];
    }
  }
  public set(params: {
    key: string;
    id?: string;
    data: any;
    expires?: number | null;
  }) {
    const id = params.id || uuidv4;
    const expires = params.expires || DEFAULT_EXPIRES_CACHE;
    const data = params.data;
    return storage.save({
      key: generateCacheKey(params.key),
      id,
      data: data,
      expires
    });
  }
}
export const storager = new Storager();
export default storage;
