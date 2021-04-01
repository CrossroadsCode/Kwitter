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
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  var date=new Date();
  var datestr=date.toString();
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name; 
name=message_data['name'];
var msg; 
msg=message_data['msg'];
var likes; 
likes=message_data['likes']; 
dt=message_data['datetime'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'>"+"</h4>";
msg_with_tag="<h4 class='message_h4'>"+msg+"</h4>"+"<h5>"+dt+"</h5>"; 
likebtn="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ likes +"</span></button><hr>";
 row = name_with_tag + msg_with_tag +likebtn + span_with_tag; document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();
function updateLike(message_id) { console.log("clicked on like button - " + message_id); button_id = message_id; likes = document.getElementById(button_id).value; updated_likes = Number(likes) + 1; console.log(updated_likes); firebase.database().ref(room_name).child(message_id).update({ likes : updated_likes }); }
function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location.replace("index.html"); }
room_name=localStorage.getItem("room_name"); user_name=localStorage.getItem("user_name");
function send() {
    var msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        msg:msg,likes:0, datetime: datestr
    });
    document.getElementById("msg").value="";
}