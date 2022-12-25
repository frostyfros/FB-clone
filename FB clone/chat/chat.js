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

var chatuser = localStorage.getItem("chatuser");
var username = localStorage.getItem("username");

clearConsole();

function clearConsole() {
    set(ref(database, 'users/' + username + '/' + 'chat'), {
        msg: ""
    });
}

function writeUserData(name) {
    set(ref(database, 'users/' + chatuser + '/' + 'chat'), {
        msg: name
    });
}

// writeUserData("");

var old2 = "";

document.getElementById("insert").onclick = function () {
    var chat = document.getElementById("namebox").value;
    if (chat == "") {
        return;
    }
    old2 = chat;

    writeUserData(chat);

    // updating chat
    var last = document.getElementById('chatBox').innerHTML;
    if (last == null) {
        last = '';
    }
    ulList(chat);
    // document.getElementById('hello').innerHTML = last + '<br>' + "🦁 " + chat;
    // 
}

const starCountRef = ref(database, 'users/' + username + '/chat');
onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    var last = document.getElementById('chatBox').innerHTML;
    if (old2 != data.msg) {
        if (last == null) {
            last = '';
        }
        olList(data.msg);
        // document.getElementById('hello').innerHTML = last + '<br>' + "🐆 " + data.msg;
    }
    
});

function ulList(chatuser) {
    var div = document.getElementById('chatBox');
    var ul = document.createElement('ul');
    var name = document.createElement('li');
    name.innerHTML = chatuser;
    ul.appendChild(name);
    div.appendChild(ul);
}

function olList(chatuser) {
    var div = document.getElementById('chatBox');
    var ol = document.createElement('OL');
    var name = document.createElement('li');
    name.innerHTML = chatuser;
    ol.appendChild(name);
    div.appendChild(ol);
}
