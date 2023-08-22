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
    apiKey: "AIzaSyC4iW7Tl8xuqweI-PCT1MsjSfy3rFKI_fA",
    authDomain: "agri-1aefd.firebaseapp.com",
    databaseURL: "https://agri-1aefd-default-rtdb.firebaseio.com",
    projectId: "agri-1aefd",
    storageBucket: "agri-1aefd.appspot.com",
    messagingSenderId: "541358277673",
    appId: "1:541358277673:web:6da688e976dd00b6f7c838"
  }

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference
 var signupformDB = firebase.database().ref("rentform");

 document.getElementById("rentform").addEventListener("submit",submitform)



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

    document.getElementById("rentform").reset();
    
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