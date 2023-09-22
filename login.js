var login = document.getElementById('login');
var span_login = document.getElementById('span_login');

var senha = document.getElementById('senha');
var span_senha = document.getElementById('span_senha');

function check(){
    
}
function verificar_login(){

    if (login.value.length != 6)
    {
        login.style.border =  '2px solid #e63636';   
        span_login.style.display = 'block';
    }
        else
        {
            span_login.style.display = '';
            login.style.border =  '';
        }
}

function verificar_senha(){

    if (senha.value.length != 8)
    {
        senha.style.border =  '2px solid #e63636';   
        span_senha.style.display = 'block';
    }
        else
        {
            span_senha.style.display = '';
            senha.style.border =  '';
        }
}

function enviardados(){


    if(document.dados.login.value=="" ||
        document.dados.login.value.length < 6)
        {
            verificar_login();
            document.dados.login.focus();
                return false;
        }

    if (document.dados.senha.value=="" ||
        document.dados.senha.value.length < 8)
        {
            verificar_senha();
            document.dados.senha.focus();
                return false;
        }

    
}

function local(){


    var jsonlogin = JSON.stringify(document.dados.login.value);
    var jsonsenha = JSON.stringify(document.dados.senha.value);

    if(document.dados.login.value.length==6 &&
        document.dados.senha.value.length==8){

            localStorage.setItem('login', jsonlogin );
            localStorage.setItem('senha', jsonsenha );
        }
    }
