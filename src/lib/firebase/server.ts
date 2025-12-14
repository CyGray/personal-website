import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
};

const clean = (value?: string) => value?.replace(/,\s*$/, "") ?? "";

const getConfig = (): FirebaseConfig => {
  const apiKey = clean(process.env.apiKey);
  const authDomain = clean(process.env.authDomain);
  const projectId = clean(process.env.projectId);
  const storageBucket = clean(process.env.storageBucket);
  const messagingSenderId = clean(process.env.messagingSenderId);
  const appId = clean(process.env.appId);
  const measurementId = clean(process.env.measurementId);

  if (!apiKey || !authDomain || !projectId || !storageBucket || !messagingSenderId || !appId) {
    throw new Error("Missing Firebase environment variables.");
  }

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
  };
};

const getFirebaseApp = () => {
  if (getApps().length) {
    return getApp();
  }

  return initializeApp(getConfig());
};

export const getDb = () => getFirestore(getFirebaseApp());
