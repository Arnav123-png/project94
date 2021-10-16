var firebaseConfig = {
    apiKey: "AIzaSyCyGV-afy5MvG-_XrvJw4-e3SYqyf-YIwM",
    authDomain: "kwitter-554d2.firebaseapp.com",
    databaseURL: "https://kwitter-554d2-default-rtdb.firebaseio.com",
    projectId: "kwitter-554d2",
    storageBucket: "kwitter-554d2.appsApot.com",
    messagingSenderId: "246464430432",
    appId: "1:246464430432:web:3736e00ba4d52ac0c15e05"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
