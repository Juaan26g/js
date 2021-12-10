let listap = ['dado','dedo','dodo','saco','sacro','macro','dodo']

let miMap= new Map()
listap.forEach(
    function(valor,posicion,array){

        if(miMap.has(valor)){
            miMap.set(valor,miMap.get(valor) + 1 );
        }else{
            miMap.set(valor,1)
        }
    }
)
for (let i of miMap.entries()){

    console.log(`La palabra es ${i[0]} y  se repite ${i[1]} veces`);
}
let arrayx = Array.from(miMap.keys()).join("; ")
console.log(arrayx)
///////////////////////////////////6

let valores = new Set()

let respuesta = prompt(`hola, introduce una actividad favorita`)

do{
    valores.add = respuesta.trim().toLowerCase()
}while(valores.size <5)

for (let valor of valores.values){
    console.log(valor)};
///////////////////////////////////7