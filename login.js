  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCWdDrkbMFwM4YuOr0Db0-huilj28LVQ3w",
    authDomain: "login-42891.firebaseapp.com",
    projectId: "login-42891",
    storageBucket: "login-42891.appspot.com",
    messagingSenderId: "945465843346",
    appId: "1:945465843346:web:b4eb86a51ad9760181104b",
    measurementId: "G-SXRDYMGGXT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  function signup(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confpasswd = document.getElementById("confpasswd");
    console.log(email)
    const promise= auth.createUserwithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");

  }
