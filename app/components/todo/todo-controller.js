import TodoService from "./todo-service.js";

var todoService = new TodoService

//getTodos function is callback for all edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	var template = ''
	for (var i = 0; i < todos.length; i++) {
		let todo = todos[i]
		template += `
		<li>
				<div class="form-check ml-1 mr-1 pb-2 pt-2 d-flex justify-content-between">

					<input type="checkbox" ${todo.completed ? "checked" : ''} onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')"class="form-check-input" id="${todo._id}"name="${todo._id}">

						<label class="form-check-label" for="${todo._id}">${todo.description}</label>

						<button class="btn-sm" onclick="app.controllers.todoController.removeTodo('${todo._id}')" name="${todo._id}">Delete</button>
				</div>
		</li>
		`
	}
	document.getElementById("todo-list").innerHTML = template
}


export default class TodoController {
	constructor() {
		todoService.getTodos(draw)
		todoService.getTodos(draw)
	}


	addTodoFromForm(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.description.value
		}
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ Get todos AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		let todoUpdate = {
			completed: document.getElementById(todoId).checked,
			_id: todoId
		}
		todoService.toggleTodoStatus(todoUpdate, getTodos)
	}

	removeTodo(todoId) {
		todoService.removeTodo(todoId, getTodos)
	}
}
