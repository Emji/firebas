import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAquLOtTr4eEr5VTyhh1m1DXecvRnwgN9k",
    authDomain: "vuefirebase-2b174.firebaseapp.com",
    projectId: "vuefirebase-2b174",
    storageBucket: "vuefirebase-2b174.appspot.com",
    messagingSenderId: "154287890829",
    appId: "1:154287890829:web:890e2d3edd27e34c5e9dc4"
};

const zpp = initializeApp(firebaseConfig);

const auth = getAuth(zpp);
import { getStorage } from "firebase/storage";

const storage = getStorage(zpp);


export default storage;