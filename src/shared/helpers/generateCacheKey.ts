import { DELIMITER } from "../enums/cache";
import { IGenerateCacheKeyOptions } from "../interfaces/cache";
import { name as appName } from "../../../app.json";

export function generateCacheKey(
  key: string,
  name?: string,
  options?: IGenerateCacheKeyOptions
): string {
  const delimiter = options?.delimiter || DELIMITER.DOT;
  const keyName = appName || name;
  return `${key}${delimiter}${keyName}`;
}
export default generateCacheKey;
