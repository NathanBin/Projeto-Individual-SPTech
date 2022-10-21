// Index
function trocarL(){
    LogoB.src = "assets/icons/bazul.png"
}
function trocarP(){
    PincelB.src = "assets/icons/pincelaazul.png"
}
function trocarA(){
    ArtistaB.src = "assets/icons/artista-azul.png"
}
function trocarG(){
    GraficoB.src = "assets/icons/graficoazul.png"
}
function trocarC(){
    ContatoB.src = "assets/icons/emailazul.png"
}
function destrocar(){
    LogoB.src = "assets/icons/lgo1branco.png"
    PincelB.src = "assets/icons/pincel.png"
    ArtistaB.src = "assets/icons/artista.png"
    GraficoB.src = "assets/icons/grafico.png"
    ContatoB.src = "assets/icons/contato.png"
}
// Cadastro
function verify(){
    var senha = document.getElementById('inSenha');
    var uper = document.getElementById('imgT4');
    var num = document.getElementById('imgT3');
    var tamanho = document.getElementById('imgT1');
    var especial = document.getElementById('imgT2');

    if(senha.value.match(/[0-9]/)){
        num.src = "assets/icons/check.png"
    
    }else{
        num.src = "assets/icons/traco.png"
    }

    if(senha.value.match(/[A-Z]/)){
        uper.src = "assets/icons/check.png"
    }else{
        uper.src = "assets/icons/traco.png"
    }

    if(senha.value.match(/[!\@\#\$\%\&\*]/)){
        especial.src = "assets/icons/check.png"
    }else{
        especial.src = "assets/icons/traco.png"
    }

    if(senha.value.length < 6){
        tamanho.src = "assets/icons/traco.png"
    }else{
        tamanho.src = "assets/icons/check.png"
    }


}


