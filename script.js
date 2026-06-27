
let cuenta = '';
function boton(number){
    console.log('aprete',number);
   
    cuenta += number
    
    $('#resultado').val(cuenta);
}

function calcular(){
    
    let resultado = eval(cuenta);
    $('#resultado').val(resultado);
}

function limpiar(){
    
    cuenta=0
    $('#resultado').val(0);
}