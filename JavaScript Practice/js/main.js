/*var nome="Cintia";
//alert("Olá" + nome);
//Isto é um comentário
console.log(nome);
var frase = "Eu gosto de batata";

console.log(frase.replace("batata", "sorvete"));
//alert(frase.replace("batata", "sorvete"));
//alert(frase.toUpperCase());

var lista = ["Francês","Português","Inglês"];
//alert(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.join(" - "));

var linguas = [{nome: "Francês", nivel:"Básico"}, {nome: "Inglês", nivel:"Avançado"}];

console.log(linguas);
alert(linguas.nivel);
*/

/*
var idade = prompt("Qual a sua idade?");

if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/
/*
var count = 0;

while(count < 5){
    console.log(count);
    count = count + 1; //count++;
};

for(count=0; count<=5; count++){
    alert(count);
}

var d = new Date();
alert(d.getHours());
alert(d.getMonth()+1); //começa em 0


function soma(n1,n2){
    return n1 + n2;
}

*/

function botao(){
    //alert("Obrigada por clicar");
    document.getElementById("thanks"). innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("thanks"));
}