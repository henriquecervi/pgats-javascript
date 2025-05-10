// funcao nomeada, com parametro, sem retorno
function exibirNomeDoDog (nome) {
  console.log(`Nome do dog: ${nome}`)
}
// funcao nomeada, com parametro, com retorno
function obterNomeDoDogFormatado (nome) {
  return nome.toUpperCase()
}

function obterObjetoDog () {
  return {
    nome: 'Marley',
    idade: 1,
    porte: 'médio'
  }
}

function listarObjetos () {
  return [{
    nome: 'Marley',
    idade: 1,
    porte: 'médio'
  },
  {
    nome: 'Rex',
    idade: 2,
    porte: 'grande'
  }]
}

function listarNomeDogs () {
  return ['Marley', 'Rex', 'Bobby']
}
