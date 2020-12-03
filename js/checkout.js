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
        var description = JSON.parse(localStorage.getItem('carrito'))[i].product;
        var price = JSON.parse(localStorage.getItem('carrito'))[i].price;
        var quantity = JSON.parse(localStorage.getItem('carrito'))[i].quantity;
        var image = JSON.parse(localStorage.getItem('carrito'))[i].image;
        
        var descriptionList = document.getElementById('checkout__listDescription');
        var imageList = document.getElementById('checkout__listImage');
        var priceList = document.getElementById('checkout__listPrice');
        var quantityList = document.getElementById('checkout__listQuantity');
        var totalList = document.getElementById('checkout__listTotal');
        var itemDescripcion = document.createElement('li');
        var itemPrecio = document.createElement('li');
        var itemCantidad = document.createElement('li');
        var itemImageList = document.createElement('li');
        var itemImage = document.createElement('img');
        var itemTotal = document.createElement('li');
        
        itemDescripcion.textContent = description; 
        itemPrecio.textContent = '$ '+price;
        itemCantidad.textContent = quantity;
        itemImageList.className = 'checkout__listItem-img';
        itemImageList.id = 'imageProduct("'+i+'")';
        itemImage.src = image;
        itemImage.className ='CheckoutImageProduct';
        itemDescripcion.className = 'checkout__listItem';
        itemDescripcion.id = 'descriptionProduct("'+i+'")';
        itemPrecio.className = 'checkout__listItem';
        itemPrecio.id = 'priceProduct("'+i+'")';
        itemCantidad.className = 'checkout__listItem';
        itemCantidad.id = 'cantProduct("'+i+'")';
        itemTotal.className = 'checkout__listItem';
        itemTotal.id = 'TotalProduct("'+i+'")';
        itemTotal.textContent = '$ '+price*quantity;

        imageList.appendChild(itemImageList);
        itemImageList.appendChild(itemImage);
        descriptionList.appendChild(itemDescripcion);
        priceList.appendChild(itemPrecio);
        quantityList.appendChild(itemCantidad);
        totalList.appendChild(itemTotal);

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

