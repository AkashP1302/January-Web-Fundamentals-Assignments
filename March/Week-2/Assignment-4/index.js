const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = () =>{
    let userData = inputBox.value;
    if(userData.trim() !=0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}

addBtn.onclick= () =>{
    let userData = inputBox.value;
    let getLocalStrage = localStorage.getItem("New Todo");
    if(getLocalStrage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStrage);
    }

    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    let getLocalStrage = localStorage.getItem("New Todo");
    if(getLocalStrage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStrage);
    }
    let newLiTag = '' ;
    listArr.forEach((element,index) => {
        newLiTag +=` <li>${element} <span onclick = "deleteTask(${index})"><i class= 'fas fa-trash'></i></span></li>`
    });

    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index){
    let getLocalStrage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStrage);
    listArr.splice(index,1);

    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();

}