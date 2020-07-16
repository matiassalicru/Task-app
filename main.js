
const newTaskButton = document.getElementById('new-task');
newTaskButton.innerText = 'New task!';

const submitTasks = document.getElementById('submit-task');
submitTasks.innerHTML = 'Add Task';

const form = document.getElementById('form');

newTaskButton.addEventListener('click', openTasksForm);

submitTasks.addEventListener('click', sendTask)

form.style.display = 'none';

function openTasksForm(){
    
    if(form.style.display === 'none'){
        form.style.display = 'block';
    } else if(form.style.display != 'none'){
        form.style.display = 'none';
    }
}

function show() {
    console.log(inputTask)
}

function sendTask(e) {
    e.preventDefault();
    
    const inputTask = document.getElementById('input-form').value;

    document.getElementById('tasks').innerHTML += `
    <p id='to-do' class='task-list'> <input id='check' type='checkbox'>  ${inputTask} </input>  </p>
    `;

    document.querySelectorAll('#check').addEventListener('click', checked);
}

function checked() {
    const task = document.getElementById('to-do');
    if(this.checked){
        task.style.textDecoration = 'line-through';
        task.style.fontStyle = 'italic';
        task.style.color = '#45454590';
    } else {
        task.style.textDecoration = 'none';
        task.style.fontStyle = 'normal';
        task.style.color = '#000';
    }

        
    }

function templateTask (task) {
    return `
        <button type='checkbox'></button>
        <p> ${task} </p>
    `;
}