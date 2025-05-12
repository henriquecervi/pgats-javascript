

function geradorDeTagsDeIdentificacao(nomeTag) {
    return nomeTag.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
    return porte === 'M' || idade === 1
        ? true : false
}

function calcularConsumoDeRacao(nome, idade, peso) {
    return idade * peso * 300
}

function decidirTipoDeAtividadePorPorte(porte) {
    if (porte == 'pequeno') {
        return 'brincar dentro de casa'
    } else if (porte == 'médio') {
        return 'caminhada no quarteirão'
    } else if (porte == 'grande') {
        return 'correr no parque'
    } else {
        return console.log('Porte inválido')
    }
}

async function buscarDadoAsync () {
    return 'Pipoca'
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}