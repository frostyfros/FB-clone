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
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == "" || password == "") {
        alert("enter correct id pass")
        return;
    }
    localStorage.setItem("username", username)
    try {
        const starCountRef = ref(database, 'users/' + username);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if (password == data.password) {
                console.log("success");
                window.open("/main/main.html", "_self");
            }
            else {
                alert("enter correct id pass")
            }
        });
    } catch (error) {
        alert("enter correct id pass")
    }
}

document.getElementById("final").onclick = function () {
    window.open("login/signup.html", "_self");
}