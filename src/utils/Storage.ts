export default class Storage {
  static set<T>(key: string, value: T) {
    localStorage.setItem(`john-sf:${key}`, JSON.stringify(value));
  }

  static get<T>(key: string, defaultValue: T): T {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(`john-sf:${key}`);

      if (value != null) {
        return JSON.parse(value);
      }

      return defaultValue;
    }

    return defaultValue;
  }

  static remove(key: string) {
    localStorage.removeItem(`john-sf:${key}`);
  }
}
