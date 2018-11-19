
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/marcus/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => {
				todoList = res.data
				console.log(res.data)
				return todoList

			})
			.catch(logError)
	}

	addTodo(todo, draw) {
		todoApi.post('', todo)
			.then(function (res) {
				todoList.push(todo)
				draw()
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, draw) {
		var todo = {}

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				let hm = todo.res[todoId].completed = !todo.res[todoId].completed
				console.log(hm)
				draw()
			})
			.catch(logError)
	}

	removeTodo() {
		// Umm this one is on you to write.... The method is a DELETE

	}

}
