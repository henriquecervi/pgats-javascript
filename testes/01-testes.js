/*
    describre -> agrupador de testes
    it        -> implementação do teste

*/

import { exibirNomeFormatado } from '../conceitos/testes-de-unidade.js'
import assert from 'node:assert'

describe('Testes do projeto', () => {

    it('Teste se o nome está formatado - Upper Case', () => {
        assert.strictEqual(exibirNomeFormatado('Mimosa'), 'MIMOSA')
    })

    it('Teste not strict equal', () => {
        assert.notStrictEqual(exibirNomeFormatado('MIMOSA'), 'mimosa')
    })
})