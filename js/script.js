

window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodoForm = document.querySelector('#new-todo-form');

    newTodoForm.addEventListener('submit', e => {
		console.log("pending");
        a

        e.preventDefault();

        const todo = {
            content: e.target.elements.content.value,
            date: e.target.elements.dateInput.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }

        todos.push(todo);

        localStorage.setItem('todos', JSON.stringify(todos));

        // Reset the form
        e.target.reset();

        DisplayTodos(todos)
    })

    DisplayTodos(todos)
})

function DisplayTodos() {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = "";

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        const content = document.createElement('div');
        const dateElem = document.createElement('div')
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
        deleteButton.classList.add("material-icons",  "deleteBtn");

        content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
        dateElem.innerHTML = `<input type="date" value="${todo.date}" readonly>`;
        edit.innerText = 'edit';
        deleteButton.innerText = 'delete';

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
            console.log("trash");
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

    sortBtn.addEventListener('click', (e) => {
        todos.sort((a, b) => {
            let aDate = Date.parse(a.date);
            let bDate = Date.parse(b.date);
            return aDate - bDate;
        })
    todoList.innerHTML = "";
    DisplayTodos()
    })


    pendingBtn.addEventListener('click', (e) => {
        todos.sort((a, b)=>{
            if(a.done) {
                return 1;
            }   
        if (b.done){
            return -1;
        }   
        return a.date.category < b.date.category ? -1 :1;
    });

    todoList.innerHTML="";
    DisplayTodos ();
    });

    businessBtn.addEventListener('click', (e) => {       
        todos.sort((a, b)=>{
            if(a.business) {
                return 1;
            }   
        if (b.business){
            return -1;
        }   
        
        return a.category < b.category ? -1 :1;
    });

    todoList.innerHTML="";
    DisplayTodos ();
    });

    personalBtn.addEventListener('click', (e) => {
        todos.sort((a, b)=>{
            if(a.personal) {
                return 1;
            }   
        if (b.personal){
            return -1;
        }   
        return a.category > b.category ? -1 :1;
    });

    todoList.innerHTML="";
    DisplayTodos ();
    });

    revertBtn.addEventListener('click', (e) => {
       todos = JSON.parse(localStorage.getItem('todos')) || [];
       DisplayTodos();
    });

  }  