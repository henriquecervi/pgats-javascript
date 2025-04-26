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

const nome = 'Marley'
const peso = 0

const classificadorPorteAutomatico = (peso) => {
    const porte = peso <= 10 ? 'pequeno' : 'médio'
    return porte 
}

console.log(`Nome do dog: ${nome}, peso: ${peso} e sua classificação: ${classificadorPorteAutomatico(20)}`)
