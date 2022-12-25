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

var me = localStorage.getItem("username");
var name = "demo";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database, 'users/' + me);

fetchUser();


document.getElementById("messa").onclick = function(){
    window.open("/chat/chatroom.html", "_self");
}



function fetchUser() {
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data.name);
        document.getElementById("name").innerHTML = data.name;
        console.log(data.img.imgp);
        if(data.img.imgp != ""){
        document.getElementById("rakshit2").src = data.img.imgp;
        }
        if(data.img.imgb != ""){
        document.getElementById("sad").src = data.img.imgb;
        }
    }, {
        onlyOnce: true
    });
}
