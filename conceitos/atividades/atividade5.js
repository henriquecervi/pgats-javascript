/*
Classificador de porte automático
    Muitos tutores não fazem ideia do porte de seu Dog.
    Crie um script que classifique o porte com base no peso de forma simplificada, sendo:
    
        Até 10KG = P, Acima disse Médio

    Use o operador ternário para determinar o porte. Exiba:
        Nome,
        Peso,
        Porte classificado.

    Extra: Transforme a lógica em uma função (da forma que conseguir).
*/

// const nome = 'Marley'


// function classificadorPorteAutomatico (nome, peso) {
//     const porte = peso <= 10 ? 'pequeno' : 'médio'

//     console.log(`Nome do dog: ${nome}`)
//     console.log(`Peso: ${peso}`)
//     console.log(`Porte: ${porte}`)
// }

// classificadorPorteAutomatico(nome, 10)



// outra forma

function classificarPorPorte(nome, peso) {
    const porte = peso <= 10 ? 'pequeno' : 'médio'

    console.log(`-----------`)
    console.log(`Nome do dog: ${nome}`)
    console.log(`Peso: ${peso}`)
    console.log(`Porte: ${porte}`)
    console.log(`-----------`)
}

classificarPorPorte('Marley', 10)
classificarPorPorte('Rex', 20)
