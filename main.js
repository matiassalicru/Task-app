const addTask = document.querySelector('#submit-task'); //submit button
const inputValue = document.querySelector('#input-form'); //input value
const errorMsg = document.querySelector('#msg'); //Error Message
const taskList = document.querySelector('#task-list'); //El formulario
let itemsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : [];

addTask.addEventListener("click", onSubmit);

function error() {
    errorMsg.innerHTML = '<h6 class="error"> Please write a task </h6>';
}

const liMaker = (text) => {

    const li = document.createElement('li');
    li.className = 'item';

    const trash = document.createElement('div');

    const listIcon = document.createElement('div');
    listIcon.className = 'listIcon';

    li.addEventListener('click', () => {
        li.classList.toggle('item-checked');
        trash.classList.toggle('trash');
    });

    trash.addEventListener('click', () => {
        li.remove();
        itemsArray.splice(itemsArray.indexOf(text), 1);
        localStorage.setItem('items', JSON.stringify(itemsArray));
    });

    li.appendChild(listIcon);
    li.appendChild(document.createTextNode(`${text}`));
    li.appendChild(trash);
    taskList.appendChild(li);

}


function onSubmit(e) {
    e.preventDefault();

    if(inputValue.value === ''){ 
        error();
        setTimeout(() => {
            document.querySelector('#msg').textContent='';
        }, 2000);
    } else {

        itemsArray.push(inputValue.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        liMaker(inputValue.value);        

        inputValue.value = '';

        console.log(itemsArray)
    }
}


//LOCAL STORAGE


localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

data.forEach((item) => {
    liMaker(item)
})