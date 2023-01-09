const firebaseConfig = {
      apiKey: "AIzaSyCFEOhgoJIwUgLT_W4D8qQrRSuDMzwOERU",
      authDomain: "classtest-61cb3.firebaseapp.com",
      databaseURL: "https://classtest-61cb3-default-rtdb.firebaseio.com",
      projectId: "classtest-61cb3",
      storageBucket: "classtest-61cb3.appspot.com",
      messagingSenderId: "530501257596",
      appId: "1:530501257596:web:05f80b2c301dc1b5ca7cf9"
    };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
 room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
 });
 localStorage.setItem("room_name", room_name);
 window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}