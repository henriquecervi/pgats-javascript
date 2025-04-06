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