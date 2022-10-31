var idade = 12
var maior;

//Operador ternário que atribui o valor "true" para a variavel "maior" caso a idade seja maior ou igual a 18anos, caso seja menor, atribui "falso"
maior = (idade >= 18? true : false)
console.log(maior)

//Operador ternário que escreve "Pode dirigir" para o caso da variável maior ter o valor "true" e escreve "Não pode dirigir" caso seja "false"
maior ? console.log("Pode dirigir") : console.log("Não pode dirigir")

//Consicional "if/else" que escreve "Pode dirigir" para o caso da variável maior ter o valor "true e escreve "Não pode dirigir" caso seja "false"
//comparação implícita se o valor da variável for "maior" é "true"
if (maior){console.log("Pode dirigir")}else{console.log("Não dirigir")}