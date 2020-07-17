const addTask = document.querySelector('#submit-task'); //submit button
const inputValue = document.querySelector('#input-form'); //input value
const errorMsg = document.querySelector('#msg'); //Error Message

addTask.addEventListener("click", onSubmit);

function error() {
    errorMsg.innerHTML = '<h6 class="error"> Please write a task </h6>';
}

function onSubmit(e) {
    e.preventDefault();

    if(inputValue.value === ''){ 
        error();
        setTimeout(() => {
            document.querySelector('#msg').textContent='';
        }, 2000);
    } else {

        const taskList = document.querySelector('#task-list');
        const li = document.createElement('li');
        li.className = 'item';

        li.addEventListener('click', () => {
            li.classList.toggle('item-checked');
        });

        li.appendChild(document.createTextNode(`${inputValue.value}`));
        taskList.appendChild(li);
        inputValue.value = '';
    }
}