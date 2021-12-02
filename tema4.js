//Crea un bucle infinito. ¿Qué sucede en el navegador?
while (true){console.log("hola")} //según el navegador o lo ejecuta y se acaba quedando pillado o dice que global no está definida



// Crea un bucle que imprima la serie 2^n, donde n va desde 0 hasta 64. Hazlo con un bucle for y con un while.

for(let i=0n;i<=64;i++){
    console.log(2n**i);
}
let i = 0n
while ( i <=64){
    i++;
    console.log(2n**i);
}


//Crea un array y recorre cada posición e imprime su contenido con console.log


let myArray = ["perro","gato","zorro","mapache","salamandra","boa","leopardo"]

for (let i = 0; i < myArray.length ; i++){console.log(myArray[i]);}

//Crea un objeto y recorre cada atributo imprimiendo por consola el nombre de la propiedad y su valor.

let myObjeto = { nombre:'Juan Carlos',
                 nombre2:'Alma Marcela Gozo',
                     nombre3:'Unam Amadita Porfavor'}

Object.entries(myObjeto).forEach((atr_valor, posicion, array) => {
    console.log(atr_valor);
})





  //  Escribir un programa que pida al usuario un número entero y muestre por pantalla un
//  triángulo rectángulo como el de más abajo, de altura el número introducido.

let number = window.prompt('introduce un numero entero');
let triangle = '';



for (let i =0 ; i <= number ; i++){

    triangle += '*';
    console.log(triangle);
}



//Transforma el siguiente bucle for en uno while
/*let respuesta = 'LISBOA';
let acierto = false;
for (let contador = 0; contador < 3 && acierto === false; contador++) {
    let respUsuario = prompt('Capital de Portugal: ');
    if (respUsuario.toUpperCase() === respuesta) {
        acierto = true;
        document.write('Enhorabuena, has acertado');
    }
}
if (!acierto) {
    document.write('Lo sentimos, has consumido tus 3 intentos');
}
*/
let respuesta = 'LISBOA';
let acierto = false;
let contador = 0;
while (contador <3 && acierto == false){

    let respUsuario = prompt('Capital de Portugal: ');
    if (respUsuario.toUpperCase() === respuesta) {
        acierto = true;
        console.log('Enhorabuena, has acertado');
    }
    contador++
}
if (!acierto) {
    console.log('Lo sentimos, has consumido tus 3 intentos');
}

//Crea un programa que muestre por pantalla las tablas de verdad de la operación lógica AND, OR, y NOT.


let cuerpo = document.querySelector('body');
cuerpo.style.backgroundColor = 'FFFF99'

let plantilla = `
<table style='border: solid black 1px'>
<tr><th colspan='3'>TABLA AND</th></tr>
<tr><td>IN_1</td><td>IN_0</td><td>OUT</td></tr>
<tr><td>0</td><td>0</td><td>0</td></tr>
<tr><td>0</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>0</td><td>0</td></tr>
<tr><td>1</td><td>1</td><td>1</td></tr>
</table>
`;
document.querySelector('#daw').innerHTML = plantilla;

//A continuación se muestra una base de datos de MongoDB, recorre cada posición e imprime la propiedad “product_name”;

let arrayObjetos =[{
    "_id": {
        "$oid": "5968dd23fc13ae04d9000001"
    },
    "product_name": "sildenafil citrate",
    "supplier": "Wisozk Inc",
    "quantity": 261,
    "unit_cost": "$10.47"
}, {
    "_id": {
        "$oid": "5968dd23fc13ae04d9000002"
    },
    "product_name": "Mountain Juniperus ashei",
    "supplier": "Keebler-Hilpert",
    "quantity": 292,
    "unit_cost": "$8.74"
}, {
    "_id": {
        "$oid": "5968dd23fc13ae04d9000003"
    },
    "product_name": "Dextromathorphan HBr",
    "supplier": "Schmitt-Weissnat",
    "quantity": 211,
    "unit_cost": "$20.53"
}]

for (let i =0; i<=arrayObjetos.length;i++){
    console.log(arrayObjetos[i].product_name);

}
//Dado los siguientes colores modifica el fondo del body html para que
// tenga el color yellow_daw leyendo la propiedad del objeto JSON que deberás crear.
