const MudarTema = document.querySelector('#tema');

MudarTema.addEventListener("change", function(){
    
    document.body.classList.toggle("escuro");

})

function abrirmenu(){
    var menu = document.getElementById('menu_aberto');
  
    menu.style.display = 'flex';
}

function fecharmenu(){
    var menu = document.getElementById('menu_aberto');

    menu.style.display = 'none';
}

function trocar_nome(){

    const div = document.getElementById('nome_usuario');
    var jsonlogin = localStorage.getItem('login');
    var local_login = JSON.parse(jsonlogin);

    if (local_login != null){
        div.innerHTML = local_login;
        document.getElementById('logado').style.display = 'flex';
        document.getElementById('lista_conta').style.display = 'none';
    }
    else
    {
        
    }
}

function sair_conta(){ 
    
    localStorage.clear
    document.getElementById('logado').style.display = '';
    document.getElementById('lista_conta').style.display = '';
    
}