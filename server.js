var firebaseConfig = {
    apiKey: "AIzaSyCuMAobj_BDn2Bu2ka3FA-AZ4GoA7-UHHY",
    authDomain: "foe-npn-e4e04.firebaseapp.com",
    projectId: "foe-npn-e4e04",
    storageBucket: "foe-npn-e4e04.appspot.com",
    messagingSenderId: "777268515822",
    appId: "1:777268515822:web:d35e49b0acbb1bc96474ff"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
    }).catch(function (error){
        var errorcode = error.code;
        var errormsg = error.message;
    });
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function getId(id){
    return document.getElementById(id).value;
}