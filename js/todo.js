const field = document.querySelector('.field');
const addButton = document.querySelector('.add');
const list = document.querySelector('.list');

function createTask(value) {
    const task = document.createElement('div');
    task.textContent = value;
    task.classList.add('check');

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.classList.add("status");
    check.addEventListener('click', (event) => completeTask(event));
    task.appendChild(check);

    return task;

    function addTask() {
        if (field.value) {
            const instance = createTask(field.value);
            list.appendChild(instance);
            field.value = '';
        }
    }

    addButton.addEventListener('click', addTask);
    
    function completeTask(event) {
        const target = event.target;
        const container = target.parentElement;

        if (target.checked) {
            container.classList.add('success');
        } else {
            container.classList.remove('success');
        }
    }


