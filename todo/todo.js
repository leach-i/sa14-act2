const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskTitleInput = document.getElementById('task-title');
const taskDetailsInput = document.getElementById('task-details');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskTitle = taskTitleInput.value.trim();
    const taskDetails = taskDetailsInput.value.trim();

    if (taskTitle) {
        addTask(taskTitle, taskDetails);
        form.reset();
    }
});

function addTask(title, details) {
    const listItem = document.createElement('li');

    const taskInfo = document.createElement('div');
    taskInfo.innerHTML = `<strong>${title}</strong><br>${details}`;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
        editTask(listItem, title, details);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(taskInfo);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
}

function editTask(listItem, oldTitle, oldDetails) {
    listItem.innerHTML = '';

    const editForm = document.createElement('form');
    editForm.classList.add('edit-form');

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = oldTitle;

    const detailsTextarea = document.createElement('textarea');
    detailsTextarea.value = oldDetails;

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.type = 'submit';
    saveButton.onclick = function (e) {
        e.preventDefault();

        const newTitle = titleInput.value.trim();
        const newDetails = detailsTextarea.value.trim();

        if (newTitle) {
            listItem.innerHTML = '';
            addTask(newTitle, newDetails);
        }
    };

    editForm.appendChild(titleInput);
    editForm.appendChild(detailsTextarea);
    editForm.appendChild(saveButton);

    listItem.appendChild(editForm);

    editForm.style.display = 'flex';
}

console.log('To-do List Application Loaded.');
