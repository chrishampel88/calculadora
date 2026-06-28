
let cuenta = '';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn1').forEach((btn) => {
        btn.addEventListener('click', function () {
            this.classList.remove('btn-pressed');
            void this.offsetWidth;
            this.classList.add('btn-pressed');

            setTimeout(() => {
                this.classList.remove('btn-pressed');
            }, 80);
        });
    });
});

function boton(number){
    const operadores = ['+', '-', 'x', '/'];
    const ultimo = cuenta[cuenta.length - 1];
    
    if ( operadores.includes(number) && operadores.includes(ultimo)) {
        return;
    }
      cuenta += number;
    $('#resultado').val(cuenta);


}
let resultado='';
function calcular(){
    
    resultado = eval(cuenta);
    $('#resultado').val(resultado);
    cuenta=resultado;
}

function limpiar(){
    cuenta=0;
    resultado='';
    $('#resultado').val(0);
}