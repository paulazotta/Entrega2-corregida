
const valorDelDolar = 1000;

// ARRAY DE OBJETOS 
const equiposParaTalleres = [
    {
        "id": 1,
        "modelo": "Autel MD808", 
        "precio": 400*valorDelDolar,
        "cantidad": 1,     
    },
    {
        "id": 2,
        "modelo": "AutelMD808 Pro",
        "precio": 500*valorDelDolar,
        "cantidad": 1, 
    },
    {
        "id": 3,
        "modelo": "Autel MX808",
        "precio": 700*valorDelDolar,
        "cantidad": 1, 
    },
    {
        "id": 4,
        "modelo": "Autel MX808 TS",
        "precio": 750*valorDelDolar,
        "cantidad": 1, 
    },
    {
        "id": 5,
        "modelo": "Autel MS905 Mini",
        "precio": 1300*valorDelDolar,
        "cantidad": 1, 
    },
    {
        "id": 6,
        "modelo": "Autel MS906",
        "precio": 1500*valorDelDolar,
        "cantidad": 1, 
    },
    {
        "id": 7,
        "modelo": "Autel MS906 BT",
        "precio": 1700*valorDelDolar,
        "cantidad": 1, 
    },
    {
        "id": 8,
        "modelo": "Autel MS908",
        "precio": 1900*valorDelDolar,
        "cantidad": 1, 
    },
    {
        "id": 9,
        "modelo": "Adptador Nissan 14 pines",
        "precio": 20*valorDelDolar,
        "cantidad": 1, 
    },
    {
        "id": 10,
        "modelo": "Adptador PSA 2 pines",
        "precio": 20*valorDelDolar,
        "cantidad": 1, 
    },
    {
        "id": 11,
        "modelo": "Adptador Benz 14 pines",
        "precio": 20*valorDelDolar,
        "cantidad": 1, 
    },
    {
        "id": 12,
        "modelo": "Adptador Fiat 3 pines",
        "precio": 20*valorDelDolar,
        "cantidad": 1, 
    },

];

//console.log(equiposParaTalleres)

// CREAR CARRITO 
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

class CarritoCheckOut{
    constructor(id, modelo, precio, cantidad){
        this.id= parseFloat(id);
        this.modelo = modelo;
        this.precio = parseFloat(precio);
        this.cantidad = parseFloat(cantidad);
        //guardarStorage();
    };
};


// AGREGAR AL CARRITO 
function agregarAlCarrito (id, modelo, precio, cantidad){
    const nuevoElemento = new CarritoCheckOut( id, modelo, precio, cantidad);
    carrito.push(nuevoElemento);
    guardarStorage();
};

//     agregarAlCarrito(el.id, el.modelo, el.precio, el.cantidad)
//     //carrito.push(nuevoElemento);
//     //guardarStorage();
// };



// -----------------  CARDS -----------------

const container = document.getElementById("container");

function mostrarProductos (){
    // Creo las cards
        equiposParaTalleres.forEach((el) =>{
        const card = document.createElement("div");
        card.className = "card";

        const modelo = document.createElement("h3");
        modelo.innerText = el.modelo;
        
        const precio = document.createElement("h5");
        precio.innerText = "$" + el.precio;

        const botonCarrito =document.createElement("button");
        botonCarrito.innerText = "Agregar al carrito";
        botonCarrito.className ="boton-carrito";

    // Las agrego  
        card.appendChild(modelo);
        card.appendChild(precio);
        card.appendChild(botonCarrito)  
        container.appendChild(card)

    // Funcionalidad del botón del carrito    
        botonCarrito.addEventListener("click", () =>{

            const repeat = carrito.some ((repeatEl) => repeatEl.id === el.id);
            console.log(repeat)
            if (repeat) {
                carrito.map((item) => {
                    if (item.id === el.id) {
                        item.cantidad++;
                    }
                });
            } else {
                agregarAlCarrito(el.id, el.modelo, el.precio, el.cantidad);
            }
            numeroCarrito();
            guardarStorage();
        });

        });
            
};




// BOTÓN MOSTRAR / OCULTAR 
const botonHTML = document.getElementById("btn");

let flag = false;
botonHTML.addEventListener("click", () =>{
    if (!flag){
        botonHTML.innerText ="Ocultar equipos"
        mostrarProductos();
        flag = true
        }  else {
        botonHTML.innerText ="Mostrar equipos"
        container.innerHTML="";
        flag = false
    }
});
    
//const verCarrito =document.getElementById("verCarrito");
const checkOutContainer = document.getElementById("checkOutContainer");

// -----------------VER CARRITO----------------- 
;
const pintarCarrito = () => {

// Funcionalidad al h1 "ver carrito"

    checkOutContainer.innerHTML = ""; 
    checkOutContainer.style.display = "flex";


// Creo el header del checkout    
    const headerCheckOut = document.createElement("div");
    headerCheckOut.className = "header-checkout";
    headerCheckOut.innerHTML =`
    <h2 class="checkout-header-titulo">Checkout</h2>
    `;

// Lo agrego
    checkOutContainer.appendChild(headerCheckOut)

// Creo la X para cerrar el carrito 
    const headerButton = document.createElement("h2");
    headerButton.innerText = "X";
    headerButton.className = "header-button"; 

// Para hacer que si toco la X se cierre el carrito 
    headerButton.addEventListener(("click"), () =>{
        headerCheckOut.style.display = "none";
    })

// Agrego la X
    headerCheckOut.appendChild(headerButton);

// Contenido del carrito 
    carrito.forEach ((el) =>{
        let contenidoCarrito = document.createElement("div");
        contenidoCarrito.className = "contenido-carrito";
        contenidoCarrito.innerHTML = `
        <h3> Producto ${el.modelo}</h3>
        <p> Precio $ ${el.precio}</p>
        <p>Cantidad: ${el.cantidad}</p>
        <p>Total: $ ${el.precio * el.cantidad}</p>
        `;
        guardarStorage();
 // Lo agrego
    headerCheckOut.appendChild(contenidoCarrito)

// Eliminar productos del carrito 
    // Creo la X
    let eliminar = document.createElement("button");
    eliminar.innerText = "❌";
    eliminar.className = "eliminar-producto";

// La agrego
   contenidoCarrito.appendChild(eliminar)

// Funcionalidad al botón eliminar 

eliminar.addEventListener("click", () => eliminarProducto(el.id));
numeroCarrito();
guardarStorage();
});


        
// SUMAR EL TOTAL DEL CARRITO 
    const total = carrito.reduce((acumulador, el) => acumulador + el.precio * el.cantidad, 0); // ACA AGREGUE * el.cantidad
       
// Mostrar total de la compra    
    const totalDeLaCompra = document.createElement("div");
    totalDeLaCompra.className = "total-compra";
    totalDeLaCompra.innerHTML =`Total a pagar: $ ${total}`;

//Lo agrego
    headerCheckOut.appendChild(totalDeLaCompra)
        

}; 



verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto =(id) =>{
    const foundIndex = carrito.findIndex((el) => el.id === id);
    
   if (foundIndex !== -1) {
    carrito.splice(foundIndex, 1);
    pintarCarrito();
    guardarStorage();
   }
   
}


// GUARDAR EN EL LOCAL STORAGE

const guardarStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}; 

// CANTIDAD CARRITO 

const cantidadCarrito = document.getElementById("cantidadCarrito");

const numeroCarrito = () =>{
    cantidadCarrito.style.display = "block";
    const carritolength = carrito.length
    localStorage.setItem("carritolength", JSON.stringify(carritolength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritolength"));
}

numeroCarrito();