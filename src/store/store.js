// store.js

import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// Define authState atom
const authState = atom({
  key: "renAppsAuth",
  default: {
    client_id: "",
    token: "",
    role: "",
  },
  effects_UNSTABLE: [persistAtom],
  storage: {
    getItem: (key) => localStorage.getItem(key),
    setItem: (key, value) => localStorage.setItem(key, value),
    removeItem: (key) => localStorage.removeItem(key),
  },
});

export { authState };
