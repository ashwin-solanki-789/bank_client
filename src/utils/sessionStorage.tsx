export function setStorage(key: string, value: string | undefined) {
  if (!key || !value) {
    throw new Error("key cannot be empty!");
  }
  localStorage.setItem(key, value);
}

export function getStorage(key: string): string {
  if (!key) {
    throw new Error("Key cannot be empty!");
  }
  return localStorage.getItem(key) as string;
}
