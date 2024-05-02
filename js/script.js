window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || [];
	//const dateInput = document.querySelector('#dateInput');
    //let dateValue = dateInput.value;
    //dateInput.value ="";
	const newTodoForm = document.querySelector('#new-todo-form');
    
    //let dateObj = new Date(date);
    //let formattedDate = dateObj.toLocaleString("en-US", {
      //  month:"long",
       // day : "numeric",
       // year: "numeric"
    //});
        
	newTodoForm.addEventListener('submit', e => {
		e.preventDefault();

		const todo = {
			content: e.target.elements.content.value,
            date: e.target.elements.dateValue,
			category: e.target.elements.category.value,
			done: false,
			createdAt: new Date().getTime()
		}

		todos.push(todo);

		localStorage.setItem('todos', JSON.stringify(todos));

		// Reset the form
		e.target.reset();

		DisplayTodos()
	})

	DisplayTodos()
})

function DisplayTodos () {
	const todoList = document.querySelector('#todo-list');
	todoList.innerHTML = "";

	todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');

		const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const content = document.createElement('div');
        const dateElem = document.createElement('input')
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		input.type = 'checkbox';
		input.checked = todo.done;
		span.classList.add('bubble');
		if (todo.category == 'personal') {
			span.classList.add('personal');
		} else {
			span.classList.add('business');
		}
		content.classList.add('todo-content');
        dateElem.classList.add('todo-date')
		actions.classList.add('actions');
		edit.classList.add("material-icons");
		deleteButton.classList.add("material-icons", "remove-btn");

		content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
        dateElem.innerText = `<input type="date" value="${todo.date}" readonly>`;
		edit.innerText = 'edit';
		deleteButton.innerText = 'remove_circle';

		label.appendChild(input);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		todoItem.appendChild(label);
		todoItem.appendChild(content);
        todoItem.appendChild(dateElem);
		todoItem.appendChild(actions);

		todoList.appendChild(todoItem);

		if (todo.done) {
			todoItem.classList.add('done');
		}
		
		input.addEventListener('change', (e) => {
			todo.done = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todos));

			if (todo.done) {
				todoItem.classList.add('done');
			} else {
				todoItem.classList.remove('done');
			}

			DisplayTodos()

		})

		edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayTodos()

			})
		})

		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		})

	})
}