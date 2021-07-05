//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCBou1PBcoDj1i5rhOd4Y8ejRhK8UYNgl4",
    authDomain: "kwitter-database-fb4cc.firebaseapp.com",
    databaseURL: "https://kwitter-database-fb4cc-default-rtdb.firebaseio.com",
    projectId: "kwitter-database-fb4cc",
    storageBucket: "kwitter-database-fb4cc.appspot.com",
    messagingSenderId: "97354478185",
    appId: "1:97354478185:web:391eed0d63c4c7028ae8f8"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push( {
        Name : user_name,
        Message : msg,
        Likes : 0
    } );
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "Ralph") { firebase_message_id = childKey; message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    user = message_data['Name'];
    message = message_data['Message'];
    likes = message_data['Likes'];
    name_tag = "<h4>" + user + "<img class='user_tick' src='tick.png'></h4>";
    message_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + likes +" onclick='updateLike(this.id)'>";
    span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Likes : " + likes + "</span></button><hr>";
    row = name_tag+message_tag+like_button+span_tag;
    document.getElementById("output").innerHTML += row;
    
} }); }); } getData();

function updateLike(message_id) {
    console.log("Message id - " + message_id);
    likes =  document.getElementById(message_id).value;
    updatedLikes = Number(likes) + 1;
    console.log(updatedLikes);
    firebase.database().ref(room_name).child(message_id).update({
        Likes : updatedLikes
    });
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}