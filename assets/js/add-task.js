let firstAddedTask = false;
const inputTaskName = document.getElementById("task-name");
const inputDueDate = document.getElementById("due-date");
const inputRadioButtonPriority = document.getElementsByName("priority");
const inputDescription = document.getElementById("description");
let inputPriority = "";

function addTask() {
    for (radioButton in inputRadioButtonPriority) {
        if (inputRadioButtonPriority[radioButton].checked) {
            switch (inputRadioButtonPriority[radioButton].value) {
                case "low":
                    inputPriority = "Baixa";
                    break;
                case "medium":
                    inputPriority = "Média";
                    break;
                case "high":
                    inputPriority = "Alta";
                    break;
            }
        }
    }
    if (
        inputTaskName.value === "" ||
        inputDueDate.value === "" ||
        inputPriority === "" ||
        inputDescription.value === ""
    ) {
        alert("Todos os campos são obrigatórios!");
    } else {
        let addedTask = document.getElementById("added-task");
        if (firstAddedTask === false) {
            headerTask = document.createElement("h2");
            headerTask.textContent = "Tarefas adicionadas";
            headerTask.classList.add("added-task-h2");
            addedTask.appendChild(headerTask);
            firstAddedTask = true;
        }

        addedTaskBox = document.createElement("div");
        addedTaskBox.classList.add("added-task-box");
        {
            taskTitle = document.createElement("h3");
            taskTitle.textContent = "Tarefa - " + inputTaskName.value;
            taskTitle.classList.add("added-task-h3");
            addedTaskBox.appendChild(taskTitle);
    
            taskDate = document.createElement("p");
            taskDate.textContent = "Data de vencimento: " + inputDueDate.value;
            taskDate.classList.add("added-task-date");
            addedTaskBox.appendChild(taskDate);
    
            taskPriority = document.createElement("p");
            taskPriority.textContent = "Prioridade: " + inputPriority;
            taskPriority.classList.add("added-task-priority");
            addedTaskBox.appendChild(taskPriority);
    
            taskDescription = document.createElement("p");
            taskDescription.textContent = "Descrição: " + inputDescription.value;
            taskDescription.classList.add("added-task-description");
            addedTaskBox.appendChild(taskDescription);
        }
        addedTask.appendChild(addedTaskBox);

        
    }
}
