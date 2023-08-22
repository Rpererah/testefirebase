import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "@env"


const firebaseConfig = {
  apiKey:'AIzaSyASgttdSFfZK9lXioSdGpNNBZ-ZIxIb0JM',
  authDomain: 'AIzaSyASgttdSFfZK9lXioSdGpNNBZ-ZIxIb0JM',
  projectId: 'AIzaSyASgttdSFfZK9lXioSdGpNNBZ-ZIxIb0JM',
  storageBucket: 'AIzaSyASgttdSFfZK9lXioSdGpNNBZ-ZIxIb0JM',
  messagingSenderId: 'AIzaSyASgttdSFfZK9lXioSdGpNNBZ-ZIxIb0JM',
  appId: 'AIzaSyASgttdSFfZK9lXioSdGpNNBZ-ZIxIb0JM',
  measurementId: 'AIzaSyASgttdSFfZK9lXioSdGpNNBZ-ZIxIb0JM'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export { auth }; 