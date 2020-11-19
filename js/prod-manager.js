     // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCAG6jZJoV_Uhb5L_wc4q4c7Ra3BYCq4yk",
    authDomain: "aromarte-web.firebaseapp.com",
    databaseURL: "https://aromarte-web.firebaseio.com",
    projectId: "aromarte-web",
    storageBucket: "aromarte-web.appspot.com",
    messagingSenderId: "931826286770",
    appId: "1:931826286770:web:8eaa68cc3f4d2a3507c9ab",
    measurementId: "G-X84GP08LHW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function CreateProduct(){
    
    var name = $("#input-name").val();
    var description = $("#text-description").val();
    var price = $("#input-price").val();
    var image = $("#input-image").val();
    var category = $("#input-category").val();
    
    
    SaveProduct(name,description,price,image)

};
function SaveProduct(name,description,price,image){
    var db = firebase.database().ref('products').push();
    if (name == "" || description == "" || price == ""){
        alert("rellene los campos");
    }else{
        db.set({
            'name': name,
            'description': description,
            'price': price,
            'image': image
            
        });
    }
}