import TodoService from "./todo-service.js";


var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos(draw) {
	todoService.getTodos(draw)
}

function draw(todos) {
	let template = ''
	console.log(todos)
	if (todos.length > 0) {
		template = `<nav class="navbar   navi">
				<a class="navbar-brand" href="#">Your ToDos Go Here</a>
				<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02"
				 aria-expanded="false" aria-label="Toggle navigation">			
					<span class="navbar-toggler-icon"></span>
				</button><div class="navbar-collapse collapse" id="navbarColor02" style="">
				<ul class="navbar-nav mr-auto" id="todoBar">`
		for (let i = 0; i < todos.length; i++) {
			const todo = todos[i];
			template += `<li class="nav-item"><input type="checkbox" name="todoChecks"value= ${todo._id}> ${todo.description}<br><i class="fas fa-minus-circle" onclick = "app.controllers.todoController.removeTodo('${todo._id}')"></i></li>`

		}
		template += `</ul></div></nav>`

	}
	else {
		template = ``
	}
	document.getElementById("todos").innerHTML = template
}



export default class TodoController {
	constructor() {
		getTodos(draw)
	}



	addTodoFromForm() {
		event.preventDefault()
		// @ts-ignore
		let todoForm = document.getElementById("todo").value;
		let todo = {
			description: todoForm
		}
		console.log(todoForm)
		todoService.addTodo(todo, todoService.getTodos, draw)
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		todoService.removeTodo(todoId, draw)
	}



}
