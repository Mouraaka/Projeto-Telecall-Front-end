var form = document.getElementById('formulario');

var nome = document.getElementById('nome');
var span_nome = document.getElementById('span_nome');

var endereco = document.getElementById('endereco');
var span_endereco = document.getElementById('span_endereco');

var nome_materno = document.getElementById('nome-materno');
var span_nome_materno = document.getElementById('span_nome_materno');

var data = document.getElementById('data-nascimento');
var span_data = document.getElementById('span_data');

var cpf = document.getElementById('CPF');
var span_cpf = document.getElementById('span_CPF');

var celular = document.getElementById('celular');
var span_celular = document.getElementById('span_celular');

var telefone = document.getElementById('telefone_celular');
var span_telefone = document.getElementById('span_telefone');

var login = document.getElementById('login');
var span_login = document.getElementById('span_login');

var senha = document.getElementById('senha');
var span_senha = document.getElementById('span_senha');

var confirmar = document.getElementById('confirmar_senha');
var span_confirmar = document.getElementById('span_confirmar');

var masculino = document.getElementById('masculino');
var feminino = document.getElementById('feminino');
var outro = document.getElementById('outro');
var span_sexo = document.getElementById('span_sexo');

function verificar_nome(){

  if (nome.value.length < 15)
  {
    nome.style.border = '2px solid #e63636';
    span_nome.style.display = 'block';
  }
    else
    {
      span_nome.style.display = '';
      nome.style.border = '';
    }
  }

function verificar_endereco(){

      if (endereco.value == '')
      {
        endereco.style.border = '2px solid #e63636';
        span_endereco.style.display = 'block'; 
      }
        else
        {
          span_endereco.style.display = '';
          endereco.style.border = "";
        }
  }

function verificar_nome_materno(){

  if (nome_materno.value.length < 15)
  {
    nome_materno.style.border = '2px solid #e63636';
    span_nome_materno.style.display = 'block';
  }
    else
    {
      nome_materno.style.border = "";
      span_nome_materno.style.display = "";
    }
  }

function verificar_data(){

  if (data.value == "")
  {
    data.style.border = "2px solid #e63636";
    span_data.style.display = "block";
  }
    else
    {
      data.style.border = "";
      span_data.style.display = "";
    }
  }

function verificar_cpf(){

  if (cpf.value.length == "" )
  {
    cpf.style.border = '2px solid #e63636';
    span_cpf.style.display = 'block';
  }
    else
    {
      cpf.style.border = '';
      span_cpf.style.display = '';
    }
  }

function verificar_celular(){

  if (celular.value.length != 17)
  {
    celular.style.border = '2px solid #e63636';
    span_celular.style.display = 'block';
  }
  else
  {
    celular.style.border = '';
    span_celular.style.display = '';
  }
  }

function verificar_telefone(){

  if (telefone.value.length != 17)
  {
    telefone.style.border = '2px solid #e63636';
    span_telefone.style.display = 'block';
  }
  else
  {
    telefone.style.border = '';
    span_telefone.style.display = '';
  }


  }

function verificar_login(){

  if (login.value.length < 6)
  {
    login.style.border = '2px solid #e63636';
    span_login.style.display = 'block';
  }
  else
  {
    login.style.border = '';
    span_login.style.display = '';
  }
  }

function verificar_senha(){

  if (senha.value.length < 8)
  {
    senha.style.border = '2px solid #e63636';
    span_senha.style.display = 'block';
  }
    else
    {
      senha.style.border = '';
      span_senha.style.display = '';
    }
}

function verificar_confirmar(){

  if (confirmar.value != senha.value)
  {
    confirmar.style.border = '2px solid #e63636';
    span_confirmar.style.display = 'block';
  }
    else
    {
      confirmar.style.border = '';
      span_confirmar.style.display = '';
    }
}

function enviardados(){

    if(document.formulario.nomenome.value=="" ||
        document.formulario.nomenome.value.length < 15 ||
         document.formulario.nomenome.value.length > 60)
        {
            verificar_nome();
            document.formulario.nomenome.focus();
                return false;
        }

    if(document.formulario.endereco.value=="")
        {
            verificar_endereco();
            document.formulario.endereco.focus();
                return false;
        }

    if(document.formulario.nomematerno.value=="" ||
        document.formulario.nomematerno.value.length < 15 ||
          document.formulario.nomematerno.value.length > 60)
        {
            verificar_nome_materno();
            document.formulario.nomematerno.focus();
                return false;
        }
        
    if(document.formulario.datanascimento.value=="" ||
        document.formulario.datanascimento.value.length < 10)
        {
            verificar_data();
            document.formulario.datanascimento.focus();
                return false;
        }

    if (  masculino.checked==false && 
          feminino.checked==false &&
          outro.checked==false){

            span_sexo.style.display = 'block';
            return false;      
    }
    else
    {
      span_sexo.style.display = ''
    }

    
    if(document.formulario.CPF.value=="" || 
      document.formulario.CPF.value.length < 14)
      {
        verificar_cpf();
        document.formulario.CPF.focus();
          return false;
      }

    if(document.formulario.celular.value=="" || 
      document.formulario.celular.value.length < 16)
      {
        verificar_celular();
        document.formulario.celular.focus();
          return false;
      }

    if(document.formulario.telefone_celular.value=="" || 
      document.formulario.telefone_celular.value.length < 14)
      {
        verificar_telefone();
        document.formulario.telefone_celular.focus();
          return false;
      }

    if(document.formulario.login.value=="" || 
      document.formulario.login.value.length < 6)
      {
        verificar_login();
        document.formulario.login.focus();
          return false;
      }

    if(document.formulario.senha.value=="" || 
      document.formulario.senha.value.length < 8)
      {
        verificar_senha();
        document.formulario.senha.focus();
          return false;
      }
    
    if(document.formulario.confirmar_senha.value=="" || 
        document.formulario.confirmar_senha.value != document.formulario.senha.value)
      {
        verificar_confirmar();
        document.formulario.confirmar_senha.focus();
          return false;
      }
  }

  