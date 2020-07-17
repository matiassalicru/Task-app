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

        const trash = document.createElement('div');
        // trash.className = 'trash';

        const listIcon = document.createElement('div');
        listIcon.className = 'listIcon';

        li.addEventListener('click', () => {
            li.classList.toggle('item-checked');
            trash.classList.toggle('trash');
        });

        trash.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(listIcon);
        li.appendChild(document.createTextNode(`${inputValue.value}`));
        li.appendChild(trash);
        taskList.appendChild(li);
        inputValue.value = '';
    }
}