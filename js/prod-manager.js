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

  //-----------------------------
  initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        $(".noLog").hide();
        $(".onLog").show();
        $(".header__logOutButton").show();
      } else {
        // User is signed out.
        $(".noLog").show();
        $(".onLog").hide();
        $(".header__logOutButton").hide();
      }
    }, function(error) {
      console.log(error);
    });
  };

  window.addEventListener('load', function() {
    initApp()
  });
 
  var exist = false;
  function ProductPreview(){
    if (exist == true){
      $('.shop__listItem').remove(); 
    }
    
    var nombre = document.getElementById("input-name").value;
    var descripcion = document.getElementById("text-description").value;
    var precio = document.getElementById("input-price").value;
    var imagen = document.getElementById("input-image").value;

    var place = document.querySelector(".shop__list");
    var itemList = document.createElement('li');
    var paragraphTitle = document.createElement('p');
    var image = document.createElement('img');
    var divCreator = document.createElement('div');
    var paragraphContentText = document.createElement('p');
    var paragraphDescription = document.createElement('p');
    var paragraphPrice = document.createElement('p');
    var productFooter = document.createElement('div')
    var linkToAdd = document.createElement('button');
    var cartIcon = document.createElement('i');
    var quantitySelector = document.createElement('div');
    var quantityReduce = document.createElement('button');
    var quantityText = document.createElement('p');
    var quantityIncrease = document.createElement('button');

    itemList.classList.add('shop__listItem');
    paragraphTitle.classList.add('shop__productLabel-title');
    paragraphTitle.innerText = nombre;
    image.classList.add('shop__listImg');
    image.alt = nombre;
    image.src = imagen;
    divCreator.classList.add('shop__productLabelContainer');
    paragraphContentText.classList.add('shop__productLabel');
    paragraphContentText.style.fontWeight = 'bold';
    paragraphContentText.innerText = 'Contenido:';
    paragraphDescription.classList.add('shop__productLabel');
    paragraphDescription.innerText = descripcion;
    paragraphPrice.classList.add('shop__productLabel-price');
    paragraphPrice.innerText = '$ ' +precio;
    productFooter.classList.add('shop__footer');
    cartIcon.classList.add('fas','fa-shopping-cart','cart-icon','shop__cartAdd');
    quantitySelector.classList.add('shop__quantityContainer');
    quantityReduce.classList.add('button-quantity');
    quantityReduce.innerText = '-';
    quantityReduce.href = '#product-quantity';
    quantityIncrease.classList.add('button-quantity');
    quantityIncrease.innerText = '+';
    quantityIncrease.href = '#product-quantity';
    quantityText.classList.add('shop__quantity');
    quantityText.innerText= 1;

    place.appendChild(itemList);
    itemList.appendChild(paragraphTitle);
    itemList.appendChild(image);
    itemList.appendChild(divCreator);
    divCreator.appendChild(paragraphContentText);
    divCreator.appendChild(paragraphDescription);
    divCreator.appendChild(paragraphPrice);
    itemList.appendChild(productFooter);
    productFooter.appendChild(linkToAdd);
    linkToAdd.appendChild(cartIcon);
    productFooter.appendChild(quantitySelector);
    quantitySelector.appendChild(quantityReduce);
    quantitySelector.appendChild(quantityText);
    quantitySelector.appendChild(quantityIncrease);

    exist = true;
}
function LogOut() {
  firebase.auth().signOut()
}