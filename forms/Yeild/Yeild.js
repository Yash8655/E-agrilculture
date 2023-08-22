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
    apiKey: "AIzaSyDDlQMlLIrJ9lU5aQaLvEkwI4LEg7IWmrw",
    authDomain: "yield-39422.firebaseapp.com",
    databaseURL: "https://yield-39422-default-rtdb.firebaseio.com",
    projectId: "yield-39422",
    storageBucket: "yield-39422.appspot.com",
    messagingSenderId: "859826312008",
    appId: "1:859826312008:web:744f9f96acd51d89ac197d"
  };


  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference
 var yeildDB = firebase.database().ref("Yeild");

 document.getElementById("Yeild").addEventListener("submit",submitform)



 function submitform(e)
 {
    e.preventDefault();
   
    var crop = getElementVal('crop');
    var quantity = getElementVal('quan');
    var from = getElementVal('from');
    var till = getElementVal('to');
    var farmid = getElementVal('farmid');

    // saveMessages(name,no,password);
    yeildDB.set(
        {
            Id : farmid,
            Crop : crop,
            Quantity : quantity,
            From : from,
            To : till,
            
        }
    );

    document.querySelector('.alert').style.display = "block";

    setTimeout(() => 
    {
        document.querySelector('.alert').style.display = "none";
    },3000);

    document.getElementById("Yeild").reset();
    open_back();
    
 }



 const getElementVal = (id) =>
 {
    return document.getElementById(id).value;
 };


 function open_back()
    {
      window.open("file:///C:/Users/vishn/OneDrive/Desktop/Team/Hackathon/sidebar.html#");
    }