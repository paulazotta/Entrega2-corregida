// ' `

// //console.log(document.getElementById("header"));
// // BY ID
// //const titulo = document.getElementById("titulo");


// // BY CLASS 
// const titulo = document.getElementsByClassName ("titulo");
// console.log(document.getElementsByClassName(titulo))
// // BY TAG NAME 
// //console.log(document.getElementsByTagName("ul"))

// titulo.innerHTML += "Todo lo necesario"


//const titulo = document.getElementsByClassName("titulo");
// console.log(document.getElementsByClassName("titulo"));

// const texto = document.createTextNode ("nuevo titulo");
// const titulo3 = document.createElement ("h3");

//console.log("Hola, ${titulo.innerHTML}")

//document.getElementsByClassName("titulo").innerHTML += "averias";

// const botonHTML = document.getElementById("btn");
// let flag = false;
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
//<img src="imagenes/wave form 8. 2.jpg" alt="Imagen de prueba">
// PRODUCTOS 
// let equiposPrueba = document.getElementById("equiposPrueba");
// equiposPrueba.innerHTML = `
// <h2>Equipos para talleres</h2>
//     <div class="div-imagenes-destacadas">
//         <img class="imagenes-destacadas" src="imagenes/MX_808.jpg" alt="Destacado 1">
//         <img class="imagenes-destacadas" src="imagenes/MS_906BT.jpg" alt="Destcado 2">
//         <img class="imagenes-destacadas" src="imagenes/MD_808Pro.jpg" alt="Destacado 3">
//     </div>
// `;