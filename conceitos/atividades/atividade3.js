/*
    Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida,
    por exemplo 2 anos.

    Use os operadores adequados e exiba:
    - Nome do Dog,
    - Idade,
    - Se está apto ou não para adoção.

    Extra: aplique uma regra com operador lógico para permitir que se o cão for pequeno porte,
    pode ser adotado independente da idade.

*/

const idadeMinima = 2
const dog = {
  nome: 'Marley',
  idade: 1,
  porte: 'médio'
}

const nome = 'Nome Dog'
const idade = 0
const porte = 'pequeno'

const adotar = dog.porte === 'pequeno' || dog.idade >= idadeMinima ? 'pode ser adotado' : 'não pode ser adotado'

console.log(`O dog ${dog.nome} de ${dog.idade} ano(s) e porte ${dog.porte}, ${adotar}`)

function verificarSePodeSerAdotado (idade, porte) {
  const adotar = porte === 'pequeno' ||
        idade >= idadeMinima
    ? 'pode ser adotado'
    : 'não pode ser adotado'

  console.log(`O dog ${nome} de ${idade} ano(s) e porte ${porte}, ${adotar}`)
}

verificarSePodeSerAdotado(1, 'pequeno')
verificarSePodeSerAdotado(2, 'médio')
verificarSePodeSerAdotado(3, 'grande')
verificarSePodeSerAdotado(1, 'médio')
