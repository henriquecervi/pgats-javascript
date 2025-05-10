/*
    >       - maior que
    >=      - maior ou igual que
    <       - menor que
    <=      - menor ou igual que
    ==      - igualdade valores
    !=      - diferença de valores
    ====    - igualdade valores e tipos
    !==     - diferença de valores e tipos
    ?       - operador ternário (condição ? true : false)
    &&      - e lógico (and)
    ||      - ou lógico (or)
    !       - negação (not)
    ++      - incremento
    --      - decremento
    +=      - adição e atribuição
    -=      - subtração e atribuição
    *=      - multiplicação e atribuição
    /=      - divisão e atribuição
    %=      - resto da divisão e atribuição
    **=     - exponenciação e atribuição
    **      - exponenciação
    **      - potência
    %       - resto da divisão
        // Exemplo: 10 % 3 = 1 (resto da divisão de 10 por 3 é 1)
        // Exemplo: 10 / 3 = 3.3333333333333335 (divisão de 10 por 3 é 3.3333333333333335)

                 ternário

const porte = pesoDoDog <= 10 ? 'pequeno' : 'médio'

const pesoDoDogOperadorTernario = 21
const porte = pesoDoDogOperadorTernario <= 10 // se if
              ? 'pequeno'
              : pesoDoDogOperadorTernario <= 20 // senao se / else if
              ? 'médio'
              : 'grande' // senao

            pesoDoDogOperadorTernario <= 10 ? 'pequeno' : pesoDoDogOperadorTernario <= 20 ? 'médio' : 'grande'

            console.log(porte)

<condicao> ? <acao se verdadeiro> : <acao se falso>

*/
