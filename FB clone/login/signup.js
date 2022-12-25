import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";;
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

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

document.getElementById("go").onclick = function () {
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    localStorage.setItem("username", username)
    var password = document.getElementById('password').value;
    console.log(name,username,password);
    set(ref(database, 'users/' + username), {
        name: name,
        username: username,
        password: password,
        chat:{
            msg: ""
        }
    });
    setTimeout(() => {
        window.open("/main/main.html", "_self"); 
    }, 5000);
    
}