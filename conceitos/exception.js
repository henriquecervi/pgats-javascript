/*
    tentar {
        // conexao com banco (exemplo)
    } pegar (erro/excecao) {
        // salvar a excecao em algum lugar...
        // exibir 
    }

    lançar = throw

*/

try {
    console.log('Conectando ao banco de dados...')
    throw new Error('Erro ao conectar ao banco de dados')
} catch (excecao) {
    console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)
} finally {
    console.log('Fechando a conexão com o banco de dados...')
}