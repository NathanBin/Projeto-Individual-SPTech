let draw_color = "black";
let draw_width = "5"
function mudarCor(element){
    const tela = document.querySelector('#tela');
    const contexto = tela.getContext('2d');

    draw_color = element.id;
    contexto.strokeStyle = draw_color;
    
}

function mudarTamanho(element){
    const tela = document.querySelector('#tela');
    const contexto = tela.getContext('2d');

    draw_width = element.value;
    contexto.lineWidth = draw_width;
}
let restore = []
let indexV = -1
/* function voltar(){
    incluir aqui a função de Ctrol Z
} */

document.addEventListener('DOMContentLoaded',() =>{

const pincel ={
    ativo:false,
    movendo:false,
    pos:{x:0, y:0},
    posAnterior: null
}


const tela = document.querySelector('#tela');
const contexto = tela.getContext('2d')

//tamanho do canvas
tela.width = 900;
tela.height = 500;

contexto.strokeStyle = draw_color;

contexto.lineWidth = draw_width;

//desenho na tela
const desenharLinha = (linha)=>{


contexto.beginPath();
contexto.moveTo(linha.posAnterior.x, linha.posAnterior.y);
contexto.lineTo(linha.pos.x, linha.pos.y);
contexto.stroke();
}

tela.onmousedown = ()=>{pincel.ativo = true};
tela.onmouseup = ()=>{pincel.ativo = false};

tela.onmousemove = (evento)=>{
    pincel.pos.x = evento.clientX - 270
    pincel.pos.y = evento.clientY - 130
    pincel.movendo = true;
}

const ciclo = () => {
    if(pincel.ativo && pincel.movendo && pincel.posAnterior){
        desenharLinha({pos:pincel.pos, posAnterior: pincel.posAnterior})
        pincel.movendo = false;
    }
    pincel.posAnterior = {x:pincel.pos.x , y:pincel.pos.y}
    setTimeout(ciclo, 10);
}

ciclo()



})
//Usar essa função para salvar a linha num historico, para dps seguir com a proxima função
/* function parar(event){
    const tela = document.querySelector('#tela');
    const contexto = tela.getContext('2d')

    if(pincel.ativo){
        contexto.stroke();
        contexto.closePath();
        pincel.ativo = false;

    }
    event.preventDefault();

    restore.push(contexto.getImageData(0, 0, tela.width, tela.height))
    indexV += 1
    console.log(restore)
} */

function apagar(){

    const tela = document.querySelector('#tela');
    const contexto = tela.getContext('2d')

    tela.width = 900;
    tela.height = 500;

    contexto.lineWidth = draw_width;
    contexto.strokeStyle = draw_color;

    contexto.clearRect(0, 0, tela.width, tela.height);

    /* restore.push(contexto.getImageData()) */
}


