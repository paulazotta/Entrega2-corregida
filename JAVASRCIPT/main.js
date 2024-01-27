let dolar = 1000;
// HEADER 
let header = document.getElementById ("header");
header.innerHTML = `
    <nav>
        <ul>
            <li>
                <img class="logo-header" src="imagenes/logo.jpg" alt="logo_diagnostico">
                <a href="HTML/contacto.html">Contacto</a>
                <div id="verCarrito">
                    <p class="texto-carrito">Ver carrito🛒 <span id="cantidadCarrito" class="cantidadCarrito"></span></p>
                </div> 
            </li>
            
        </ul>
    </nav>
`;

//<a href="HTML/productos.html">Productos</a>

// CONTENEDOR PRINCIPAL 
let contenedorPrincipal = document.getElementById("contenedorPrincipal");
contenedorPrincipal.innerHTML = `
    <h2 class="bajada">Todo lo necesario para el correcto diagnóstico de averías automotrices</h2>
    <p class="frase-inicial">Hace 20 años nos dedicamos a la venta de scanners de diagnóstico automotriz. Somos representantes de las marcas Autel, Foxwell y Fcar. </p>
    <img class="imagenes-destacadas" src="imagenes/MX_808.jpg" alt="Destacado 1">
    <img class="imagenes-destacadas" src="imagenes/MS_906BT.jpg" alt="Destcado 2">
    <img class="imagenes-destacadas" src="imagenes/MD_808Pro.jpg" alt="Destacado 3">
    
`;

// let form = document.getElementById ("form");
// form.innerHTML= `
//     <input type="text" name="mail" id="mail" placeholder="ejemplo@mail.com"></input>
//     <input type="password" name="Contraseña" id="Contraseña" placeholder="********"></input>
//     <input type="submit" value="Iniciar">
//     `;

// INICIAR SESION 
// const button = document.getElementById("button");
// // button.className = "btn"
// // button.innerText = "Iniciar sesión"

// let usuario = "user"
// let password = "Password"
   
// function iniciarSesion(){
//         for (i=0; i<3; i++){
//             let usuario=prompt ("Ingresá tu usuario");
//             let password=prompt ("Ingresá tu contraseña");
//                 if (usuario === "user" && password === "Password"){
//                     alert ("¡Bienvenidx, que bueno tenerte por acá nuevamente!");
//                     break;
//                 } else{
//                     alert ("Los datos ingresados son incorrectos. Por favor intente nuevamente.");
//                 }
//         };
//     };
// button.addEventListener(("click") ()=>{
//     iniciarSesion();
// });
    //document.body.appendChild(button);


//     alert ("Ponete en contacto con nosotros para reestablecer tu contraseña. Mientras tanto podés recorrer el sitio como invitadx")
//     let usuarioInvitado= prompt ("Ingresá tu nombre")
//     alert ("Bienvenidx, " + usuarioInvitado)
// };

    

const equiposParticulares = ["Ap200", "MiniVci", "VagCom", "Elm327", "OpCom"];


// BOTON 
// ---- OPCION 1 ------
// const button = document.createElement("button");
// button.className = "btn"
// button.innerText = "Iniciar sesión"

// document.body.appendChild(button);

// ---- OPCION 2 ------

// botonHTML.addEventListener("click", () =>{
//     if (!flag){
//         botonHTML.innerText ="Ocultar equipos para particulares"
//         equiposParticulares.forEach ((el, idx) => {
//             const nuevaCard = document.createElement("div");
//             nuevaCard.className = "card";
//             nuevaCard.innerHTML = `
//             <p>${idx +1}</p>
//             <p>${el}</p>
//             `;
//             card.appendChild(nuevaCard);
//         });
//         flag = true
//     }
//     else {
//         botonHTML.innerText ="Mostrar equipos para particulares"
//         card.innerHTML="";
//         flag = false
//     }
// });




// // FOOTER 
// let footer = document.getElementById("footer");
// footer.innerHTML= `
// <img class="logo" src="imagenes/logo.jpg" alt="Logo diagnóstico"></img>
// `


// // // FUNCION --> INVITADX // Funciona ok 
// function invitadx(){
//     let nombre =prompt("Bienvenidx a nuestro sitio, ¿Cuál es tu nombre?");
//     if (nombre == "" || nombre == null){
//         alert ("No ingresaste nada");
//     }else{
//         alert ("Bienvenidx " + nombre + " vamos a descubrir el scanner perfecto para vos");
//     }
// };

// // CICLO FOR - FUNCION --> INICIAR SESION // Funciona ok  

// function iniciarSesion(){
//     for (i=0; i<3; i++){
//         let usuario=prompt ("Ingresá tu usuario");
//         let password=prompt ("Ingresá tu contraseña");
//             if (usuario === "user" && password === "Password"){
//                 alert ("¡Bienvenidx, que bueno tenerte por acá nuevamente!");
//                 break;
//             } else{
//                 alert ("Los datos ingresados son incorrectos. Por favor intente nuevamente.");
//             }
//     };
//     alert ("Ponete en contacto con nosotros para reestablecer tu contraseña. Mientras tanto podés recorrer el sitio como invitadx")
//     let usuarioInvitado= prompt ("Ingresá tu nombre")
//     alert ("Bienvenidx, " + usuarioInvitado)
// };



// //------------------------------------------------------------------------------------------------------------
// // BIENVENIDA // Funciona ok 
// let mensajeBienvenida= confirm("¡Hola! Si ya estás registradx, podés ingresar con tu usuario y contraseña");
// if(mensajeBienvenida){
//     iniciarSesion();
// } else {
//     invitadx();
// };


// // ARRAYS y OBJETOS 



class EquiposLineaAutoLink {
    constructor(modelo, cobertura, accesorios, precio){
        this.modelo = modelo;
        this.cobertura = cobertura;
        this.accesorios = accesorios;
        this.precio = precio;
    }
    presentarProducto(){
        alert ("El producto " + this.nombre + " es de la marca Autel y tiene cobertura " + this.cobertura + ". Incluye los siguientes accesorios: " + this.accesorios + ". El precio es $" + this.precio);
    }
}
const al319 = new EquiposLineaAutoLink ("AL319", "Multimarca", "No incluye", 30*dolar);
const al419 = new EquiposLineaAutoLink ("AL419", "Multimarca", "Cable OBD II", 40*dolar);
const al529 = new EquiposLineaAutoLink ("AL529", "Multimarca", "Cable OBD II", 50*dolar);
const al529HD = new EquiposLineaAutoLink ("AL529 HD", "Multimarca", "Cable OBD II y adaptador X pines", 80*dolar);
const al629 = new EquiposLineaAutoLink ("AL629", "Multimarca", "Cable OBD II", 70*dolar);

console.log(al629)

// const equiposLineaMaxiSys = [
//     {
//         modelo: "MS906",
//         cobertura: "multimarca",
//         accesorios: "Cable OBD II, Cable USB, 14 adaptadores, Cargador, Valija de transporte", 
//         img: "/Users/paulazotta/Desktop/Javascript/Copia_seguridad_entrega1/imagenes/MS_906.jpg",
//         precio: 1200*valorDelDolar,
//     },
//     {
//         modelo: "MS908",
//         cobertura: "multimarca",
//         accesorios: "Cable OBD II, Cable USB, 14 adaptadores, Cargador, Valija de transporte", 
//         img: "/Users/paulazotta/Desktop/Javascript/Copia_seguridad_entrega1/imagenes/MS_908.jpg",
//         precio: 1500*valorDelDolar,   
//     }
// ]
// const imagen = document.createElement("img");
// imagen.src = "./imagenes/MS_908.jpg"
// cardimagen.appendChild(imagen)
// console.log(equiposLineaMaxiSys)

// equiposLineaMaxiSys.forEach (el => {
//     const nuevaCard = document.createElement("div");
//     nuevaCard.className = "card";
//     nuevaCard.innerHTML = `
//     <p>${el.modelo}</p>
//     <p>$ ${el.precio}</p>
//     <p>${el.imagen}</p>
//     `;
//     card2.appendChild(nuevaCard);
// });


/*
const md802 = new EquiposLineaAutoLink ("MD802", "Multimarca", "Cable OBD II", 100*valorDelDolar)
const md808 = new EquiposLineaAutoLink ("MD808", "Multimarca", "Cable OBD II", 130*valorDelDolar)
const md808Pro = new EquiposLineaAutoLink ("MD808 Pro", "Multimarca", "Cable OBD II", 170*valorDelDolar)
const mx808 = new EquiposLineaAutoLink ("MX808", "Multimarca", "Cable OBD II", 250*valorDelDolar)
const mx808Ts = new EquiposLineaAutoLink ("MX808 TS", "Multimarca", "Cable OBD II", 250*valorDelDolar)


*/ 

//FUNCIONES DEL ORDEN SUPERIOR  --------------- FOR EACH -> Recorre y ejecuta algo. 
const nuevoArray = ["vag", "canclip", "ap200"]
// nuevoArray.forEach ((el) => console.log("Equipo recomendado: " + el))
nuevoArray.forEach ((el, idx) => console.log((idx +1) + " El equipo recomendado es: " + el));
//------------------------------------------

// FIND --> Busca y si encuentra devuelve. Devuelve un objeto
const equiposTalleres = [
    {modelo: "MS908", precio: 1700*dolar},
    {modelo: "MS905 Mini", precio: 1200*dolar},
    {modelo: "MS906 BT", precio: 1400*dolar}
]
const resultado = equiposTalleres.find ((el) => el.modelo === "MS908");
console.log(resultado)
const resultado2 = equiposTalleres.find (el => el.precio < 1300000);
console.log(resultado2)
// const resultado3 = equiposTalleres.find (el => el.precio < 1300000 && el.nombre === "MS905 Mini")

// FILTER --> Recorre el array y busca el/los elemenntos que cumplan conn las condiciones que le pasamos. Devuelve otro array, que si no encuentra nada es un array vacío
const resultado4 = equiposTalleres.filter ((el) => el.precio < 1500000);
console.log(resultado4);

const arrayDePrueba = [1, 2, 3, 4, 5, 6]
const arraySin5 = arrayDePrueba.filter (el => el !== 5);
console.log(arraySin5)

// SOME --> Me devuelve true or false. Funciona igual que find, recorre el array y busca que algun elemento cumpla con la condición. 
const arrayPrueba2 = [
    {
        nombre: "remera",
        id: 1, 
        precio: 111, 
        cantidad: 2
    }
]
// const validar  = arrayPrueba2.some (el => el.id === 1);
// console.log(validar)

if (arrayPrueba2.some (el => el.id === 1)){
    arrayPrueba2 [0].cantidad += 1;
} else {
    //arrayPrueba2.push(nuevoElemento)
}
console.log(arrayPrueba2)

// MAP --> Recorre y hace algo. Nos devuelve un nuevo array que es una copia del original con otras condiciones. 
const equiposDescuento = equiposTalleres.map (el =>{
    return {
        modelo: el.modelo + "- Descuento",
        precio: el.precio *0.85,
    }
})
console.log(equiposDescuento);

// let equiposLineaAl = [" AL319", " AL419", " AL529", " AL529 HD", " AL629"];
// console.log(equiposLineaAl);

// let al319 = {
//     Marca: "Autel",
//     Cobertura: "Multimarca",
//     Precio: 10000,
//     Stock: 15,
// }

// let equiposLineaMD = [" MD802", " MD808", " MD808 Pro"];
// let equiposLineaMX = [" MX808", " MX808 TS"];
// let equiposLineaMaxiSys = [" MS906", " MS906 BT", "MS908", " MS908 Pro"];
// equiposLineaMaxiSys.unshift (" MS905 Mini")


// // FUNCION --> PRESUPUESTO // Funciona ok 
// function presupuestoTalleres(){
//     let valorAComparar=prompt("Ingresá tu presupuesto aproximado (te recomendamos elegir un valor entre $50000 y $160000) para mostrarte distintas opciones");
//         if (valorAComparar <= 50000){
//             alert("Te recomendamos algún equipo de la línea AL (Autolink): " + equiposLineaAl + ". Podés verlos en la sección de productos.");
//         } else if (valorAComparar <= 100000){
//             alert ("Te recomendamos algún equipo de la línea MD (MaxiDiag): " + equiposLineaMD + ". Podés verlos en la sección de productos.");
//         } else if (valorAComparar <=150000) {
//             alert ("Te recomendamos algún equipo de la línea MX (MaxiCheck): " + equiposLineaMX + ". Podés verlos en la sección de productos.");
//         } else if (valorAComparar >= 150001){
//             alert ("Te recomendamos algún equipo de la línea MaxiSys: " + equiposLineaMaxiSys + ". Podés verlos en la sección de productos.");
//         }
// };
// console.log (presupuestoTalleres);

// // FUNCION --> PARTICULARES - MODELO DE AUTO // Funciona ok 
// function modeloDeAuto(){
//     let modeloDeAuto=prompt("¿Qué marca de auto tenés? \n FORD \n VW \n TOYOTA \n RENAULT \n CHEVROLET").toUpperCase();
// switch (modeloDeAuto) {
//     case "FORD":
//         alert ("Te recomendamos scaner AP200. Podés verlo en la sección de productos");
//         break;
//     case "VW":
//         alert ("Te recomendamos el scaner VAG. Podés verlo en la sección de productos");
//         break;
//     case "TOYOTA":
//         alert ("Te recomendamos el scaner Mini VCI. Podés verlo en la sección de productos");
//         break;
//     case "RENAULT":
//         alert ("Te recomendamos el scaner ELM327. Podés verlo en la sección de productos");
//         break;
//     case "CHEVROLET":
//         alert ("Te recomendamos el scaner Op Com. Podés verlo en la sección de productos");
//         break;
//     default: 
//         alert=("Mandanos un mail desde la sección de contacto así te podemos ayudar");
//         break;
//     };
// };
// //------------------------------------------------------------------------------------------------------------

// // CICLO WHILE - TIPO DE CLIENTES // Funciona ok 

// let tipoDeCliente= prompt ("Estás buscando un equipo para: \nTaller mecánico \nVehículo particular").toUpperCase();
// while(tipoDeCliente != "Taller mecánico" && "Vehículo particular"){
//     alert ("Por favor ingresá 1 si es taller mecánico o 2 si es para un vehículo en particular");
//     tipoDeCliente =prompt ("¿1 o 2?");
//     if (tipoDeCliente == 1){
//         presupuestoTalleres();
//     } else if (tipoDeCliente == 2){
//         modeloDeAuto();
//     } else {
//         alert ("No ingresaste una respuesta válida. Por favor intentalo nuevamente");
//     }   
//     break;
// };

// let despedida= alert("Cualquier otra duda escribinos desde la sección de contacto. Estamos para ayudarte.");
