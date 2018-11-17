const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/FelixR/todos/',
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
				console.log(res)
				if (res.data.data.length == 0) {
					console.log("no to-dos")
				}
				else {
					draw(res.data.data)
				}
			})
			.catch(logError)
	}

	addTodo(todo, getTodos) {
		todoApi.post('', todo)
			.then(function (res) {
				getTodos();
			})
			.catch(logError)
	}

	toggleTodoStatus(todo, getTodos) {
		todoApi.put(todo._id, todo)
			.then(function (res) {
			})
			.catch(logError)
	}

	removeTodo(id, getTodos) {
		todoApi.delete(id)
			.then(res => {
				getTodos()
			})
	}
}


