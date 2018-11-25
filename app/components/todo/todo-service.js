
// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/marcus/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let _todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => {
				_todoList = res.data.data
				console.log(res.data)
				draw(_todoList)
			})
			.catch(logError)
	}

	addTodo(todo, get, draw) {
		todoApi.post('', todo)
			.then(res => {
				get(draw)
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, draw) {
		var todo = {}

		todoApi.put(todoId, todo)
			.then(function (res) {
				let hm = todo.res[todoId].completed = !todo.res[todoId].completed
				console.log(hm)
				draw(_todoList)
			})
			.catch(logError)
	}

	removeTodo(todoId, draw) {
		todoApi.delete(todoId).then(res => { this.getTodos(draw(_todoList)) })
	}

	get todoList() {
		return _todoList
	}
}
