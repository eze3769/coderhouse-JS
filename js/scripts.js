
function Init(){
    ProductsLoad();
    CartCount();
}
var baseDeDatos = [
    {
        id : 0,
        nombre: 'Shampoo de Pelo Graso',
        descripcion: '-Aceite de Jojoba.\n- Té verde.\n- Arcilla verde.\n- Aceites esenciales de limón y menta.',
        precio: 360,
        imagen: 'img/products/shampoo-graso.jpg'
    },{
        id : 1,
        nombre: 'Shampoo de Pelo Normal',
        descripcion: '- Aceite de ricino.\n- Manteca de karité.\n- Arcilla blanca.\n- Aceites esenciales de jazmín y naranja.',
        precio: 360,
        imagen: 'img/products/shampoo-normal.jpg'
    },{
        id :2,
        nombre: 'Shampoo de Pelo Seco',
        descripcion: '- Aceite de almendras dulces.\n- Manteca de karité.\n- Avena.\n- Arcilla roja.\n- Aceites esenciales de lavanda y tea tree.',
        precio: 360,
        imagen: 'img/products/shampoo-seco.jpg'
    },{
        id : 3,
        nombre: 'Vela de soja',
        descripcion: '- Duran más que las de parafina, y su olor se desprende más rápido.\n- Son amigables con el medio ambiente.\n- Dejan un aroma riquísimo!\n- Aceites esenciales de limón y menta.',
        precio: 380,
        imagen: 'img/products/vela-soja.jpg'
    }];

function ProductConstructor(id, nombre, descripcion, precio, imagen){
    
    var place = document.getElementById('shop__list');
    var itemList = document.createElement('li');
    var paragraphTitle = document.createElement('p');
    var image = document.createElement('img');
    var divCreator = document.createElement('div');
    var paragraphContentText = document.createElement('p');
    var paragraphDescription = document.createElement('p');
    var paragraphPrice = document.createElement('p');
    var productFooter = document.createElement('div')
    var linkToAdd = document.createElement('a');
    var cartIcon = document.createElement('i');
    var quantitySelector = document.createElement('div');
    var quantityReduce = document.createElement('a');
    var quantityText = document.createElement('p');
    var quantityIncrease = document.createElement('a');

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
    linkToAdd.href = '#';
    linkToAdd.setAttribute('onclick','cartClick('+id+')' );
    cartIcon.classList.add('fas','fa-shopping-cart','cart-icon','shop__cartAdd');
    quantitySelector.classList.add('shop__quantityContainer');
    quantityReduce.classList.add('button-quantity');
    quantityReduce.innerText = '-';
    quantityReduce.href = '#product-quantity';
    quantityReduce.setAttribute('onclick','QuantityButton("-",'+id+')' );
    quantityIncrease.classList.add('button-quantity');
    quantityIncrease.innerText = '+';
    quantityIncrease.href = '#product-quantity';
    quantityIncrease.setAttribute('onclick','QuantityButton("+",'+id+')' );
    quantityText.classList.add('shop__quantity');
    quantityText.innerText= 1;
    quantityText.id ='product-quantity__'+id;

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
}

function ProductsLoad(){
    var cantidad = baseDeDatos.length;
    for(var i=0; i < cantidad; i++ ){
        var id = baseDeDatos[i].id;
        var nombre = baseDeDatos[i].nombre;
        var descripcion = baseDeDatos[i].descripcion;
        var precio = baseDeDatos[i].precio;
        var imagen = baseDeDatos[i].imagen;
        ProductConstructor(id, nombre, descripcion, precio, imagen)
    }
}

function cartClick(order){
    var product = baseDeDatos[order].nombre;
    var cost = baseDeDatos[order].precio;
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
    
    function Compra(description, price, quantity){
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    
    }
    var nuevaCompra = new Compra(product, cost, quantify);

    var nuevoCarritoDeCompras = new CarritoDeCompras();
    nuevoCarritoDeCompras.tomarDatosIniciales();

    nuevoCarritoDeCompras.agregarCompra(nuevaCompra);


    var productos = nuevoCarritoDeCompras.compra.length;
    console.log(productos)

    document.getElementById('cartCount').innerText = productos+ ' Productos';
}

function CartCount(){
    if (JSON.parse(localStorage.getItem('carrito')) !== null){
        var productos = JSON.parse(localStorage.getItem('carrito')).length;
        document.getElementById('cartCount').innerText = productos+ ' Productos';
        return productos;
    }else{
        document.getElementById('cartCount').innerText = '0 Productos';
    }

}
var total=0;
function TotalCart(){
    if (JSON.parse(localStorage.getItem('carrito')) == null){
        total = 0;
    }else{
    productos = JSON.parse(localStorage.getItem('carrito')).length;
    for(var i=0 ; i < productos ; i++){
        var precio = Number(JSON.parse(localStorage.getItem('carrito'))[i].price);
        var cant = Number(JSON.parse(localStorage.getItem('carrito'))[i].quantity);
        total= total + cant*precio;
    }
    
}
    return total;
}


function OpenCart(){
   
    document.getElementById('cart-value').innerText="$ "+ TotalCart();
    document.querySelector('.body__modal').style.visibility = 'visible';

    if (localStorage.getItem('carrito') !== null){
        var productos;
        productos = JSON.parse(localStorage.getItem('carrito')).length;
        var cantidad = productos.length;
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
            itemPrecio.className = 'listProduct';
            itemCantidad.className = 'listProduct';
            itemDelete.className = 'listProduct';
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
    var i;
    
}
function DeleteCartItem(position){
    var carrito = JSON.parse(localStorage.getItem('carrito'));
    console.log(carrito);
    carrito.splice(position, 1);
    localStorage.setItem('carrito',JSON.stringify(carrito))
    console.log(carrito);
}
function CartClean(){
    localStorage.removeItem('carrito');
    location.reload();
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

function ModalClose(){
    document.querySelector('.body__modal').style.visibility = 'hidden';
    location.reload();
}
