/*
    Retorne o número de vogais no texto fornecido.
    Consideramos a, e, i, o e u como vogais para este Kata.
    O texto de entrada conterá apenas letras minúsculas e/ou espaços.
    Letras acentuadas não fazem parte desse desafio.
*/

const vogais = ['a', 'e', 'i', 'o', 'u']

const texto = 'Quantas Vogais temos aquI aaaaa@@@@?áAAAA'

const textoFormatado = texto.slice(0, texto.length).toLowerCase()

function contarVogais(texto) {
    let contador = 0
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contador++
        }
    }
    return contador
}

console.log(contarVogais(textoFormatado))