function criarMatrizEl () {
    let casasEl = document.querySelectorAll ('.tabuleiro div');
    let matrizCasasEl = [[,,,,,,,,], [,,,,,,,,], [,,,,,,,,], [,,,,,,,,],
    [,,,,,,,,], [,,,,,,,,], [,,,,,,,,], [,,,,,,,,]];

    let indiceLinha = 0, indiceColuna = 0;

    for (let i = 0; i < casasEl.length; i++) {
        if (i < 8) 
            indiceColuna = i;

        else if (i % 8 == 0) {
            indiceLinha++;
            indiceColuna = 0;
        }
        else 
            indiceColuna++;

        matrizCasasEl[indiceLinha][indiceColuna] = casasEl[i];
    }
    return matrizCasasEl;
}