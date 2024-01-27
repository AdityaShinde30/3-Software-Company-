const firebaseConfig = {
    apiKey: "AIzaSyBmhnYYNRT-yTXIXuZWLy3DovNVltDDbvM",
    authDomain: "contact-form-c10b5.firebaseapp.com",
    databaseURL: "https://contact-form-c10b5-default-rtdb.firebaseio.com",
    projectId: "contact-form-c10b5",
    storageBucket: "contact-form-c10b5.appspot.com",
    messagingSenderId: "976588013383",
    appId: "1:976588013383:web:85b377b7b5243626161662"
  };

//   initialize firebase
  firebase.initializeApp(firebaseConfig);

//   referenecs db
var contactFormDB = firebase.database().ref("Contact-form");

document.getElementById("Contact-form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name=getElementVal("name");
    var email=getElementVal("email");
    var comments=getElementVal("comments");
    var feedback=getElementVal("feedback");

    saveMessages(name,email,comments,feedback);

    // enable alert
    document.querySelector('.alert').style.display ="block";

    // remove the alert
    setTimeout(() =>{
        document.querySelector('.alert').style.display ="none";
    },3000);

    // reset the form 
    document.getElementById("Contact-form").reset();
}

const saveMessages =(name,email,comments,feedback) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        email : email,
        comments : comments,
        feedback:feedback
    });
};

const getElementVal =(id) =>{
    return document.getElementById(id).value;
};