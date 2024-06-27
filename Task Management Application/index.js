function openNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "50%";
}
function closeNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "0%";
}

// app.js
let tasks = [];

function showAddTaskForm() {
    document.getElementById('add-task-form').style.display = 'block';
}

function addTask(event) {
    event.preventDefault();
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    const dueDate = document.getElementById('task-due-date').value;
    
    const task = { id: tasks.length + 1, title, desc, dueDate };
    tasks.push(task);
    renderTaskList();
}

function renderTaskList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task.title}</span>
                        <button onclick="deleteTask(${task.id})">Delete</button>
                        <button onclick="showTaskDetail(${task.id})">View Details</button>
                        <button onclick="showEditTaskForm(${task.id})">Edit</button>`;
        taskList.appendChild(li);
    });
}

function showTaskDetail(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        document.getElementById('task-detail-title').innerText = task.title;
        document.getElementById('task-detail-desc').innerText = task.desc;
        document.getElementById('task-detail-due-date').innerText = task.dueDate;
        document.getElementById('task-detail').style.display = 'block';
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTaskList();
}

function showEditTaskForm(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        document.getElementById('edit-task-title').value = task.title;
        document.getElementById('edit-task-desc').value = task.desc;
        document.getElementById('edit-task-due-date').value = task.dueDate;
        document.getElementById('edit-task-form').style.display = 'block';
    }
}

function editTask(event) {
    event.preventDefault();
    const id = tasks.find(t => t.id === id);
    const title = document.getElementById('edit-task-title').value;
    const desc = document.getElementById('edit-task-desc').value;
    const dueDate = document.getElementById('edit-task-due-date').value;
    
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.title = title;
        task.desc = desc;
        task.dueDate = dueDate;
    }
    renderTaskList();
}
