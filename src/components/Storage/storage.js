const LOCAL_STORAGE_KEY = 'LocaleStorageContacts';

export function getDataFromLocaleStorage() {
  try {
    const contactsFromLocaleStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    return contactsFromLocaleStorage === null
      ? undefined
      : JSON.parse(contactsFromLocaleStorage);
  } catch (error) {
    alert(error.message);
  }
}

export function setDataToLocalStorage(value) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
  } catch (error) {
    alert(error.message);
  }
}
