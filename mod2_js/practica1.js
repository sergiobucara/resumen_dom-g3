////////////////////////////////////////////////////////////////////////////////////////////
// algoritmo para calcular la suma del salario y las comisiones de un trabajador con los datos almacenados en un Array

// const salario = new Array();
// function entrada(){    
//     salario.unshift(parseInt(prompt("Ingresa tu salario: ")));
//     let c = parseInt(prompt("Ingrese el # de comisiones: "));
//     for (i=1; i<=c; i++){
//     let n = parseInt(prompt("Ingrese el valor de la comisión: "+(i)));
//         salario[i] = n;    
//     }
//     salario.forEach(valores=>{
//         document.write(valores)        
//     });
//     return salario; 
// }

// function calcular(salario){
//     let salarioT = 0
//     let ahorro = 0.1, transporte = 0.25, alimentacion = 0.25, vivienda = 0.3, varios = 0.1;
//     salario.forEach(valor => {salarioT+=valor});
//     document.write(`El salario final del trabajador es ${salarioT}<br>`)
//     let calcAhorro = (salarioT * ahorro);
//     let calcTransporte = (salarioT * transporte);
//     let calcAlimentacion = (salarioT * alimentacion);
//     let calcVivienda = (salarioT * vivienda);
//     let calcVarios = (salarioT * varios);

//     document.write(`Valor del ahorro: ${calcAhorro} 
//     <br> Valor del transporte: ${calcTransporte} 
//     <br> Valor del alimentación: ${calcAlimentacion}
//     <br> Valor de vivienda: ${calcVivienda}
//     <br> Valor de "varios": ${calcVarios}`)

// }

////////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio de funciones js: 
// Realizar un algoritmo empleando funciones que permita ingresar el nombre del estudiante,calcule el promedio de 4 notas (valor de la nota >0 y <=5) almacenadas en un array.
// Mostrar el nombre del estudiante y el promedio obtenido  junto al siguiente mensaje: "Aprobado" con un promedio > 4, "Aceptable" con un promedio >=3 "Reprobado" con un promedio < 3

// let prom = 0, nomEstu;
// const vNotas = [];

// function InsertarMatriz(){
//     nomEstu = prompt(`Ingrese el nombre del estudiante:`)
//     for (i=0; i<4; i++){
//         let num = parseFloat(prompt(`Ingrese el valor de la nota: "+${i+1}`));
//         (num >0 && num <=5) ? vNotas.push(num) : i--;
//     }
// }

// function miPromedio(vNotas){
// let suma = 0;
// console.log("Listado de NOTAS: ")
// // for(let i = 0; i < vNotas.length;i++){       
// //     console.log("["+vNotas[i]+"]"); //OPCIONAL
// // }
// vNotas.forEach((lista,i) => {
//     console.log("Nota "+i+"["+lista+"]");
// });

// suma = vNotas.reduce((anterior, actual)=> {
//     return anterior + actual
//     }) 
// prom = (suma / vNotas.length).toFixed(2);

// console.log(`Estudiante: ${nomEstu}`);
// if (prom>4)
// {
//     console.log(`Promedio: ${prom} Estado: Aprobado`);
// }
// else if (prom>=3)
//     {
//         console.log(`Promedio: ${prom} Estado: Aceptable`);
//     }
//         else
//         {
//             console.log(`Promedio: ${prom} Estado: Reprobado`);
//         }
// }

// // ejecutamos las funciones
// InsertarMatriz();
// miPromedio(vNotas);

////////////////////////////////////////////////////////////////////////////////////////////
// mostrando contenido html por consola: 
let txt = document.getElementById("texto");
console.log(txt.innerHTML);

////////////////////////////////////////////////////////////////////////////////////////////
// Ejemplo 1: creando una lista HTML con una array
// ejemplo de funcion anidada
const opciones = ['Modulo 1', 'Modulo 2', 'Modulo 3', 'Modulo 4','coex'];


function generarListaOrdenada(vec){
    let s = '';

    function comienzo() {
        s = '<ol>';
    }
    function fin() {
        s +='</ol>';
    }       
    // ejecutar funcion comienzo    
    comienzo();
    // llenar la lista <ol>
    for (let f = 0; f < vec.length; f++) {
        s = s + '<li>' + vec[f] + '</li>';
        }
    // ejecutar funcion fin
    fin();
    return s;
}
// document.getElementById('div1').innerHTML= "hola talento coex"
document.getElementById('div1').innerHTML= generarListaOrdenada(opciones);

// Ejemplo 2: creando div HTML con una array
const numPrueba = [2,4,6,8,10,12]

// opción 1
// function Mostrar (arr){
//     for(let i = 0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// Mostrar(numPrueba);

// opción 2
//  const mtdMostrar = () =>{
//     numPrueba.forEach((valor, i) => {
//         alert("Número "+i+": ["+valor+"]")
//     });
//  }
//  mtdMostrar();

// opción 3 dom
function fnMostrarDom(Elemento, arr){
    // document.getElementById(Elemento).innerHTML = "";    
    // opción num1 con for
    // for(let i=0; i<arr.length; i++){
    //     document.getElementById(Elemento).innerHTML+= `<div> ${arr[i]}</div>`;
    // }
    // opción num2 con forEach
    arr.forEach( valor => {
        document.getElementById(Elemento).innerHTML+= `<div> ${valor}</div>`;
    });
}
fnMostrarDom("array1",numPrueba);

////////////////////////////////////////////////////////////////////////////////////////////
// componentes de formulario
// una función para capturar dos datos de caja de texto, sumarlos y mostrarlos en pantalla
// function calcular(){
//     let resul=0;
//     let numUno = document.getElementById("n1").value,
//     numDos = document.getElementById("n2").value;
//     if(numUno>0 && numDos>0){
//         resul = parseInt(numUno) + parseInt(numDos);
//     }
//     else{
//         alert("Debe ingresar 2 números");
//     }    
//     // alert(numUno);
//     // alert(numDos);
//     document.getElementById("formRes").value = resul;
// }
// Solución 1 talento johan
// / CALCULADORA
//funcion verificar
// function verificar(numV1,numV2,Elemento,resultado) {
//     if (isNaN(numV1) || isNaN(numV2)) {
//     alert(`ingrese los numeros`)
//     document.getElementById(Elemento).value="no ingreso numeros";
//     }else{
//     document.getElementById(Elemento).value=resultado
//     }
// }

// function sumar() {
//     let num1=parseInt(document.getElementById("num1").value),
//     num2=parseInt(document.getElementById("num2").value)
//     btncalculadora.addEventListener("click",function () {
//     let resulS=num1+num2;
//     verificar(num1,num2,"FormRes",resulS)
//     })
// }
// function resta() {
//     let num1=parseInt(document.getElementById("num1").value),
//     num2=parseInt(document.getElementById("num2").value)
//     btncalculadora.addEventListener("click",function () {
//     let resulR=num1-num2;
//     verificar(num1,num2,"FormRes",resulR) 
//     })
// }
// function mul() {
//     let num1=parseInt(document.getElementById("num1").value),
//     num2=parseInt(document.getElementById("num2").value)
//     btncalculadora.addEventListener("click",function () {
//     let resulM=num1*num2;
//     verificar(num1,num2,"FormRes",resulM) 
//     })
// }
// function div() {
//     let num1=parseInt(document.getElementById("num1").value),
//     num2=parseInt(document.getElementById("num2").value)
//     if (num1==0 || num2==0) {
//         alert("no se puede dividir por cero")
//     }else{
//         btncalculadora.addEventListener("click",function () {
//         let resulM=num1/num2;
//         verificar(num1,num2,"FormRes",resulM)
//         })
//     }
// }

// solución 2
// let calculadora = document.getElementById(`calculadora`);
// let result;

// function validar(num1, num2){
//     return (num1.length>=1 && num2.length>=1 )
// }
// const suma = ()=>
// {
//     let numero1 = document.getElementById(`numero1`).value;
//     let numero2 = document.getElementById(`numero2`).value;
//     (validar(numero1, numero2)) ? result = parseFloat(numero1) + parseFloat(numero2) : alert(`Espacios vacios`)
// }

// const resta = ()=>
// {
//     let numero1 = document.getElementById(`numero1`).value;
//     let numero2 = document.getElementById(`numero2`).value;
//     (validar(numero1, numero2)) ? result = parseFloat(numero1) - parseFloat(numero2) : alert(`Espacios vacios`)
// }
// const dividir = ()=>
// {
//     let numero1 = document.getElementById(`numero1`).value;
//     let numero2 = document.getElementById(`numero2`).value;
//     if (validar(numero1, numero2)) 
//     {
//         numero1 = parseFloat(numero1);
//         numero2 = parseFloat(numero2);
//         (numero2 > 0) ? result = (numero1 / numero2).toFixed(2) : alert(`El divisor debe ser diferente a 0`);
//     }
//     else alert(`Espacios vacios`);

// }
// const multiplicar = ()=>
// {
//     let numero1 = document.getElementById(`numero1`).value;
//     let numero2 = document.getElementById(`numero2`).value;
//     (validar(numero1, numero2)) ? result = parseFloat(numero1) * parseFloat(numero2) : alert(`Espacios vacios`)
// }

// const resultar = ()=>
// {
//     (isNaN(result)) ? alert(`No ha hecho ninguna operación`) : calculadora.value = result
// }

////////////////////////////////////////////////////////////////////////////////////////////
// Una de las formas más sencillas de asegurar que cierto código se va a ejecutar después de que la página se cargue por completo es utilizar el evento onload
// asignar algunas instrucciones al evento onload de la página (en este caso se ha establecido mediante el objeto window). De esta forma, para asegurar que cierto código se va a ejecutar después de que la página se haya cargado
// window.onload = function() {
//     document.querySelector("#bSuma").onclick = sumar;
//     document.querySelector("#bResta").onclick = restar;
//     document.querySelector("#bMulti").onclick = multiplicar;
// }

// //  Ejericio 2 mini calculadora
// const sumar = () =>{
//     let numUno = document.getElementById("nUno").value,
//     numDos = document.getElementById("nDos").value;
//     resul = parseInt(numUno) + parseInt(numDos);
// }
// function restar(){
//     let numUno = document.getElementById("nUno").value,
//     numDos = document.getElementById("nDos").value;
//     resul = parseInt(numUno) - parseInt(numDos);
// }
// function multiplicar(){
//     let numUno = document.getElementById("nUno").value,
//     numDos = document.getElementById("nDos").value;
//     resul = parseInt(numUno) * parseInt(numDos);
// }

// let resul;
// function calcularBotones(){   
//     document.getElementById("rta").value = resul;
// }

/////////////////////////////////////////////////////////////////////////////////////////
// ejemplo de cuenta regresiva - función
function CuentaRegre(numr){    
    alert(numr)
    let nuevoNum = numr - 1
    if(nuevoNum > 0){        
        CuentaRegre(nuevoNum)
    }
}



// ejemplo de cuenta regresiva - setTimeout
function capturarDato(){    
    let captura = 0, nuevoNum=0;
    captura = document.getElementById("numRegresiva").value
    CuentaRegresiva(captura) 

    function CuentaRegresiva(captura){
        if(captura>0){
            document.getElementById("resultado").value = captura 
            nuevoNum=document.getElementById("resultado").value
            nuevoNum--
            setTimeout(function(){
                CuentaRegresiva(nuevoNum)},1000);
            document.getElementById("resultado").value = nuevoNum            
        }
        else{
            alert(`Ingrese un Número mayor a 0`)
            document.getElementById("numRegresiva").focus()
        }
    }     
}

// NOTA: crear una función para establecer el foco al cargar la página
// window.onload = function() {
//     document.getElementById("TextBoxName").focus();
//   };

// ////////////////////////////////////////////////////////////////////////////////////////////
// ejemplo2: suma de números de 1 hasta n - recursión
// function sum(n) {
//     if (n <= 1) {
//       return n;
//     }
//     return n + sum(n - 1);
//   }

//////////////////////////////////////////////////////////////////////////////////////////////
//   Ejemplo con rest

// function suma(...valores){
//     let suma = 0
//     for(let x = 0; x < valores.length; x++){
//         suma = suma + valores[x];        
//     }
//     return suma;
// }
// document.write(suma(15,50))
// console.log(suma(15,20,50))

//   Ejemplo4 con rest
// function Caballero(x , y ,z){
//     return x + y + z
// }

// let val = [10,20,30]
// let rta = Caballero(...val)

// function Caballero(n1,...cab){
//     return n1 + cab.reduce()
// }

// let val = [10,20,30]
// let rta = Caballero(40,...val)


////////////////////////////////////////////////////////////////////////////////////////////
// FORMS & EVENTS

// ejercicio 4 - evento dobleclic ondblclick
let contador = 0
function incrementar(){    
    contador++
    alert(`El contador ahora vale: ${contador}`)
}

// getelementByclassName
// let paras = document.getElementsByTagName("h3");
// console.log(paras);
// let backc = document.querySelector(".section-container")
// console.log(backc)


//////////////////////////////////////////////////////////////////////////////////////////
// Event mouse OnClick - Manejo de DOM
// Ejemplo 1 botón

// <button id="btn">Oprime Aquí!</button> //HTML
{/* <button id="btn" onclick="console.log('clicked')">Click Me!</button> //forma:1 */}

// let btn = document.querySelector('#btnEvento'); //forma:2 - mejor practica
// btn.addEventListener('click',(event) => {
//     console.log('Oprimido!');
// });

// forma:3 directamente al id
// btnEvento.addEventListener('click',(event) => {
//     alert('Oprimido!');
//     document.getElementById("impresion").innerHTML = "Me dio un clic!";
// });

//objeto.click = function(){script}
// btn.onclick = (event) => { //forma:4
//     console.log('Oprimido!');
//     document.getElementById("impresion").innerHTML = "Me dio un clic!";
// }; 

// function HaciendoClic() {
// document.getElementById("impresion").innerHTML = "Me dio un clic!";
// }


// function HaciendoClic() {
//     document.getElementById("impresion").innerHTML = "Me dio un clic!";
// }

// ////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 5 - capturar datos de input components
function mostrar(){
    let nom = document.getElementById("nombre").value
    let ed = document.getElementById("edad").value
    document.getElementById("resNom").value = nom
    document.getElementById("resEdad").value = ed
}
// ////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 6 - validar tamaño de caracteres / password field
// function verificar(){
//     let clave = document.getElementById('clave').value;
//     if(clave.length < 5){
//         alert('Clave con menos de 5 carácteres !!!')
//     }else{
//         alert('Tamaño clave correcta!!!')
//     }
// }

// let btn1 =  document.querySelector("#btnPss");
// btn1.addEventListener('click',verificar);

// ////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 7 - select
let slcBox = document.getElementById('select1');

function cambiarColor(){
    document.getElementById('text1').value = slcBox.selectedIndex;
    document.getElementById('text2').value = slcBox.options[slcBox.selectedIndex].text;
    document.getElementById('text3').value = slcBox.options[slcBox.selectedIndex].value;
    let valuecolor=  slcBox.options[slcBox.selectedIndex].value;
    document.getElementById('valueColor').value = ("#"+valuecolor);
}

slcBox.addEventListener('change',cambiarColor);


// ////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 8 - checkbox

function alertaCheck(checkItem){
    if(checkItem.checked){
        document.getElementById("txtImpresion").innerHTML = "Check Seleccionado!";
    }else{
        document.getElementById("txtImpresion").innerHTML = "Check No Seleccionado!";
    }
}

// ejemplo 2 - contar los check seleccionados
 function contarSeleccionados(){
    let cant = 0
    for(let i = 1; i < 6; i++){
        if(document.getElementById("chk"+i).checked){
            cant++
        }
    }
    alert(`Conoce ${cant} Lenguajes`)
 }

 let btn2 = document.getElementById("btnChk");
 btn2.addEventListener('click', contarSeleccionados);

// ////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 9 Text area - tamaño de caracteres

const fnControlaCaracteres = () =>{
    let tamTxtarea = document.getElementById('description');
    if(tamTxtarea.value.length == 0){
        alert('Campo de texto vacío');
    }else if(tamTxtarea.value.length > 50){
        alert('Texto debe ser de 50max');
    }else{
        alert('Tamaño de texto correcto')

    }
}
// function controlarCaracteres(){
//     if(document.getElementById('description').value.length <=0){
//         alert('Campo de texto vacío');
//     }
//     else if(document.getElementById('description').value.length > 50){
//         alert('Texto debe ser de 200max');
//     }else{
//         alert('Tamaño de texto correcto')
//     }
// }
let btn3 = document.getElementById('btnTextArea');
btn3.addEventListener('click',fnControlaCaracteres);

// ////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 10 Expresiones regulares - validación tipo caracteres
let patronLetra = /^[a-zA-Z]/;
let patronVocal = /[aeiouAEIOUáéíóú]/;
let texto1 = '--> Texto contiene Letra y contiene una vocal';
let texto2 = '--> Texto NO contiene Letra o NO contiene una vocal';

function validarLetras(){   
let palabra = document.getElementById('txtCar').value;
    if(patronLetra.test(palabra) && patronVocal.test(palabra)){
        // alert('--> Texto contiene Letra y contiene una vocal');
        document.getElementById("rtaRegular").innerHTML=texto1;
    }else{
        // alert('--> Texto NO contiene Letra o NO contiene una vocal');
        document.getElementById("rtaRegular").innerHTML=texto2;
    }
}

let btn4 = document.getElementById('btnRegular');
btn4.addEventListener('click', validarLetras);

// Ejemplo 2 - Letra+Vocal+número+longitud
// let patronLetras = /[a-zA-Z][aeiouAEIOUáéíóú]/;
// validación sólo tipo alfanumericos:
let patronLetras= /^[a-zA-Z0-9]*$/;
let patronNumeros = /[0-9]{1}/;
let texto3 = '--> Correcto!';
let texto4 = '--> Texto debe contener 6 caracteres: Letras/Vocales/Números';

function validarCajaTexto(){   
let entradaReg = document.getElementById('txtReg').value;
    if(patronLetras.test(entradaReg) && patronNumeros.test(entradaReg) && entradaReg.length>5){
        // alert('--> Texto contiene Letra y contiene una vocal');
        document.getElementById("rtaRegular2").innerHTML=texto3;
    }else{
        // alert('--> Texto NO contiene Letra o NO contiene una vocal');
        document.getElementById("rtaRegular2").innerHTML=texto4;
    }
}

let btn5 = document.getElementById('btnRegular2');
btn5.addEventListener('click', validarCajaTexto);

// Ejemplo 3 - número telefonico 607-6303030
// let patronTel = /^[607]{3}\d{7}$/;
let patronTel = /^607\d{7}$/;
let texto5 = '--> Número debe iniciar 607 y contener 10 digitos';

function validarTelefono(){   
let entradaTel = document.getElementById('txtNumber').value;
    if(patronTel.test(entradaTel)){
        document.getElementById("rtaRegular3").innerHTML=texto3;
    }else{
        document.getElementById("rtaRegular3").innerHTML=texto5;
    }
}

let btn6 = document.getElementById('btnRegular3');
btn6.addEventListener('click', validarTelefono);
// validación para entrada de números decimales: /^[0-9]+\.?[0-9]*$/
// comprobar si una cadena es un número escribiremos: /^\d$/

// ////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 11 - Keypress

// El siguiente ejemplo muestra una alerta en pantalla cada vez que ingreso un caracter en la caja de texto
let teclaPres = document.getElementById("text");
let resultado = document.getElementById("rtaTeclado");

// teclaPres.addEventListener("keypress", function(){
//     alert("Tecleado");
// })

// Ejemplo 2: El siguiente ejemplo muestra el código del carácter que ingreso en la caja de texto
// teclaPres.addEventListener("keypress", function(evento){
//     document.getElementById("rtaTeclado").innerHTML=evento.keyCode;
// })


// Ejemplo 3: El siguiente ejemplo muestra el texto escrito en el input:text en la etiqueta div al presionar la tecla ENTER (consultar keycode list)
window.addEventListener("keypress", function(evento){
    if(evento.keyCode == 13){
        resultado.innerHTML = teclaPres.value
    }
})

// Ejemplo 4: mostrar caracteres disponibles (keyUp)
const fnCaracteres = ()=>{
    let cantidadCar = document.getElementById("tamText").value.length;
    let disponibles = 50 -parseInt(cantidadCar);
    document.getElementById("cantidad").innerHTML = disponibles;
}

document.getElementById("tamText").addEventListener("keyup",fnCaracteres);

// ////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 12. crear nodos

// mostrando ejemplo de los apuntes .doc
// function fnAgregarLista(){
//     const node = document.createElement('li');
//     const nuevoTexto= document.createTextNode("water");
//     node.appendChild(nuevoTexto);
//     document.getElementById("myList").appendChild(node)
// }

// let cualquiernombre= document.getElementById("btnadd");
// cualquiernombre.addEventListener('click',fnAgregarLista);
//////////////////////////////////////////////////
const nuevoElemento = document.createElement("p");

// creamos un nodo de texto
// let inputText = prompt("Ingrese el texto: ")
const nuevoTexto = document.createTextNode("Insertando nuevo texto - coex")
// opción 1
const nuevoNodo = nuevoElemento.appendChild(nuevoTexto)
// opción 2
// nuevoElemento.appendChild(nuevoTexto)

//crear un nuevo nodo
function fnCrear(){
    // document.getElementById("nuevoTexto").appendChild(nuevoElemento);
    let contenedor = document.getElementById("nuevoTexto");
    contenedor.appendChild(nuevoNodo);
}

function fnCopiar(){
    let copiarNodo = document.getElementById("nuevoTexto");
    copia = copiarNodo.cloneNode(true);
    document.getElementById("copia").appendChild(copia);
}

function fnEliminar(){
    let eliminarNodo = document.getElementById("nuevoTexto");
    eliminarNodo.parentNode.removeChild(eliminarNodo);
}

let btn7 = document.getElementById('btnCrear');
btn7.addEventListener('click', fnCrear);

let btn8 = document.getElementById('btnEliminar');
btn8.addEventListener('click', fnEliminar);

let btn9 = document.getElementById('btnCopiar');
btn9.addEventListener('click', fnCopiar);


// ////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 13. Manipulación de imágenes
// console.log(document.images); //IMPRIMIR NÚMERO DE IMÁGENES
const imgUno = document.querySelector("#imgU");
const imgDos = document.querySelector("#imgD");
const imgTres = document.querySelector("#imgT");
const imgCuatro = document.querySelector("#imgC");

function muestra(num) {
    let imagen = document.images[num].src
    let grande = document.images["pantalla"]
    grande.src = imagen
}

imgUno.addEventListener("click",()=> muestra('primera'));
imgDos.addEventListener("click",()=> muestra(2));
imgTres.addEventListener("click",()=> muestra(3));
imgCuatro.addEventListener("click",()=> muestra(4));


// ////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 14. Crear una lista de elementos
let listaElementos = document.querySelector("#elementos");

// mostrar un elemento de la lista en particular
// console.log(listaElementos.children[2]);
// listaElementos.children[2].style.backgroundColor = "green";

//--Enviar el evento submit
let form = document.querySelector("#frmLista");
form.addEventListener("submit", fnAgregarElemento);
//--Enviar Eliminar evento
listaElementos.addEventListener("click", fnEliminarElemento);

// Listado de funciones
function fnAgregarElemento(evento){
    evento.preventDefault();
    // capturar el valor de la caja de texto
    let newElement = document.getElementById("txtElemento").value;
//    
    // crear un nuevo elemento de lista li
    let li = document.createElement("li");
    // crear un nuevo elemento de botón
    let btnDelete = document.createElement("button");
//    
    // agregar elementos a las clases
    li.className = "list-group-item";
    btnDelete.className = "btn btn-light btn-outline-danger btn-sm float-end delete"

    // agregar el nodo de textoNode    
    li.appendChild(document.createTextNode(newElement));
    btnDelete.appendChild(document.createTextNode("X"));

    listaElementos.appendChild(li);
    li.appendChild(btnDelete);
}

function fnEliminarElemento(evento){
    // comprobar los elementos de la clase 'delete'
    if(evento.target.classList.contains("delete")){
        // mostrar en pantalla mensaje de confirmación
        if(confirm("¿Seguro de eliminar Elemento?")){
            let li = evento.target.parentElement;
            listaElementos.removeChild(li);
        }
    }

}