/*Se necesitan sumar los números del 1 a n, donde n es un número que le pedimos al usuario.*/
var n = document.getElementById("sumar")
var totalSuma = document.getElementById("total")
var total = 0

function imprimirNumeros(){
    for(i = 1; i <= n.value; i++){
        total = total+i
        console.log(total)
    }
    totalSuma.lastElementChild.innerHTML = `<span class="text-danger"> ${total} </span>` 
    console.log(total)
}
//Se necesita validar si un número ingresado por el usuario es par o impar.
var numero = document.getElementById("parImpar")
var par = document.getElementById("par")

function parImpar(){
    if(numero.value%2 == 0){
        console.log("Es par")
        par.lastElementChild.innerHTML = `<span class="text-danger"> Es par </span>` 
    }else{
        par.lastElementChild.innerHTML = `<span class="text-danger"> Es impar </span>` 
        console.log("Es impar")
    }
}
/*La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si reciben o no un premio por parte del negocio, se tienen las siguientes validaciones:
Si es un niño menor a 10 años, debe ir a reclamar un jugo.
Si es una persona mayor de edad (18 años) debe ir a reclamar una cerveza. 
Y si es una mujer, debe reclamar adicionalmente una porción de pizza Hawaiana.
O si es un hombre debe reclamar adicionalmente una porción de pizza tres carnes.
Si no cumple ninguna de las condiciones, se le debe informar que desafortunadamente, no recibe ningún premio.*/

var edad = document.getElementById("edad")
var genero = document.getElementById("genero")
var pepito = document.getElementById("pepito")

function premio(){
    if(edad.value < 10 && genero.value === '2'){
        console.log("Reclama un jugo")
        pepito.lastElementChild.innerHTML = `<span class="text-danger"> Reclama una jugo </span>`
    }else if(edad.value >= 18 && genero.value === '1'){
        console.log("Reclama una cerveza y una porción de pizza Hawaiana")
        pepito.lastElementChild.innerHTML = `<span class="text-danger"> Reclama una cerveza y una porción de pizza Hawaiana </span>`
    }else if(edad.value >= 18 && genero.value === '2'){
        console.log("Reclama una cerveza y una porción de pizza tres carnes")
        pepito.lastElementChild.innerHTML = `<span class="text-danger"> Reclama una cerveza y una porción de pizza tres carnes </span>`
    }else{
        console.log("No hay premio")
        pepito.lastElementChild.innerHTML = `<span class="text-danger"> No hay premio </span>`
    }
}
//Se necesita crear un menú de opciones, donde la persona escriba que quiere de comer, 
//se le vaya sumando el valor a lo seleccionado hasta que el usuario escriba pagar, 
//Una vez termine de comprar, se le debe mostrar el valor que debe pagar. (El menú y precios lo decide el  programado@r.)
var menu = document.getElementById("menu")
var agregar = 0

function agregar_producto(){
    var total_productos = ''
    if(localStorage.getItem("contador") != null){

    }
}

//Se le debe pedir al usuario un número y mostrar la tabla de multiplicar de ese número, 
//adicionalmente, se debe mostrar el total de las multiplicaciones.
var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var multi = document.getElementById("multiplicar")
var contador = 0

function multiplicar(){
    for(i=1; i<=num2.value; i++){
        multi.lastElementChild.innerHTML += `<span class="text-danger"> ${num1.value}x${i} = ${num1.value*i} </span><br>`
        console.log(num1.value*i)
    }
}
//Validar cual es el valor de matrícula (1’000.000) que debe pagar un estudiante, 
//teniendo en cuenta que:
//Si el promedio fue menor a 3 no se le descuenta nada.
//Cuando el promedio sea entre 3 y 4 se le descuenta el 5%
//Cuando el promedio sea mayor que 4, se le descuenta 50%
var nota1 = Math.random() * 5
var nota2 = Math.random() * 5
var nota3 = Math.random() * 5
var nota4 = Math.random() * 5
var descuento = document.getElementById("descuento")
var matricula = 1000000
var desc = 0



function promediar(){
    var promedio = (nota1+ nota2 + nota3 + nota4) / 4
    console.log(nota1.toFixed(2))
    console.log(nota2.toFixed(2))
    console.log(nota3.toFixed(2))
    console.log(nota4.toFixed(2))
    console.log("El promedio es " + promedio.toFixed(2))
    descuento.lastElementChild.innerHTML = `Notas: ${nota1.toFixed(2)} ${nota2.toFixed(2)} ${nota3.toFixed(2)} ${nota4.toFixed(2)}`
    if(promedio < 3){
        console.log("No Aplica descuento")
        descuento.lastElementChild.innerHTML += `<br><span class="text-danger"> No Aplica descuento </span>`
    }else if(promedio >3 || promedio < 4){   
        desc = matricula*(5/100)
        descuento.lastElementChild.innerHTML += `<br><span class="text-danger">Aplica descuento del 5%</span>`
        console.log("Aplica descuento del 5%")
    }else{
        desc = matricula*(50/100)
        descuento.lastElementChild.innerHTML += `,<br><span class="text-danger">Aplica descuento del 50%</span>`
        console.log("Aplica descuento del 50%")
    }
}

