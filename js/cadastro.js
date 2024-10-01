$('#botao-nao-possui-conta').click(() => {
    $('.login-inicial').addClass('none');
    $('.cadastro').removeClass('none');
    $('.login').removeClass('borda-erro');
    $('.mensagem-erro').addClass('none');
});

function cadastro() {
    function failed(mensagem) {
        $('#cadastro-input-nome').addClass('borda-erro');
        $('#cadastro-input-senha').addClass('borda-erro');
        $('.mensagem').html(mensagem);
        $('.login').addClass('borda-erro');
    }

    function success(mensagem) {
        $('.mensagem').html(mensagem);
    }

    $('input-nome').val('');
    $('input-senha').val('');

    let nome = $('#cadastro-input-nome').val();
    let senha = $('#cadastro-input-senha').val();

    if(!preenchidos(nome, senha)) {
        failed('Preencha todos os campos de entrada');
    }
    else {
        success('Cadastro efetuado com sucesso!!');
    }

    let perfil = {
        nome: nome,
        senha: senha
    };

    localStorage.setItem('perfil', JSON.parse(perfil));
}

$('#cadastrar').click(cadastro);