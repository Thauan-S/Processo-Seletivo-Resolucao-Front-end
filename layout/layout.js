function adicionarItemNaLista(){
    
    let lista=window.document.getElementById("lista1")
    let novoItem = document.createElement('li');
    novoItem.className = 'list-group-item'
    let input1=document.getElementById("input1").value
    
    novoItem.textContent=input1
    lista.appendChild(novoItem)
lista.appendChild()
}
function adicionarItemNaLista2(){
    
    let lista=window.document.getElementById("lista2")
    let novoItem = document.createElement('li');
    novoItem.className = 'list-group-item'
    let input2=document.getElementById("input2").value
    
    novoItem.textContent=input2
    lista.appendChild(novoItem)
lista.appendChild()
}