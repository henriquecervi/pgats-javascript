/*
    Controle de Petiscos

    Crie um script que receba uma quantidade de petiscos e dê 1 por vez até o dog estiver satisfeito.

    Use a estrutura de repetição for contado.

    Exiba:
    - Cada vez que um petisco for entregue;
    - Quando o pet estiver satisfeito (que é quando terminar os petiscos).

    Extra: transforme a lógica em uma função (da forma que conseguir).

*/

function darPetisco(petiscosEntregues) {

    for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= petiscosEntregues; quantidadeDePetiscos++) {
        console.log(`Dando petisco de nº ${quantidadeDePetiscos}`)
    }
    console.log(`O Pet já comeu todos os petiscos!`)
}

darPetisco(3)