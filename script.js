var addElementButton = document.getElementById('addElement');
var ToDoContainer = document.getElementById('ToDoElements');
var TextPut = document.getElementById('inputText');
window.alert("Instrukcja:" + "\n" + "Przekreslenie i odkreslenie danego elementu -> double click" + "\n" + "Usuniecie danego elementu -> right click");
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

        var through = new Boolean;
        through = false;
        paragraph.addEventListener('dblclick', function(){
            
            if(through){
                paragraph.style.textDecoration = "line-through";
                through = false;
            }else if(!through){
                paragraph.style.textDecoration = "none";
                through = true;
            }
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
