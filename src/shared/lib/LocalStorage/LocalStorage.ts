export class LocalStorage {
  static getItem(key: string) {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as unknown;
    }

    return null;
  };

  static setItem = (key: string, value: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('JSON parse error');
    }
  };

  static removeItem(key: string) {
    localStorage.removeItem(key);
  };
}
