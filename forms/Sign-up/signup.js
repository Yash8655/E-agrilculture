// const firebaseConfig = {
//     apiKey: "AIzaSyASSHKgtwjI7Ag9MRwbWv_jau8lq9m8J5Q",
//     authDomain: "form-validation-23825.firebaseapp.com",
//     databaseURL: "https://form-validation-23825-default-rtdb.firebaseio.com",
//     projectId: "form-validation-23825",
//     storageBucket: "form-validation-23825.appspot.com",
//     messagingSenderId: "132541036215",
//     appId: "1:132541036215:web:77a1e7f9d843718540ff32"
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyAY4InzjjZAZPixS3IygY-ORp1AxQyS_90",
    authDomain: "farmer-272b6.firebaseapp.com",
    databaseURL: "https://farmer-272b6-default-rtdb.firebaseio.com",
    projectId: "farmer-272b6",
    storageBucket: "farmer-272b6.appspot.com",
    messagingSenderId: "756579153813",
    appId: "1:756579153813:web:b3057f263e8e9fc97fe89c"
};


  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference
 var signupformDB = firebase.database().ref("farmer");

 document.getElementById("farmer").addEventListener("submit",submitform)



 function submitform(e)
 {
    e.preventDefault();
    var name = getElementVal('name');
    var crop = getElementVal('crop');
    var land = getElementVal('land');
    var number = getElementVal('no');

    // saveMessages(name,no,password);
    signupformDB.set(
        {
            Name : name,
            Crop : crop,
            Land : land,
            Mob_no :  number,
            
        }
    );

    document.querySelector('.alert').style.display = "block";

    setTimeout(() => 
    {
        document.querySelector('.alert').style.display = "none";
    },3000);

    document.getElementById("farmer").reset();
    
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