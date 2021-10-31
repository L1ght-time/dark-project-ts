class StorageService {
  set (name: string, value: string) {
    return localStorage.setItem(name, value);
  }

  get (name: string) {
    return localStorage.getItem(name);
  }

  remove (name: string) {
    return localStorage.removeItem(name);
  }

  clear () {
    return localStorage.clear();
  }
}

export default new StorageService();
