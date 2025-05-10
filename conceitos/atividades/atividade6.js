/*
Plano de atividades para o Pet

    Crie um script que defina o plano de atividades para os dogs durante a estadia.
    O script vai receber o porte (pequeno, médio ou grande);
    e o tempo disponível para a atividade representado em minutos. Exemplo:

        Pantera - Médio - 45

    Use uma condicional para decidir o tipo de atividade com base no porte:
        - pequeno -> brincar dentro de casa
        - médio -> caminhada no quarteirão
        - grande -> correr no parque
        - qualquer outro -> porte inválido

    Depois, uma condicional para ajustar a mensagem de acordo com o tempo:
        - menor que 15 -> "atividade rápida: [atividade]"
        - de 15 a 30 -> "tempo ideal: [atividade]"
        - acima de 30 -> "hora da diversão: [atividade]
*/

// Exemplo de uso:
const planoDeAtividadesPet = (nome, porte, minutosAtividade) => {
  if (porte == 'pequeno') {
    atividade = 'brincar dentro de casa'
  } else if (porte == 'médio') {
    atividade = 'caminhada no quarteirão'
  } else if (porte == 'grande') {
    atividade = 'correr no parque'
  } else {
    return console.log('Porte inválido')
  }

  let mensagem

  if (minutosAtividade < 15) {
    mensagem = `Atividade rápida: [${atividade}]`
  } else if (minutosAtividade <= 30) {
    mensagem = `Tempo ideal: [${atividade}]`
  } else if (minutosAtividade > 30) {
    mensagem = `Hora da diversão: [${atividade}]`
  }

  console.log(`Nome do Pet: ${nome}`)
  console.log(`Porte: ${porte}`)
  console.log(`${mensagem}`)
  console.log('---------------')
}

planoDeAtividadesPet('Marley', 'médio', 20)
planoDeAtividadesPet('Neguinha', 'pequeno', 10)
planoDeAtividadesPet('Dog', 'grande', 45)
planoDeAtividadesPet('Erro', 'XPTO', 10)

// const nome = 'Pantera'
// const porte = 'médio'
// const tempo = 45

// let atividade

// switch (porte) {
//     case 'pequeno':
//         atividade = 'brincar dentro de casa'
//         break
//     case 'médio':
//         atividade = 'caminhada no quarteirão'
//         break
//     case 'grande':
//         atividade = 'correr no parque'
//         break
//     default:
//         console.log('Porte inválido')
// }

// let mensagem

// if (tempo < 15) {
//     mensagem = 'Atividade rápida:'
// } else if (tempo <= 30) {
//     mensagem = 'Tempo ideal:'
// } else if (tempo > 30) {
//     mensagem = 'Hora da diversão:'
// }

// console.log(`${mensagem}: [${atividade}]`)
