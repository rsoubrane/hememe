import firebase from "firebase";

const config = {
	apiKey: "AIzaSyDH5ha9WLw0rOeGLqlSKZfN0YB652hmGYo",
	authDomain: "hememe-0000.firebaseapp.com",
	databaseURL: "https://hememe-0000.firebaseio.com",
	projectId: "hememe-0000",
	storageBucket: "hememe-0000.appspot.com",
	messagingSenderId: "29665757753",
	appId: "1:29665757753:web:0e6dde404fa705be261be8",
	measurementId: "G-2NPYHGDMQC"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
