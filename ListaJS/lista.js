//Lista primária
const namelist = ["Julebas", "Loloisa", "Vareta", "Nareba", "Nareba Falso", "Yaguin do Insta", "Elideus"]

const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");

this.fillList()

//-------------------------------------------------------------------------------------------------------------
function fillList(list=namelist){
    listEl.innerHTML="";
    
    for (let i=0;i<list.length;i++){
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

//-------------------------------------------------------------------------------------------------------------
buttonADC.addEventListener("click",adiciona); //Adiciona o evento de click no botão Adicionar

//Define a função de Adicionar
function adiciona(SecList = []){ //SecList é uma lista secundária
    let element = searchField.value;
    SecList = namelist;
    SecList.push(element);

    listEl.innerHTML="";
    
    for (let i=0;i<SecList.length;i++){
        let items = document.createElement("li");
        items.innerHTML = SecList[i];
        listEl.appendChild(items);
    }
}
//-------------------------------------------------------------------------------------------------------------
buttonFIL.addEventListener("click",filtra); //Adiciona o evento de click no botão Filtrar

//Define a função de Filtrar
function filtra(){
    searchField.addEventListener("input",filtra);
    const filteredlist = namelist.filter(el => {
        const listItems = el.toLowerCase(); 
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord)
    });
    fillList(filteredlist);
}
//-------------------------------------------------------------------------------------------------------------
buttonREM.addEventListener("click",remove); //Adiciona o evento de click no botão Remover

//Define a função de Remover
function remove(SecList = []){
    let element = searchField.value;

    SecList = namelist;
    SecList.pop(element);

    listEl.innerHTML="";
    
    for (let i=0;i<SecList.length;i++){
        let items = document.createElement("li");
        items.innerHTML = SecList[i];
        listEl.appendChild(items);
    }
}
//-------------------------------------------------------------------------------------------------------------
buttonSEL.addEventListener("click", seleciona); //Adiciona o evento de click no botão Selecionar

//Define a função de Selecionar
function seleciona(SecList=[]){
    let nome = searchField.value;
    SecList = namelist;

    let novo_array =SecList.splice(SecList.indexOf(nome),1);

    listEl.innerHTML="";
    
    for (let i=0;i<SecList.length;i++){
        let items = document.createElement("li");
        items.innerHTML = SecList[i];
        listEl.appendChild(items);
    }
}
//-------------------------------------------------------------------------------------------------------------
