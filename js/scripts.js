
function Init(){
    $('.body__modal').hide();
    $('.body__productModal').hide();
    ProductsLoad();
    CartCount();
}
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

var id = 1;
var dataBase;
var dbRef = firebase.database().ref("products");
dbRef.once("value")
  .then(function(snapshot) {
    var dataBase = snapshot.val(); 
    var keys = Object.keys(dataBase);
    var keysLength = keys.length;
    console.log(keys);
    console.log(keysLength);
    return snapshot
    });

//var baseDeDatos = [
//    {
//        id : 0,
//        nombre: 'Shampoo de Pelo Graso',
//        descripcion: '-Aceite de Jojoba.\n- Té verde.\n- Arcilla verde.\n- Aceites esenciales de limón y menta.',
//        precio: 360,
//        imagen: 'img/products/shampoo-graso.jpg'
//    },{
//        id : 1,
//        nombre: 'Shampoo de Pelo Normal',
//        descripcion: '- Aceite de ricino.\n- Manteca de karité.\n- Arcilla blanca.\n- Aceites esenciales de jazmín y naranja.',
//        precio: 360,
//        imagen: 'img/products/shampoo-normal.jpg'
//    },{
//        id :2,
//        nombre: 'Shampoo de Pelo Seco',
//        descripcion: '- Aceite de almendras dulces.\n- Manteca de karité.\n- Avena.\n- Arcilla roja.\n- Aceites esenciales de lavanda y tea tree.',
//        precio: 360,
//        imagen: 'img/products/shampoo-seco.jpg'
//    },{
//        id : 3,
//        nombre: 'Vela de soja',
//        descripcion: '- Duran más que las de parafina, y su olor se desprende más rápido.\n- Son amigables con el medio ambiente.\n- Dejan un aroma riquísimo!\n- Aceites esenciales de limón y menta.',
//        precio: 380,
//        imagen: 'img/products/vela-soja.jpg'
//    }];

function ProductsLoad(){
    var dbRef = firebase.database().ref("products");
    dbRef.once("value")
        .then(function(snapshot) {
    var dataBase = snapshot.val(); 

    var keys = Object.keys(dataBase);
    var key = keys[i]
    var keysLength = keys.length;
    
    for(var i=0; i < keysLength; i++ ){
        var id = keys[i];
        var nombre = dataBase[id].name;
        var descripcion = dataBase[id].description;
        var precio = dataBase[id].price;
        var imagen = dataBase[id].image;
        ProductConstructor(id, nombre, descripcion, precio, imagen)
    }
}
        )};

function ProductConstructor(id, nombre, descripcion, precio, imagen){
    
    var place = document.getElementById('shop__list');
    var itemList = document.createElement('li');
    var paragraphTitle = document.createElement('p');
    var image = document.createElement('img');
    var divCreator = document.createElement('div');
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
    paragraphTitle.setAttribute('onclick',"ProductClick('"+id+"')" );
    image.classList.add('shop__listImg');
    image.alt = nombre;
    image.src = imagen;
    image.setAttribute('onclick',"ProductClick('"+id+"')" );
    divCreator.classList.add('shop__productLabelContainer');
    paragraphPrice.classList.add('shop__productLabel-price');
    paragraphPrice.innerText = '$ ' +precio;
    productFooter.classList.add('shop__footer');
    linkToAdd.setAttribute('onclick',"CartClick('"+id+"')" );
    cartIcon.classList.add('fas','fa-shopping-cart','cart-icon','shop__cartAdd');
    quantitySelector.classList.add('shop__quantityContainer');
    quantityReduce.classList.add('button-quantity');
    quantityReduce.innerText = '-';
    quantityReduce.href = '#product-quantity';
    quantityReduce.setAttribute('onclick','QuantityButton("-","'+id+'")' );
    quantityIncrease.classList.add('button-quantity');
    quantityIncrease.innerText = '+';
    quantityIncrease.href = '#product-quantity';
    quantityIncrease.setAttribute('onclick','QuantityButton("+","'+id+'")' );
    quantityText.classList.add('shop__quantity');
    quantityText.innerText= 1;
    quantityText.id ='product-quantity__'+id;

    place.appendChild(itemList);
    itemList.appendChild(paragraphTitle);
    itemList.appendChild(image);
    itemList.appendChild(divCreator);
    divCreator.appendChild(paragraphPrice);
    itemList.appendChild(productFooter);
    productFooter.appendChild(linkToAdd);
    linkToAdd.appendChild(cartIcon);
    productFooter.appendChild(quantitySelector);
    quantitySelector.appendChild(quantityReduce);
    quantitySelector.appendChild(quantityText);
    quantitySelector.appendChild(quantityIncrease);
}

function CartClick(order){
    var dbRef = firebase.database().ref("products");
    dbRef.once("value")
        .then(function(snapshot) {
    var dataBase = snapshot.val(); 
    var key = order;
    
    var id = key;
    var product = dataBase[key].name;
    var cost = dataBase[key].price;
    var quantify = Number(document.getElementById('product-quantity__'+order).innerText);
    function CarritoDeCompras() {
        this.compra = [];
        this.agregarCompra = function(compra){
            this.compra.push(compra)
            localStorage.setItem("carrito", JSON.stringify(this.compra));
        }
            this.tomarDatosIniciales = function() {
                if(localStorage.getItem('carrito') != null){
                    this.compra = JSON.parse(localStorage.getItem('carrito'))
                } 
            }
    
        }
        function Compra(id, description, price, quantity){
            this.id = id;
            this.description = description;
            this.price = price;
            this.quantity = quantity;
        
        }
        var nuevaCompra = new Compra(id, product, cost, quantify);
    ItemsCompare()
    function ItemsCompare(){
        var end = 0;
        if (localStorage.getItem('carrito') != null){
            
                var cantidad = JSON.parse(localStorage.getItem('carrito')).length;
                for(var i=0; i < cantidad;i++){
                    var idToCompare = JSON.parse(localStorage.getItem('carrito'))[i].id;
                    var idNew = id;
                    if( idNew == idToCompare){
                        var carrito = JSON.parse(localStorage.getItem('carrito'));
                        var cant = carrito[i].quantity;
                        var newCant = quantify;
                        carrito[i].quantity = cant + newCant;

                        localStorage.setItem('carrito',JSON.stringify(carrito));
                        end = 1;
                    }
                }
            
            if (end == 0 ){
                var nuevoCarritoDeCompras = new CarritoDeCompras();
                nuevoCarritoDeCompras.tomarDatosIniciales();
                nuevoCarritoDeCompras.agregarCompra(nuevaCompra);
            }
        }else{
            var nuevoCarritoDeCompras = new CarritoDeCompras();
                nuevoCarritoDeCompras.tomarDatosIniciales();
                nuevoCarritoDeCompras.agregarCompra(nuevaCompra);
        }
    }
    CartCount()
    });

    
    
}

function CartCount(){
    if (JSON.parse(localStorage.getItem('carrito')) !== null){
        var cantidad = JSON.parse(localStorage.getItem('carrito')).length;
        var productos = 0;
        for(var i=0; i < cantidad; i++){
            productos = productos + Number(JSON.parse(localStorage.getItem('carrito'))[i].quantity);
        }
        document.getElementById('cartCount').innerText = productos+ ' Productos';
        return productos;
    }else{
        document.getElementById('cartCount').innerText = '0 Productos';
    }

}
var total=0;
function TotalCart(){
    if (JSON.parse(localStorage.getItem('carrito')) == null){
    }else{
    total = 0;
    productos = JSON.parse(localStorage.getItem('carrito')).length;
    for(var i=0 ; i < productos ; i++){
        var precio = Number(JSON.parse(localStorage.getItem('carrito'))[i].price);
        var cant = Number(JSON.parse(localStorage.getItem('carrito'))[i].quantity);
        total= total + cant*precio;
    }
}
    
    document.getElementById('cart-value').innerText="$ "+ total;
    
}


function OpenCart(){
    
    TotalCart();
    CartClear();
    CartProductsCreator()
    $('.body__modal').fadeToggle(300);
}
function CartProductsCreator(){
    if (localStorage.getItem('carrito') !== null){
       
        document.querySelector('.carritoVacio-text').style.display='none';
        document.getElementById('encabezadoCarrito').style.display='flex';
        

        for(var i=0 ; i < productos ; i++){
            var description = JSON.parse(localStorage.getItem('carrito'))[i].description;
            var price = JSON.parse(localStorage.getItem('carrito'))[i].price;
            var quantity = JSON.parse(localStorage.getItem('carrito'))[i].quantity;
            
            var descriptionList = document.querySelector('.modal__descriptionColumn');
            var priceList = document.querySelector('.modal__priceColumn');
            var quantityList = document.querySelector('.modal__quantityColumn');
            var deleteList = document.querySelector('.modal__deleteColumn');
            var itemDescripcion = document.createElement('li');
            var itemPrecio = document.createElement('li');
            var itemCantidad = document.createElement('li');
            var itemDelete = document.createElement('li');
            var deleteIcon = document.createElement('i');
            

            itemDescripcion.textContent = description; 
            itemPrecio.textContent = '$ '+price*quantity;
            itemCantidad.textContent = quantity;

            itemDescripcion.className = 'listProduct';
            itemDescripcion.id = 'descriptionProduct('+i+')';
            itemPrecio.className = 'listProduct';
            itemPrecio.id = 'priceProduct('+i+')';
            itemCantidad.className = 'listProduct';
            itemCantidad.id = 'cantProduct('+i+')';
            itemDelete.className = 'listProduct';
            itemDelete.id = 'deleteProduct('+i+')';
            itemDelete.classList.add('cart-del');
            deleteIcon.className = "far fa-trash-alt";
            deleteIcon.setAttribute('onclick','DeleteCartItem('+i+')');


            itemDelete.appendChild(deleteIcon);

            descriptionList.appendChild(itemDescripcion);
            priceList.appendChild(itemPrecio);
            quantityList.appendChild(itemCantidad);
            deleteList.appendChild(itemDelete);

           
            
        }
    }else{
        document.querySelector('.carritoVacio-text').style.display='block';
        document.getElementById('encabezadoCarrito').style.display='none';
    }
    
}
function CartClear(){
    $('.modal__descriptionColumn li:not(:first)').remove(); 
    $('.modal__priceColumn li:not(:first)').remove(); 
    $('.modal__quantityColumn li:not(:first)').remove(); 
    $('.modal__deleteColumn li:not(:first)').remove(); 
}

function DeleteCartItem(position){
    var carrito = JSON.parse(localStorage.getItem('carrito'));
    carrito.splice(position, 1);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    var descriptionList = document.querySelector('.modal__descriptionColumn');
    var descriptionToDelete = document.getElementById('descriptionProduct('+position+')');
    var priceList = document.querySelector('.modal__priceColumn');
    var priceToDelete = document.getElementById('priceProduct('+position+')');
    var quantityList = document.querySelector('.modal__quantityColumn');
    var quantityToDelete = document.getElementById('cantProduct('+position+')');
    var deleteList = document.querySelector('.modal__deleteColumn');
    var deleteIconToDelete = document.getElementById('deleteProduct('+position+')');

    descriptionList.removeChild(descriptionToDelete);
    priceList.removeChild(priceToDelete);
    quantityList.removeChild(quantityToDelete);
    deleteList.removeChild(deleteIconToDelete);
    CartCount();
    TotalCart();
    CartClear();
    CartProductsCreator();
}
function CartClean(){
    localStorage.removeItem('carrito');
    CartClear();
    CartCount();
    TotalCart();
    document.getElementById('cart-value').innerText="$ "+ 0;
}

function QuantityButton(input,id){
    var valor = Number(document.getElementById('product-quantity__'+id).innerText);
    if (input == "+"){
        document.getElementById('product-quantity__'+id).innerText = valor+1;
    }else{
        if (valor == 1){

        }else{
            document.getElementById('product-quantity__'+id).innerText = valor-1;
        }

    }
}

function ModalClose(select){
    if (select=='cart'){
        $('.body__modal').fadeOut(200);
    }
    if (select=='prod'){
        $('.body__productModal').fadeOut(200);
    }
};
function ProductClick(id){
    $('.body__productModal').show();

    var dbRef = firebase.database().ref("products");
    dbRef.once("value")
        .then(function(snapshot) {
    var dataBase = snapshot.val(); 

    var nombre = dataBase[id].name;
    var descripcion = dataBase[id].description;
    var precio = dataBase[id].price;
    var imagen = dataBase[id].image;

    $(".productModal__title").text(nombre);
    $(".gridImg__img").attr("src", imagen);
    document.querySelector(".gridDescription__text").innerText = descripcion ; //jquery no me respeta los br
    $(".gridPrice__price").text("$ "+precio);
        })
};
