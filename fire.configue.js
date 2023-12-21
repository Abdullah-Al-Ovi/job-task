
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpnO-eF6oB05tCroauxroRQRfoq2V_uDI",
  authDomain: "job-task-6b2c6.firebaseapp.com",
  projectId: "job-task-6b2c6",
  storageBucket: "job-task-6b2c6.appspot.com",
  messagingSenderId: "463778335017",
  appId: "1:463778335017:web:49b4cb080f8306d2db4f38"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);