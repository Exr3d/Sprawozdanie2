var addElementButton = document.getElementById('addElement');
var ToDoContainer = document.getElementById('ToDoElements');
var TextPut = document.getElementById('inputText');

class ListElement{
    constructor(task){
        
        this.task = task;
        var paragraph = document.createElement('p');
        ToDoContainer.appendChild(paragraph);

    }
    getTask(){
        var paragraph = document.createElement('p');
        ToDoContainer.appendChild(paragraph);
        paragraph.innerText = this.task;
        paragraph.classList.add('ElementStyle');
        paragraph.addEventListener('dblclick', function(){
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('contextmenu', function(){
            paragraph.innerText ="";
        })
    }
}
addElementButton.addEventListener('click', function(){
    var Task = "";
    if(TextPut.value != null){
        Task = TextPut.value;
        var tempTask = new ListElement(Task);
        tempTask.getTask(); 
    }
})
