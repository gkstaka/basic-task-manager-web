const completeButtons = document.querySelectorAll(".complete-button");
const editButtons = document.querySelectorAll(".edit-button");
const deleteButtons = document.querySelectorAll(".delete-button");
regexComplete = /.*completado$/i;
regexHyphen = /-(.*)/;
regexDate = /\d{4}-\d{2}-\d{2}/;

function updateTasksNumber() {
    const taskValues = document.querySelectorAll(".task-title");
    let counter = 1;
    taskValues.forEach((tv) => {
        description = tv.innerHTML;
        matchDescription = description.match(regexHyphen)[1];
        tv.innerHTML = "Tarefa " + counter + " - " + matchDescription;
        counter++;
    });
}

completeButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const taskItem = button.closest("li");
        const title = taskItem.querySelector("h3");
        if (!title.innerHTML.match(regexComplete)) {
            title.append(" - Completado");
        }
    });
});

editButtons.forEach((button) => {
    button.addEventListener("click", function () {
        title = button.closest("li").querySelector(".task-title");
        taskNumber = title.innerHTML.split("-")[0].trim();
        getTitle = title.innerHTML.split("-")[1].trim();
        let titleInput = window.prompt("Tarefa", getTitle);
        title.innerHTML = taskNumber + " - " + titleInput;

        date = button.closest("li").querySelector(".date");
        getDate = date.innerHTML.split(":")[1].trim();
        let dateInput = window.prompt("Data", getDate);
        if (!dateInput.match(regexDate)) {
            alert("Data inválida!");
        } else {
            date.innerHTML = "Data de Vencimento: " + dateInput;
        }

        priority = button.closest("li").querySelector(".priority");
        getPriority = priority.innerHTML.split(":")[1].trim();
        let priorityInput = window.prompt("Prioridade", getPriority);
        priority.innerHTML = "Prioridade: " + priorityInput;

        description = button.closest("li").querySelector(".description");
        getDescription = description.innerHTML.split(":")[1].trim();
        let descriptionInput = window.prompt("Descrição", getDescription);
        description.innerHTML = "Descrição: " + descriptionInput;
    });
});

deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
        confirm("Tem certeza que deseja deletar esse item?");
        const taskItem = button.closest("li");
        taskItem.remove();
        updateTasksNumber();
    });
});

updateTasksNumber();
