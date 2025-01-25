import { createHash } from 'crypto';

const imageCache = new Map<string, Buffer>();

export function createCacheKey(buffer: Buffer, setting: any): string {
  const settingKey = JSON.stringify(setting);
  const imageHash = createHash('md5').update(buffer).digest('hex');
  return `${imageHash}-${settingKey}`;
}

export function getFromCache(cacheKey: string): Buffer | undefined {
  return imageCache.get(cacheKey);
}

export function saveToCache(cacheKey: string, buffer: Buffer): void {
  imageCache.set(cacheKey, buffer);
}

export function clearCache(): void {
  imageCache.clear();
}
