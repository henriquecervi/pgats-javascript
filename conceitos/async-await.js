/*
    quando utilizado o async, o retorno é uma promise
    async = assíncrono

    sempre que uma função for async, precisamos utilizar o await, senão teremos a promise invés do resultado.
*/

async function exibirNomeFormatado (nome) {
  return nome.toUpperCase()
}

console.log(exibirNomeFormatado('Mimosa'))

async function exibirNomeFormatadoMinusculo (nome) {
  return nome.toLowerCase()
}

console.log(await exibirNomeFormatadoMinusculo('Mimosa'))
