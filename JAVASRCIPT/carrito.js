
const valorDelDolar = 1000;

// ARRAY DE OBJETOS 
const equiposParaTalleres = [
    {
        "id": 1,
        "modelo": "Autel MD808", 
        "precio": 400*valorDelDolar       
    },
    {
        "id": 2,
        "modelo": "AutelMD808 Pro",
        "precio": 500*valorDelDolar
    },
    {
        "id": 3,
        "modelo": "Autel MX808",
        "precio": 700*valorDelDolar
    },
    {
        "id": 4,
        "modelo": "Autel MX808 TS",
        "precio": 750*valorDelDolar
    },
    {
        "id": 5,
        "modelo": "Autel MS905 Mini",
        "precio": 1300*valorDelDolar
    },
    {
        "id": 6,
        "modelo": "Autel MS906",
        "precio": 1500*valorDelDolar
    },
    {
        "id": 7,
        "modelo": "Autel MS906 BT",
        "precio": 1700*valorDelDolar
    },
    {
        "id": 8,
        "modelo": "Autel MS908",
        "precio": 1900*valorDelDolar
    }

];

//console.log(equiposParaTalleres)

// CREAR CARRITO 
let carrito = [];

class CarritoCheckOut{
    constructor(id, modelo, precio){
        this.id= parseFloat(id);
        this.modelo = modelo;
        this.precio = parseFloat(precio);
    };
};

// AGREGAR AL CARRITO 
function agregarAlCarrito (id, modelo, precio){
    const nuevoElemento = new CarritoCheckOut( id, modelo, precio);
    carrito.push(nuevoElemento);
};

// SUMAR EL TOTAL DEL CARRITO
// function montoTotal(){
//     let total = 0;
//     carrito.forEach( (el) => {
//         total += el.precio
//     });
//     return total;
    
// }
// console.log(montoTotal)



// -----------------  CARDS -----------------

const container = document.getElementById("container");

function mostrarProductos (){
    // Creo las cards
        equiposParaTalleres.forEach((el) =>{
        const card = document.createElement("div");
        card.className = "card";

        const modelo = document.createElement("h3");
        modelo.innerText = el.modelo;
        
        const precio = document.createElement("h5")
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
            agregarAlCarrito(el.id, el.modelo, el.precio);
        });
    });
    };

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
    
const verCarrito =document.getElementById("verCarrito");
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
        `;
guardarStorage();
 // Lo agrego
    headerCheckOut.appendChild(contenidoCarrito)

// Eliminar productos del carrito 
    // Creo la X
    let eliminar = document.createElement("button");
    eliminar.innerText = "quitar";
    eliminar.className = "eliminar-producto";

// La agrego
   contenidoCarrito.appendChild(eliminar)

// Funcionalidad al botón eliminar 

eliminar.addEventListener("click", () => eliminarProducto(el.id));
guardarStorage();
});


        
// SUMAR EL TOTAL DEL CARRITO 
    const total = carrito.reduce((acumulador, el) => acumulador + el.precio, 0);
       
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
    //console.log(foundIndex)
   if (foundIndex !== -1) {
    carrito.splice(foundIndex, 1);
    pintarCarrito();
    guardarStorage();
   }
   
}

// GUARDAR EN EL LOCAL STORAGE

function guardarStorage () {
    localStorage.setItem("Carrito", JSON.stringify(carrito));
};

// if (carrito.some (el => el.id === 1)){
//     arrayPrueba2 [0].cantidad += 1;
// } else {
//     //arrayPrueba2.push(nuevoElemento)
// }
// console.log(arrayPrueba2)