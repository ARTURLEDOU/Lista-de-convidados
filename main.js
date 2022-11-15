names = [];
var nomeConvidado = document.getElementById("inputConvidados").value
var list = document.getElementById("lista")
function Add(){
    names.push(nomeConvidado)
    list.innerHTML = "names"
}
