// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getBlob, getDownloadURL, getStorage, ref } from "firebase/storage";
import express from "express";
import path from "path";

const PORT = process.env.PORT || 3001;

const app = express();

//Serve static asses if in production
if (process.env.PORT === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3IeP0ihaL9FXTlogMG6O7eIzOMqinLkU",
  authDomain: "mywebsite-53214.firebaseapp.com",
  projectId: "mywebsite-53214",
  storageBucket: "mywebsite-53214.appspot.com",
  messagingSenderId: "419303163575",
  appId: "1:419303163575:web:0e7282b35653f40184ef32",
  measurementId: "G-HW9F58RQST",
  storageBucket: "mywebsite-53214.appspot.com",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(firebaseApp);

const storageRef = ref(
  storage,
  "gs://mywebsite-53214.appspot.com/CV - Skye Thomas Renda.pdf"
);

app.get("/download", async (req, res) => {
  const url = await getDownloadURL(storageRef);
  res.status(200).json(url);
});

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      name: "name of your app",
      version: "0.1.0",
    },
  });
});
