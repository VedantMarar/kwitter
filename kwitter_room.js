var firebaseConfig = {
      apiKey: "AIzaSyCmFZLjDSnZurs1nJUWbWREOiwEJN-jGRY",
      authDomain: "kwitter-fcfc5.firebaseapp.com",
      databaseURL: "https://kwitter-fcfc5-default-rtdb.firebaseio.com",
      projectId: "kwitter-fcfc5",
      storageBucket: "kwitter-fcfc5.appspot.com",
      messagingSenderId: "264917964019",
      appId: "1:264917964019:web:d28df963cb00721297d386",
      measurementId: "G-QNESN4P3CX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!" ;

function addRoom() {
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
      purpose = "Adding room name"
      }) ;
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html" ;
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name-" + Room_names);
       row = "<div class='room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
       document.getElementById("output").innerHTML = row
      //Start code

      //End code
      });});}
getData();
function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html" ;
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html" ;
}