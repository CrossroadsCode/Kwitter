

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
 user_name=localStorage.getItem("user_name"); 
 document.getElementById("user_name").innerHTML="Welcome"+" "+user_name+"!"+"<br>Glad to have ya here!";
function addRoom() {
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room names..."
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
  console.log("Room name is "+Room_names);
  var row
  row="<div class='room_name' id='+ Room_names+'onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"; document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData(); function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }
function logout() {localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";}