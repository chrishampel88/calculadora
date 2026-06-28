
let cuenta = '';
function boton(number){
    const operadores = ['+', '-', 'x', '/'];
    const ultimo = cuenta[cuenta.length - 1];
    
    if ( operadores.includes(number) && operadores.includes(ultimo)) {
        return;
    }
      cuenta += number;
    $('#resultado').val(cuenta);
}

function calcular(){
    
    let resultado = eval(cuenta);
    $('#resultado').val(resultado);
    cuenta=resultado
}

function limpiar(){
    
    cuenta=0
    $('#resultado').val(0);
}