//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB9xOJMkGvotrmCNAhlkVkny5Ec_YyR_jM",
    authDomain: "kwitter-fb803.firebaseapp.com",
    databaseURL: "https://kwitter-fb803-default-rtdb.firebaseio.com",
    projectId: "kwitter-fb803",
    storageBucket: "kwitter-fb803.appspot.com",
    messagingSenderId: "444586629357",
    appId: "1:444586629357:web:9c1e443f8cc0ae5e2114e4",
    measurementId: "G-E3RT1M9DVR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
room_name=localStorage.getItem("room_name"); user_name=localStorage.getItem("user_name");
function send() {
    var msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        msg:msg,likes:0
    });
    document.getElementById("msg").value="";
}