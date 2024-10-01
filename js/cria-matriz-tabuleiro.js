function criarMatrizEl() {
    let casasEl = document.querySelectorAll('.tabuleiro div');
    let matrizCasasEl = [[,,,,,,,,], [,,,,,,,,], [,,,,,,,,], [,,,,,,,,],
    [,,,,,,,,], [,,,,,,,,], [,,,,,,,,], [,,,,,,,,]];

    let indiceLinha = 0, indiceColuna = 0;

    for (let i = 0; i < casasEl.length; i++) {
        if (i < 8) {
            indiceColuna = i;
        }
        else if (i % 8 == 0) {
            indiceLinha++;
            indiceColuna = 0;
        }
        else {
            indiceColuna++;
        }

        matrizCasasEl[indiceLinha][indiceColuna] = casasEl[i];
    }
    return matrizCasasEl;
}

let casasEl = criarMatrizEl();

function carregarTabuleiro() {
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

//carregarTabuleiro();