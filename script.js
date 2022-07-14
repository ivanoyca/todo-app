let taskList = [];
let inputField = document.querySelector('#todo-field');
let addTaskBtn = document.querySelector('.add-btn');
let checkbox = document.querySelector('.checkbox');

addTaskBtn.addEventListener('click', function () {
	let task = `<div class="tasks">
    <div class="checkbox"></div>
    <p class="task-description">${inputField.value}</p>
  </div>`
	taskList.push(task)
	document.querySelector('.task-list').innerHTML = taskList.join('\n')

})

checkbox.addEventListener('click', function () {
	checkbox.classList.toggle('checked')
})

