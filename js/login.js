function preenchidos(nome, senha) {
    return (nome || senha);
}

function login() {
    function exibirErroLogin(mensagem) {
        $('.login').addClass('borda-erro');
        $('#input-nome').addClass('borda-erro');
        $('#input-senha').addClass('borda-erro');
        $('.mensagem-erro').html(mensagem);
    }
    
    function corretos(perfil, nome, senha) {
        return (perfil.nome === nome || perfil.senha === senha);
    }

    let nome = $('#input-nome').val();
    let senha = $('#input-senha').val();

    let perfil = localStorage.getItem('perfil');

    if(!preenchidos(nome, senha)) {
        exibirErroLogin('Preencha todos os campos');
    }
    else if(!perfil) {
        exibirErroLogin('Nenhum perfil encontrado!<br> Cadastre-se primeiro!');
    }
    else if(!corretos(perfil, nome, senha)) {
        exibirErroLogin('Nome ou senha incorretos');
    }
    else {
        open('html/jogo.html', '_self');
    }
}

$('#input-nome').keyup((e) => {
    if(e.key !== 'Enter') 
        return;

    login();
});

$('#input-senha').keyup((e) => {
    if(e.key !== 'Enter')
        return;

    login();
});

$('#entrar').click(login);

$('.botao-sem-login').click(() => {
    open('html/jogo.html', '_self');
})