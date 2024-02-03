// setTimeout: le pasamos una función a ejecutar y el tiempo de demora.

/*
setTimeout (funcion, tiempo)
el tiempo es en milisegundos 
*/

// const PruebaTimeout = document.getElementById("PruebaTimeout");
// //<span class="loader"></span>

// const loader = document.createElement("span");
// loader.className = "loader";
// PruebaTimeout.appendChild(loader);

// setTimeout (()=>{
//     PruebaTimeout.innerHTML = "<p>Probamos de nuevo</p>"
// }, 1000);

// setInterval: le pasamos una función y el intervalo de tiempo entre ejecuciones. Se va a ejecutar infinitas veces a menos que ponga un fin. 
//Se suele poner el set interval en una constante para que después sea más fácil pararlo.

// let contador = 0;
// setInterval(() => {
//     contador ++
//     console.log(contador);
// }, 1000)


// Control de errores 

/*
TRY - CATCH - FINALLY 
Es parecido a un if else. 
TRY: "Intentá hacer esto". Intentamos realizar una tarea específica como por ejemplo pedir datos a un servidor remoto y listarlos en la pantalla.
CATCH: "Ya que no puedo hacer eso, entonces.." Si ocurre algún imprevisto, entonces atrapamos y manejamos el error de forma prolija. 
FINALLY: "Si eventualmente queremos hacer algo pase lo que pase". Aquí manejamos opciones en nuestro código, más allá de que la tarea se haya
llevado a cabo correctamente o no. (Es lo que menos se terminan utilizando).
*/


// FETCH 
/*
Se utiliza para hacer peticiones HTTP a algún servidor externo. Como estas peticiones son asincrónicas, convenientemente debemos manejar esto 
mediante una función asincrónica. 
El método recibe un parámetro que es la URL a la cual hacer la petición y un segundo parámetro opciones de configuración. 

*/

// fetch (url, config)

/*
Las promesas tienen 3 estados posibles:
pending: todavía no sabés si se va a cumplir 
full filled: completada
rejected: rechazada
*/

// fetch("https://dolarapi.com/v1/dolares/blue") // fetch utiliza la url y hace una promesa
// .then(response => response.json()) // después de resolver exitosamente la respuesta, con el json le damos formato 
// .then (data => console.log(data)); // el segundo then nos pide que mostremos la datra. (el profe después puso data.results pero a mi me da undefined)

// function dolarPrueba (precio){
//     fetch("https://dolarapi.com/v1/dolares/blue")
//     .then(response => response.json())
//     .then (data => console.log(data))
// }

// ASYNC - AWAIT
/*

Es una sintaxis de programación sincrónica a la cual le vamos a dar asincronía. 
async: es para declarar una función asíncrona. 
await: equivale a cada .then que teníamos anteriormente 
*/


// let dataBank = document.querySelector("#dataBank");

// fetch("https://dolarapi.com/v1/dolares/blue")
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data);


//     data.forEach((info) => {
//       const content = document.createElement("div");
//       content.innerHTML = `
//         <h4> el valor del dolar es ${info.venta} </h4>;
//       `;
//       dataBank.append(content);
//     });
//  } );

// let dataBank = document.querySelector("#dataBank")

// fetch("https://dolarapi.com/v1/dolares/blue")
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data.results);


//     data.results.map((item) => {
//       const content = document.createElement("div");
//       content.innerHTML = `
//         <h4> el valor del dolar es ${item.venta} </h4>;
//       `;
//       dataBank.append(content);
//     });
//  } );
  
function pruebaCarrito (){
    fetch (`./JAVASCRIPT/productos.json`)
    .then (response => response.json)
    .then (data =>{
        const productos = data.results

        productos.forEach(el, idx => {
            console.log(`${idx + 1}. ${el.modelo}`);
            const card2 = document.createElement("div");
            card2.className = "card";

            const modelo = document.createElement("h4");
            modelo.innerText = `${idx + 1}. ${el.modelo}`;

            const imagen = document.createElement("img");
            imagen.src = `${el.imagen}`;

            const btnInfo = document.createElement("boton")
            btnInfo.innerText = "capturar";
            //btnInfo.onclick = () => alert ("Capturaste un + el.modelo");
            
            card2.appendChild(modelo);
            card2.appendChild(imagen);
            card2.appendChild (btnInfo);

            container.appendChild(card)
        });
    })
}
pruebaCarrito();