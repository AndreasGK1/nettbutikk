function passordChecker() {
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password3").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  console.log(username);
  console.log(email);
  console.log(password1);
  console.log(password2);
  
    const now = new Date();
    const bruker = {
      Brukernavn: username,
      Email: email,
      Passord: password1,
      Created: firebase.firestore.Timestamp.fromDate(now),
    }
     db.collection('brukere').add(bruker).then(() => {
      console.log('bruker created')
      window.location.replace("logginn.html");
    })
    

  // if (password1.length >= 13) {
  //   console.log("this works");
  // } else {
  //   console.log(
  //     "password doesnt meet requirements, make sure that the password is atleast 13 characters long"
  //   );
  // }

  // if (password2 === password1) {
  //   console.log("both passwords are the same");
  // } else {
  //   console.log("both passwords need to be the same");
  // }
}
