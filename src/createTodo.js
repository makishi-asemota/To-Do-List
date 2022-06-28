function createToDo() {

    let myTaskList = [];

    function Task(title, description, date) {
        this.title = title
        this.description = description
        this.date = date
    };

    function addTaskToList(title, description, date) {
        let task = new Task(title, description, date);
        myTaskList.push(task);
        displayTasks();
    };
    
    function displayTasks() {
        const allTasks = document.querySelector('.taskContainer');

        const removeDivs = document.querySelectorAll(".eachtask");
        for (let i = 0; i < removeDivs.length; i++) {
            removeDivs[i].remove()
        }

        let index = 0;

        myTaskList.forEach(myTaskLists => {
            const eachTask = document.createElement('div');
            eachTask.classList.add("eachtask");
            allTasks.appendChild(eachTask);

            const removeTaskBtn = document.createElement("button");
            removeTaskBtn.classList.add("remove-task");
            removeTaskBtn.textContent = "Remove Task";

            removeTaskBtn.dataset.linkedArray = index;
            eachTask.appendChild(removeTaskBtn);

            removeTaskBtn.addEventListener('click', removeTaskFromList);

            function removeTaskFromList() {
                let taskToRemove = removeTaskBtn.dataset.linkedArray;
                myTaskList.splice(parseInt(taskToRemove), 1);
                eachTask.remove();
                displayTasks();
            };

            for (let key in myTaskLists) {
                const text = document.createElement('p');
                text.textContent = (`${myTaskLists[key]}`);
                eachTask.appendChild(text);
            }
            index++
        });
    };

    const newTaskBtn = document.querySelector('.newTask');
    newTaskBtn.addEventListener('click', createTask);
    function createTask() {
        document.getElementById('list').style.display = '';
    };

    const addButton = document.querySelector('.addBtn');
    addButton.addEventListener('click', taskData)

    function taskData() {
        let Title = document.getElementById('title').value;
        let Description = document.getElementById('description').value;
        let Date = document.getElementById('date').value;

        if ((Title == "") || (Description == "") || (Date == "")) {
            return;
        }

        addTaskToList(Title, Description, Date);

        document.getElementById('form').reset()

        document.getElementById('list').style.display = "none";
    };





    
    
    // const deletebutton = document.querySelector('.delete');
    // const taskInput = document.querySelector('#currentTask');
    
    
   
    // addButton.addEventListener('click', addTask);
    // function addTask() {
        
    //     const checkbox = document.createElement('input');
    //     checkbox.type = "checkbox";
    //     eachTask.appendChild(checkbox);
    //     eachTask.appendChild(taskInput);
    //     allTasks.appendChild(eachTask);
    // }



};

export default createToDo();