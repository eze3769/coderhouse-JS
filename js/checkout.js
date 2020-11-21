function Init(){
CartLoad()
TotalCart()
}
window.Mercadopago.setPublishableKey("TEST-3a4140a4-b08f-4580-bf7a-4cdffe6dccc4");
              
function CartLoad(){
    if (JSON.parse(localStorage.getItem('carrito')) !== null){
        var cantidad = JSON.parse(localStorage.getItem('carrito')).length;
        var productos = 0;
        for(var i=0; i < cantidad; i++){
            productos = productos + Number(JSON.parse(localStorage.getItem('carrito'))[i].quantity);
        }
    }
    
    for(var i=0 ; i < cantidad ; i++){
        var description = JSON.parse(localStorage.getItem('carrito'))[i].description;
        var price = JSON.parse(localStorage.getItem('carrito'))[i].price;
        var quantity = JSON.parse(localStorage.getItem('carrito'))[i].quantity;
        
        var descriptionList = document.querySelector('.checkout__listDescription');
        var priceList = document.querySelector('.checkout__listPrice');
        var quantityList = document.querySelector('.checkout__listQuantity');
        var itemDescripcion = document.createElement('li');
        var itemPrecio = document.createElement('li');
        var itemCantidad = document.createElement('li');
        
        itemDescripcion.textContent = description; 
        itemPrecio.textContent = '$ '+price*quantity;
        itemCantidad.textContent = quantity;

        itemDescripcion.className = 'listProduct';
        itemDescripcion.id = 'descriptionProduct("'+i+'")';
        itemPrecio.className = 'listProduct';
        itemPrecio.id = 'priceProduct("'+i+'")';
        itemCantidad.className = 'listProduct';
        itemCantidad.id = 'cantProduct("'+i+'")';


        descriptionList.appendChild(itemDescripcion);
        priceList.appendChild(itemPrecio);
        quantityList.appendChild(itemCantidad);

    }
};
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

