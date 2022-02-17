function login(){

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
  console.log("user is signed in")
    } else {
      console.log("no one is logged")
    }
  });
  
  var userEmail = document.getElementById("mail").value
  var userPass = document.getElementById("password").value

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    var errorMessage = error.message;

    window.alert("Password or user is incorrect! please try again");
  });

}

function signUp(){
  const email = document.getElementById("email-sign-up").value;
  const password = document.getElementById("password-sign-up").value;

  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
      alert("Signup Successful :)")
  }).catch(err => {
      alert(err.message);
  });
}

function logout(){
  firebase.auth().signOut();
}

