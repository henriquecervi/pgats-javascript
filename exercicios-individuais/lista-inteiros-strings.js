/*
    Crie uma função que pega uma lista de inteiro e strings 
    e retorna uma nova lista sem as strings.
*/

function removeStrings(lista) {
    return lista.filter(item => typeof item === 'number')
}

let intEString = [1, 2, '3', 4, '5', 6, '7', 8, 9, '10', 'teste']

console.log('\nLista de Inteiros e Strings: ', intEString)
console.log('----------------------------\n')

let listaSemString = removeStrings(intEString)
console.log('Lista formatada apenas com Inteiros:',listaSemString, '\n')

