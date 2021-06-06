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
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value ;
      firebase.database().ref("room_name").push({
            name : user_name, 
            message : msg,
            like : 0
      }) ;
      document.getElementById("msg").value = "" ;
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}