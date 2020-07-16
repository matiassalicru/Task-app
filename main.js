
const newTaskButton = document.getElementById('new-task');
newTaskButton.innerHTML = 'New task!';

const addTask = document.getElementById('add-task');
addTask.innerHTML = 'Add Task';

const form = document.getElementById('form');

let taskList = [];

newTaskButton.addEventListener('click', openTasksForm);

addTask.addEventListener('click', sendTask)

function openTasksForm(){
    
    if(form.style.display === 'none'){
        form.style.display = 'flex';
        newTaskButton.innerHTML = 'Cancel new task';
    } else if(form.style.display != 'none'){
        form.style.display = 'none';
        newTaskButton.innerHTML = 'New task!';
    }
}

function sendTask(e) {
    e.preventDefault();

    document.getElementById('tasks').innerHTML = ''; // Limpia el array antes de imprimirlo todo de vuelta.

    let inputTask = document.getElementById('input-form').value; //Guarda el input del usuario.

    if (inputTask != '') {
        
        taskList.push(inputTask);
        
        taskList.forEach((item, index) => {
            document.getElementById('tasks').innerHTML += `
        <p id='to-do' class='task-list'> <input id='check' type='checkbox'>  ${taskList[index]} </input> </p>
        `; 
        });

        document.querySelectorAll('#to-do').forEach((item) => {
            item.addEventListener('change', checked)    
        })

    } else {
        alert('First you must write a task to do!')
    }
}


function checked() {

    document.querySelectorAll('#check').forEach(() => {
        
            this.style.textDecoration = 'line-through';
            this.style.fontStyle = 'italic';
            this.style.color = '#45454590';
        
            // this.style.textDecoration = 'none';
            // this.style.fontStyle = 'normal';
            // this.style.color = '#000';
        }
        
    )    
}