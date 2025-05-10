/*
    Crie um script que receba o peso do dog em KG + estoque atual da ração em GRAMAS.
    Calcule a quantidade de ração com base na seguinte fórmula: Gramas por dia = peso x 30 gramas.

    Exiba:
        - Nome do Dog,
        - Peso do Dog,
        - Quantidade de ração recomendada por dia,
        - Quantos dias o estoque atual vai durar.
*/
const nomeDog = 'Marley'
const estoqueAtualRacao = 25000 // em GRAMAS

function calcularConsumoDeRacao (nome, peso, estoqueAtualRacao) {
  const gramasPorDia = peso * 30
  const duracaoEstoque = Math.floor(estoqueAtualRacao / gramasPorDia)

  console.log('---------------------------')
  console.log(`Nome do dog:  ${nomeDog}`)
  console.log(`Peso do dog:  ${peso} KG`)
  console.log(`Ração recomendada:  ${gramasPorDia} gramas por dia`)
  console.log(`Estoque atual:  ${estoqueAtualRacao} gramas`)
  console.log(`Estoque atual vai durar:  ${duracaoEstoque} dias`)
}

calcularConsumoDeRacao(nomeDog, 20, 25000)
