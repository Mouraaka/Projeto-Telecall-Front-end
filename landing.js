

const MudarTema = document.querySelector('#tema');

MudarTema.addEventListener("change", function(){
    
    document.body.classList.toggle("escuro");

})
    

function tirar_cor(){
    
    document.getElementById('icone_cadeado').style.color = '';
    document.getElementById('texto_cadeado').style.color = '';
    
    document.getElementById('icone_celular').style.color = '';
    document.getElementById('texto_celular').style.color = '';
    
    document.getElementById('icone_verificado').style.color = '';
    document.getElementById('texto_verificado').style.color = '';
    
    document.getElementById('icone_chat').style.color = '';
    document.getElementById('texto_chat').style.color = '';
}

function cor_cadeado(){
    document.getElementById('icone_cadeado').style.color = 'rgb(58, 109, 179)';
    document.getElementById('texto_cadeado').style.color = 'rgb(58, 109, 179)';
}

function cor_mascara(){
    document.getElementById('icone_celular').style.color = 'rgb(58, 109, 179)';
    document.getElementById('texto_celular').style.color = 'rgb(58, 109, 179)';
}

function cor_verificado(){
    document.getElementById('icone_verificado').style.color = 'rgb(58, 109, 179)';
    document.getElementById('texto_verificado').style.color = 'rgb(58, 109, 179)';
}

function cor_chat(){
    document.getElementById('icone_chat').style.color = 'rgb(58, 109, 179)';
    document.getElementById('texto_chat').style.color = 'rgb(58, 109, 179)';
}

function cadeado(){
    window.location.href='2AF.html';
}

function celular(){
    window.location.href='numero_mascara.html';
}

function verificado(){
    window.location.href='google_verified.html';
}

function chat(){
    window.location.href='sms.html';
}

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
        document.getElementById('logado').style.display ='';
        document.getElementById('lista_conta').style.display = '';
    }
}

function sair_conta(){ 
    
    localStorage.clear
    document.getElementById('logado').style.display = '';
    document.getElementById('lista_conta').style.display = '';
    
}


