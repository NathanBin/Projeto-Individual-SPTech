//Função Header

    function verificarLogin(){
        var verSession = sessionStorage.getItem('IDUSUARIO_USUARIO');
        var logado = document.querySelector('.logado');
        var deslogado = document.querySelector('.deslogado');

        if(verSession != null){
            deslogado.classList.add('esconder');
            logado.classList.remove('esconder');
        }else{
            deslogado.classList.remove('esconder');
            logado.classList.add('esconder');
        }
    }

//Função Modal Login

    /* sessionStorage.removeItem('fecharModal')
    function iniciarModal(id){
        if(sessionStorage.fecharModal !== id){
            const modal = document.getElementById(id);
            modal.classList.add('mostrar');
            modal.addEventListener('click', (e) => {
                if(e.target.id == id){
                    modal.classList.remove('mostrar')
                    sessionStorage.fecharModal = id
                }
            })
        }
    } */

    const botaoLogin = document.querySelector('.liLogin')
    botaoLogin.addEventListener('click', function() {
        sessionStorage.clear()
        iniciarModal('modalL')
    })

    function modalLogin(){
        var login1 = document.querySelector('.userModal')
        login1.classList.toggle('mostrarModal1')
    }