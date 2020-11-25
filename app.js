var taskList = document.getElementById("taskList");
var input = document.getElementById("input");
function Todo(){
    if(input.value === ""){
        alert("Note Some Text!")
    }else{
    var list = document.createElement("li");
    var listNote = document.createTextNode(input.value);
    list.appendChild(listNote);
    taskList.appendChild(list);
    input.value = "";
    list.setAttribute("class","listStyle")

// ============================================================
// icon div
var iconDiv = document.createElement("div");
list.appendChild(iconDiv);

// Delete
  var ulist = document.getElementById("ulist");
  var del = document.createElement("i");
  del.setAttribute("class","fas fa-trash-alt");
  iconDiv.appendChild(del);
  del.setAttribute("onclick", "deleteItem(this)");

//   Edit 
  var edit = document.createElement("i");
  edit.setAttribute("class","fas fa-edit");
  iconDiv.appendChild(edit);
  edit.setAttribute("onclick", "editItem(this)");
    }
}
function deleteItem(c){
  c.parentNode.parentNode.remove();
}

function deleteAll(){
  taskList.innerHTML = "";
}
function editItem(e){
  var editValue = prompt("Edit Chenges ", e.parentNode.parentNode.firstChild.nodeValue)  
    e.parentNode.parentNode.firstChild.nodeValue = editValue;
//   console.log(e.parentNode.firstChild.nodeValue)
}