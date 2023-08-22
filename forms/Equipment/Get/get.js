// const firebaseConfig = {
//     apiKey: "AIzaSyASSHKgtwjI7Ag9MRwbWv_jau8lq9m8J5Q",
//     authDomain: "form-validation-23825.firebaseapp.com",
//     databaseURL: "https://form-validation-23825-default-rtdb.firebaseio.com",
//     projectId: "form-validation-23825",
//     storageBucket: "form-validation-23825.appspot.com",
//     messagingSenderId: "132541036215",
//     appId: "1:132541036215:web:77a1e7f9d843718540ff32"
//   };

const firebaseConfig={
    apiKey: "AIzaSyCSXSQtAzJ5bBAmpYCHbpIMUEq831Gn-iw",
    authDomain: "agriget-ebbb5.firebaseapp.com",
    databaseURL: "https://agriget-ebbb5-default-rtdb.firebaseio.com",
    projectId: "agriget-ebbb5",
    storageBucket: "agriget-ebbb5.appspot.com",
    messagingSenderId: "15849560750",
    appId: "1:15849560750:web:4fad652fa7a84f5c2cab3f"
  }

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference
 var signupformDB = firebase.database().ref("getform");

 document.getElementById("getform").addEventListener("submit",submitform)



 function submitform(e)
 {
    e.preventDefault();
    var name = getElementVal('name');
    var from = getElementVal('date_from');
    var To = getElementVal('date_upto');
    

    // saveMessages(name,no,password);
    signupformDB.set(
        {
            Name : name,
            From : from,
            To : To,
            
        }
    );

    document.querySelector('.alert').style.display = "block";

    setTimeout(() => 
    {
        document.querySelector('.alert').style.display = "none";
    },3000);

    document.getElementById("getform").reset();
    
   open_back();

 }


//  const saveMessages = (name,no,password) =>{
//     signupformDB.push().set(
//         {
//             Username : name,
//             Mob_no :  no,
//             password :password,
//         }
//     );
//  };

 const getElementVal = (id) =>
 {
    return document.getElementById(id).value;
 };


 function open_back()
    {
      window.open("file:///C:/Users/vishn/OneDrive/Desktop/Team/Hackathon/sidebar.html#");
    }