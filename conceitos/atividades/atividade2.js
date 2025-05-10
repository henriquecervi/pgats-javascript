/*
Validador de nomes para as tags
    Alguns donos estão registrando os dogs com nomes mal formatados. Crie um script para limpar e padronizar os nomes.
Aplique as formatações e exiba:
    - —O nome original, como foi cadastrado
    - —O nome formatado

Extra: 
    aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é válido ou não. 
*/

const nome = " BoB  marLey  dOis tres "
const nomeOriginal = nome
const nomeFormatado = nome.trim().split(" ")[0].charAt(0).toUpperCase() + 
                      nome.trim().split(" ")[0].slice(1).toLowerCase();
const nomeValido = nomeFormatado.split(" ").length === 1 ? "Nome válido" : "Nome inválido"

console.log(`Nome original: ${nomeOriginal}`)
console.log(`Nome formatado: ${nomeFormatado}`)
console.log(nomeValido)

// trim remove os espaços em branco do início e do fim da string
// split separa a string em um array de palavras (ex linha 14, o espaço como delimitador).
// slice(1) pega a string a partir do segundo caractere.
// charAt(0) pega o caractere na posição, nesse caso o primeiro.



const nomeDog = '   Ba!ley Mari@    '

let nomeFormatadoComTrim = nomeDog.trim()
nomeFormatadoComTrim = removerCaracteresEspeciais(nomeFormatadoComTrim)
nomeFormatadoComTrim = tornarAPrimeiraLetraMaiuscula(nomeFormatadoComTrim)



const valido = verificarSeONomeEValido(nomeFormatadoComTrim)

console.log(nomeDog)
console.log(nomeFormatadoComTrim)
console.log(valido)

function removerCaracteresEspeciais(nome) {
  return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function removerEspacosEntreAPalavra(nome) {
  return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
}

function verificarSeONomeEValido(nome) { 
  return nome.split(" ").length === 1
}