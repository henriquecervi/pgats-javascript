/*
    while (condicional)
    for (contado)
    forEach (para listas)
*/

//while
// let voltasAteFicarCansado = 5
// let quantidadeVoltasAtual = 0

// while (quantidadeVoltasAtual < voltasAteFicarCansado) {
//     console.log(`Dar uma volta na quadra.`)
//     quantidadeVoltasAtual++

// }

// for
// const quantidadeCalculada = 3
// for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
//     console.log(`Dando petisco de nº ${quantidadeDePetiscos}`)
// }   

//forEach

const listaDeAlunos = [
    'Henrique',
    'Goku',
    'Julio',
    'Lenilson',
    'Jenifer'
]

listaDeAlunos.forEach(aluno => {
    console.log(aluno)
})

const listaDeAlunosENotas = [
    {
        nome: 'Henrique',
        nota: 9
    },
    {
        nome: 'Goku',
        nota: 6
    },
    {
        nome: 'Julio',
        nota: 7
    },
    {
        nome: 'Lenilsonque',
        nota: 8
    },
    {
        nome: 'Jenifer',
        nota: 7
    }
    
]

listaDeAlunosENotas.forEach(aluno => {
    if (aluno.nota < 7) {
        console.log(`O aluno ${aluno.nome} não passou de ano`)
    }
    console.log(`O aluno ${aluno.nome} tem nota ${aluno.nota}`)
})
