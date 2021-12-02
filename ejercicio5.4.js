let objeto= {
    nombre : function (a){ return a + 100; console.log('nombre');},
    nombre2 : function (a){ return a + 200; console.log('nombre2');},
    nombre3 : function (a){ return a + 300; console.log('nombre3');}

};
objeto.nombre3(2);
objeto.nombre2(3);
objeto.nombre(4);
