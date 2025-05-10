/**
 * Console API
 */

console.log('Aula Inicial JS.')
console.error('Falha na execução.')
console.warn('Atenção.')
console.table([
  {
    nome: 'Henrique',
    turma: '02',
    disciplina: 'Prog JS'
  },
  {
    nome: 'Goku',
    turma: '02',
    disciplina: 'Prog JS'
  }
])

// informações que não alteram utilizamos const
const nome = 'Marley'
const raca = 'Australian Shepherd'
const sexo = 'Macho'
const cor = 'Branco e Preto'
const dataDeNascimento = '01/12/2023'
const porte = 'Médio'

// informações que alteram utilizamos let/var
const idade = 2
const peso = 20
const vacinado = true
const castrado = false
const tamanho = 'Médio'

console.log('Aula incial')
const pet =
[
  { nome: 'Lure', idade: '2 anos' }
]
console.table(pet)

const numeroAula = '03'
const turma = '02'
const data = '05 de Abril'

console.log('Aula 03 da Turma ' + turma + ' no Sábado dia 05 de Abril')

console.log(`Aula ${numeroAula} da Turma ${turma} no Sábado dia ${data}`)

console.log(data.length)

// split - separar a string
const nomesDeAlunos = 'Giuliana André Goku Lucas Lenilson'

const nomesDeAlunosSplit = nomesDeAlunos.split(' ')

console.log(nomesDeAlunosSplit)

console.log(nomesDeAlunos.toLowerCase()) // minúsculo
console.log(nomesDeAlunos.toUpperCase()) // maiúsculo

console.log(nomesDeAlunos.includes('G'))

// Chai - biblioteca de asserções

console.log(nomesDeAlunos.replaceAll('a', 'i'))

const conceitosLogica = '            inteiro real cadeia de caracteres...           '

console.log(conceitosLogica.trim())

const dataParaCortar = '05 de Abril'
const cpf = '86189924611'

console.log(dataParaCortar.slice(0, 2))
console.log(cpf.slice(0, 3))

// 05 de Abril
// 0123456789
