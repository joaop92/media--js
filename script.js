// aqui vou declarar minhas variaveis
let nota1, nota2, nota3;

//vou solicilitar as notas do usuario
nota1 parseFloat(prompt("digite a primeira nota:"));
nota2 parseFloat(prompt("digite a segunda nota"));
nota3 parseFloat(prompt ("digite a terceira nota"));

//vamos validar o numero de notas
if( nota3 === undefined) {
    console.log("È necessario inserir 3 notas");
} else{
    // calcular a media 
    let media = (nota1 + nota2 + nota3) / 3;

    //exibindo o resultado no console
    console.log("a media das notas é:" + media);
}