document.getElementById('add-button').addEventListener('click', addTodo);

function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (task) {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        li.innerHTML = `
            <span onclick="toggleComplete(this)">${task}</span>
            <button class="delete-button" onclick="deleteTodo(this)">Delete</button>
        `;
        todoList.appendChild(li);
        input.value = '';
    }
}

function toggleComplete(element) {
    element.parentElement.classList.toggle('completed');
}

function deleteTodo(button) {
    button.parentElement.remove();
}