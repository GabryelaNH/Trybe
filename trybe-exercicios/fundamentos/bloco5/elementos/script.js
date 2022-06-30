console.log(document.getElementById("elementoOndeVoceEsta"))
document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red"
document.getElementById("primeiroFilhoDoFilho").innerText = "dormir"
document.getElementById("pai").firstChild
document.getElementById("elementoOndeVoceEsta").parentNode.firstChild
document.getElementById("elementoOndeVoceEsta").nextSibling
document.getElementById("elementoOndeVoceEsta").nextSibling.nextSibling
document.getElementById("pai").lastElementChild.previousElementSibling


let pai = document.getElementById("pai")
let irmaoNovo = document.createElement('section')
irmaoNovo.innerText = "nasci"

pai.appendChild(irmaoNovo)

let elemento = document.getElementById("elementoOndeVoceEsta")
let filho = document.createElement('section')
filho.innerText = "novo nascimento"

elemento.appendChild(filho)

let filhao = document.getElementById("primeiroFilhoDoFilho")
let neto = document.createElement('section')
neto.className = 'neto'
neto.innerText = 'vovozao'

filhao.appendChild(neto)

document.getElementsByClassName("neto")[0].parentNode.parentNode.nextSibling.nextSibling

let paidopai = document.getElementById("paiDoPai")
let remove = document.getElementById("primeiroFilho")
let remove3 = document.getElementById("segundoEUltimoFilhoDoFilho")
let remove4 = document.getElementById("terceiroFilho")
let remove5 = document.getElementById("quartoEUltimoFilho")
paidopai.removeChild(neto)