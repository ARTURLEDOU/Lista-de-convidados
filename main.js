names = [];
var nomeConvidado = document.getElementById("inputConvidados").value
var list = document.getElementById("lista")
function Add(){
    names.push(nomeConvidado)
    list.innerHTML = names;
}

function clik(){
    var s =document.getElementById("s1").value;
    var found=0;
    var j;
    
    for(j=0; j < names.length; j++){
        
        if(s==names[j]){
            found=found+1;
        }
        
    }
    
    document.getElementById("p2").innerHTML="Nome encontrado "+found+" vez(es)";
}
