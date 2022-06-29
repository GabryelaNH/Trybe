// 1
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
for (let nome in info) {
  console.log("bem vinda, " + [info.personagem]);
}
info.recorrente = "sim";

console.log(info);

for (let objeto in info) {
  console.log(objeto);
}

for (let valor in info) {
  console.log(info[valor]);
}

info.personagem = info.personagem + " e tio patinhas";
info.origem =
  info.origem + " , Christmas on Bear Mountain e Dell's Four Color Comics #178";
info.nota = info.nota + " e O último MacPatinhas";
info.recorrente = "Ambos recorrentes";
console.log(info);

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};
console.log(
  "O livro favorito de " +
    leitor.nome +
    " " +
    leitor.sobrenome +
    " se chama " +
    leitor.livrosFavoritos[0].titulo
);

leitor.livrosFavoritos[1] = {
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
};
console.log(leitor);

console.log(
  leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos"
);

//   2
let palavra = 'chata';
let pali = ''

function verificaPalindrome (palavra, pali) {
  for (let index = palavra.length -1; index >= 0; index -= 1) {
  pali += palavra[index]

  }
    if (palavra == pali) {
      console.log ("irra")
    } else {
    console.log("ah")
    }
  }
  return verificaPalindrome (palavra, pali)

array = [2, 3, 6, 7, 10, 1];
