//window.alert("Olá mundo")

//BOM = Browser Object Model
// Window -> frame[], history, location, navigator, screen, document(DOM)
//DOM = Document Object Model (Para acessar o HTML)
// document -> anchors[], applets[], areas[], embeds[]
//           -> forms[], image[], layers[],links[]

//window.console.log("Eu sou o console")

/*window.console.log(
    window.document.getElementById("titulo").innerHTML
)

//window pode omitir
console.log(
    window.screen.width
)*/

window.console.log(
    //screen.orientation.angle
    //navigator.appVersion
    //location.href = "http://www.google.com"
)

/*function voltar() {
    history.back()
}

function adiantar() {
    history.forward()
}*/

//alert(screen.width)

//GET ELEMENT BY ID AND CLASS

//document.getElementById("largura").innerHTML = screen.width

/*console.log(
    document.getElementById("fruta").innerHTML
)*/

/*console.log(
    document.getElementsByClassName("carro")
    //document.getElementsByClassName("carro")[1].innerHTML
)*/

//GET ELEMENT BY TAGNAME
/*console.log(
    document.getElementsByTagName("div")
)*/


//GET SELECTOR
/*console.log(
    document.querySelector(".div2") //Retorna a primeira ocorrência
)

console.log(
    document.querySelectorAll(".times")
)

console.log(
    document.getElementById("futebol-europeu").querySelectorAll(".times")
)*/


//INNERHTML STYLE E ATRIBUTOS

/*console.log(
    document.getElementById("p1").innerHTML
)

document.getElementById("p1").innerHTML = "Novo conteúdo"*/

/*var paragrafo = document.getElementById("p1")
paragrafo.innerHTML = "Novo conteúdo"

paragrafo.style.color = "red"
paragrafo.style.backgroundColor = "#333"
paragrafo.style.height = "300px"
*/

/*var imagem = document.getElementById("imagem")
imagem.src = "img/banner.jpg"
imagem.alt = "teste de imagem"
imagem.width = "30"
*/

//CREATE ELEMENT
/*console.log(
    document.createElement("div")
)*/

/*var imagem = document.createElement("img")
imagem.src = "img/banner.jpg"

var paragrafo = document.createElement("p")
paragrafo.innerHTML = "olá pessoal"

console.log(
    imagem, paragrafo
)*/

/*var p = document.createElement("p")
p.innerHTML = "Olá pessoas"

var img = document.createElement("img")
img.src = "img/banner.jpg"

document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)

document.getElementById("conteudo").removeChild(img)*/

//CHILD NODES

//console.log(
//    document.documentElement.lastChild
//)

//CREATE TEXT NODE E TEXT CONTENT

/*var titulo = document.querySelector("h1")
var texto = document.createTextNode("Um texto qualquer")

titulo.appendChild(texto)

titulo.textContent = "Um novo texto"*/

//CHILDREN E INSERT BEFORE

/*var lista = document.getElementsByTagName("ul")[0]
var itens = lista.children
console.log(itens)*/

//TIPO DE DADOS

//string
var nome = "Cintia Braz"

//number
var idade = 21

//boolear
var solteira = true

//array
var frutas = ["banana", "coco"]

//object
var carro = new Object()
carro.fabricacao = "2025"
carro.cor = "azul"

//function
var soma = function(a,b) {return a+b}

alert(typeof(nome))

//Variaveis
//escopo global, escopo local
//var (escopo global), let (dentro do bloco), const
