
import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCfwmNQ_UEraDdx11NNcAWRHlbCdlvk-ls",
  authDomain: "dojo-blog-90616.firebaseapp.com",
  databaseURL: "https://dojo-blog-90616-default-rtdb.firebaseio.com",
  projectId: "dojo-blog-90616",
  storageBucket: "dojo-blog-90616.appspot.com",
  messagingSenderId: "517108458849",
  appId: "1:517108458849:web:851461cf93a92b16e9d120",
  measurementId: "G-ZSQ6KEHH50"
};


//init firebase

firebase.initializeApp(firebaseConfig)

//init firestore service

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export {projectFirestore, timestamp}
