function calculador(valor1, valor2, operacion) {
    var resultado = 0;
    
    if (operacion === 'suma') {
        resultado = valor1 + valor2;
    } else if (operacion === 'resta') {
        resultado = valor1 - valor2;
    } else if (operacion === 'multipli') {
        resultado = valor1 * valor2;
    } else if (operacion === 'division') {
        resultado = valor1 / valor2;
    }
   
    console.log('Resultado', resultado);
    return resultado;
}
var v1 = parseInt(prompt('Valor1?'));
var v2 = parseInt(prompt('Valor2?'));
var operacion = prompt('Operacion? (suma || resta || multipli || division)');

calculador(v1, v2, operacion);





