

const exibirNomeDoDog = (nome) => {
    console.log(`Nome do dog: ${nome}`)
}

const obterNomeDoDogFormatado = (nome) => {
    return nome.toUpperCase()
}

const obterObjetoDog = () => {
    return {
        nome: 'Marley',
        idade: 1,
        porte: 'médio'
    }
}

const listarObjetos = () => {
    return [{
        nome: 'Marley',
        idade: 1,
        porte: 'médio'
    },
    {
        nome: 'Rex',
        idade: 2,
        porte: 'grande'
    }]
}

const listarNomeDogs = () => {
    return ['Marley', 'Rex', 'Bobby']
}