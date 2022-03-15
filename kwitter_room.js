
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB0kTSskpsEl8h1Bks3cIJUZcqFzeUaW64",
      authDomain: "kwitter-6715c.firebaseapp.com",
      databaseURL: "https://kwitter-6715c-default-rtdb.firebaseio.com",
      projectId: "kwitter-6715c",
      storageBucket: "kwitter-6715c.appspot.com",
      messagingSenderId: "714853894752",
      appId: "1:714853894752:web:60fbe38ad2b0cc24315105"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     user_name= localStorage.getItem("user_name");
     document.getElementById("user_name_welcome").innerHTML= "Welcome "+user_name+"!";

     function add_room(){
     room_name= document.getElementById("add_room_input").value;
     localStorage.setItem("room_name",room_name);
     

     firebase.database().ref("/").child(room_name).update({purpose:"rooom_names"});
     window.location="kwitter_page.html";

     }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row; 
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="index.html";
}
