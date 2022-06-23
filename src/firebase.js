import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const config = {
    apiKey: "AIzaSyDiZCq-Qv8sTpTKb1wq7XyV55xiroxEy1c",
    authDomain: "poster-app-lyte-bbc5c.firebaseapp.com",
    databaseURL: "https://poster-app-lyte-bbc5c-default-rtdb.firebaseio.com",
    projectId: "poster-app-lyte-bbc5c",
    storageBucket: "poster-app-lyte-bbc5c.appspot.com",
    messagingSenderId: "622890969846",
    appId: "1:622890969846:web:09679db29dd49dbf959ad7",
    measurementId: "G-12ZGLZVDMP"
};

const app = initializeApp(config);

const DB = getDatabase(app);

export { DB };
