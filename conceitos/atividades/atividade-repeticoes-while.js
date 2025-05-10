/*
    Contador de satisfação de passeio

    Crie um script que avise quando o Pet já passeou o suficiente. Para saber, vamos considerar que
    ele se sentirá satisfeito a partir de 5 voltas na quadra.

    Use a estrutura de repetição while.

    Exbiba:
    - Qual o número da volta atual;
    - Quando o Pet estiver satisfeito;

    Extra: transforma a lógica em uma função (da forma que conseguir).

*/

function verificarSeOPetCansou () {
  const voltasParaOPetFicarSatisfeito = 5
  let quantidadeVoltasAtual = 1

  while (quantidadeVoltasAtual <= voltasParaOPetFicarSatisfeito) {
    console.log(`Pet já fez ${quantidadeVoltasAtual} volta(s) na quadra.`)
    quantidadeVoltasAtual++
  }

  console.log('O Pet já passeou o suficiente!')
}

verificarSeOPetCansou()
