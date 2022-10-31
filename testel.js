var numero = 10;
var resultado;

opcao = '+'

switch(opcao){

    case '*':
        resultado = numero * numero;
        break;
    case '+':
        resultado = numero + numero;
        break;
    default:
        console.log("Opção inválida")
        break;
}

console.log(resultado)