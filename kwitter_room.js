
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
document.getElementById("welcome_display").innerHTML="Welcome " + user_name +"!";

function addroom() {
      roomname = document.getElementById("roomname").value;
      localStorage.setItem("room_name", roomname);

      firebase.database().ref("/").child(roomname).update({
            shruti:"creating kwitter"
      });
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>" + "#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name - ", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}