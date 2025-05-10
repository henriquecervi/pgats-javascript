/*
    Sintaxe CommonJs:
        module.exports = {} / require('')

    ESM - Ecmascript Standard Modules
        export {} / import

*/

function exibirNomePet (nomePet) {
  console.log(`O nome do pet é: ${nomePet}`)
}

exibirNomePet('Export')

export {
  exibirNomePet
}
