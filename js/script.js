function inserirPeca(casaEl, corPeca) {
    let imgEl = document.createElement('img');
    imgEl.src = '../imgs/peca-' + corPeca + '.png';
    imgEl.classList.add('peca-' + corPeca);
    imgEl.alt = 'peça do jogo de dama';
    casaEl.appendChild(imgEl);
}

function inicializaTabuleiro() {
    for(let i = 0; i < casasEl.length; i++) {
        for(let j = 0; j < casasEl[i].length; j++) {
            if(i == 3 || i == 4)
                continue;

            let casaEl = casasEl[i][j];
            if(casaEl.classList.contains('casa-preta')) {
                if(i < 3) {
                    inserirPeca(casaEl, 'escura');
                }
                if((i > 4 && i < 8)) {
                    inserirPeca(casaEl, 'branca');
                }
            }
        }
    }
}

function jogo(e) {
    function getPosicoes(casaEl) {
        for(let i = 0; i < casasEl.length; i++) {
            let indiceColuna = casasEl[i].indexOf(casaEl);
            if(indiceColuna !== -1) {
                return {
                    linha: i,
                    coluna: indiceColuna
                };
            }
        }
        return null;
    }

    function getPosicoesAoRedor(linha, coluna) {
        
    }

    function alternarTurno() {

    }

    function verificarFim() {

    }

    function capturarPeca() {
        function verificaCapturaObrigatoria() {

        }
    }

    function moverPeca() {

    }

    function validarJogada() {

    }

    function reiniciar() {

    }

    function salvar() {

    }

    function verificaPromocaoDama() {

    }

    let casaRecuperadaEl = e.currentTarget;

    if(casaRecuperadaEl.classList.contains('casa-branca'))
        return;

    if(casaRecuperadaEl.innerHTML !== '')
        return;

    let posicoes = getPosicoes(casaRecuperadaEl);
    let posicoesAoRedor = getPosicoesAoRedor(posicoes.linha, posicoes.coluna);
    

    inserirPeca(casaRecuperadaEl, 'branca');
}

inicializaTabuleiro();

$('.tabuleiro div').click(jogo);