/*Realiza un script que pida una fecha y
 muestre cuál será la fecha pasada 80 días desde la fecha introducida. */

let fecha = new Date('2021-10-14');
fecha.setDate(fecha.getDate() + 80);
console.log(fecha);
