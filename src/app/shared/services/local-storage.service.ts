import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() {}

  setDataInStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getDataFromStorage(key): any {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      return data;
    } catch {
      if (key === 'x-auth-token') {
        this.clearLocalStorage();
      } else {
        return {};
      }
    }

  }

  // For Remove Particular Field/Key
  removeDataFromStorage(key) {
    localStorage.removeItem(key);
  }

  // Database has been entirely deleted.
  clearLocalStorage() {
     localStorage.clear();
  }

}
