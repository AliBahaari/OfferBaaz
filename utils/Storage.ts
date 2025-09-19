import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export async function setToken(key: string, value: string) {
  if (Platform.OS === "web") {
    localStorage.setItem(key, value);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}

export async function getToken(key: string) {
  if (Platform.OS === "web") {
    return localStorage.getItem(key);
  } else {
    return await SecureStore.getItemAsync(key);
  }
}

export async function removeToken(key: string) {
  if (Platform.OS === "web") {
    return localStorage.removeItem(key);
  } else {
    return await SecureStore.deleteItemAsync(key);
  }
}
