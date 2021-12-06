const signUp = () => {
   const x = document.getElementById("sign-up")
   const storedUser = localStorage.getItem('email')
  
   const signUpName = x.elements.item(0).value
   const signUpEmail = x.elements.item(1).value
   const signUpPassword = x.elements.item(2).value

   if(signUpEmail === storedUser){
     alert('Email Address is Already Registered');
   }
   else{
     const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     const rePass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    
     if ( reEmail.test(String(signUpEmail)) && rePass.test(String(signUpPassword))) {
        if(localStorage.length === 0) id = 1
        else id = JSON.parse(localStorage.getItem(localStorage.key(localStorage.length - 1))).id + 1;
        var user = {
          'name': signUpName,
          'email': signUpEmail,
          'password': signUpPassword,
          'id': id
        }
        localStorage.setItem('user' + id, JSON.stringify(user))
     }
   }
}

 const signIn = () => {
   const x = document.getElementById("sign-in")

   const signInEmail = x.elements.item(0).value
   const signInPassword = x.elements.item(1).value

    for(let i = 1; i <= localStorage.length; i++){
        const storedUser = localStorage.getItem('user' + i)
        let user = JSON.parse(storedUser)
        if(user.email === signInEmail && user.password === signInPassword) {
            window.location.replace('./index.html');
            console.log('signed in')
        }
    }
 }