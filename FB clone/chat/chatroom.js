import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";;
import { getDatabase, ref, set, onValue, orderByChild } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCBm6y_G5AdFzqkhDcGbErqNPR7NA4kC64",
    authDomain: "famebook-734d7.firebaseapp.com",
    databaseURL: "https://famebook-734d7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "famebook-734d7",
    storageBucket: "famebook-734d7.appspot.com",
    messagingSenderId: "849926574044",
    appId: "1:849926574044:web:d8ca8e5e29dac7d5ba4919",
    measurementId: "G-NWZC1CBBCB"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database, 'users/');

var me = localStorage.getItem("username")

fetchUser();

function addItem(chatuser) {
        var ul = document.getElementById('list');
        var name = document.createElement('li');
        name.innerHTML = chatuser;
        name.setAttribute("id", chatuser);
        ul.appendChild(name);
}

document.getElementById("list").addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
        console.log(e.target.id + " was clicked");
        localStorage.removeItem("chatuser");
        localStorage.setItem("chatuser", "id1");
        window.open("/chat/chat.html", "_self");
    }
});

function fetchUser() {
    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const id = childSnapshot.val();
            if(id.username != me){
            addItem(id.name);
            }
        });
    }, {
        onlyOnce: true
    });
}