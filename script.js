function check_form(){
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var masculino = document.getElementById("masculino").value;
    var feminino = document.getElementById("feminino").value;
    var outros = document.getElementById("outros").value;
    var tipoDoContato = document.getElementById("tipo_de_contato").value;
  
     if (nome == ""){
    alert("preencha o nome")
    return false;
        }

    if(telefone ==""){
    alert("digite o telefone")
    return false;
    }

    if(masculino & feminino & outros ==""){
    alert("preencha o genero")
    return false;
    }

    if(tipoDoContato == ""){
     alert("preencha o tipo do contato")
    return false;

    }













































}