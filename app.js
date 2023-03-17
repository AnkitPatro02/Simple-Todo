document.getElementById('date').valueAsDate = new Date();
const input1=document.querySelector('.newtasks input#input1')
const task_detail=document.querySelector('.newtasks input#task_detail')
const priority_options=document.querySelector('.newtasks select')
const date1=document.querySelector('.newtasks input#date')


document.querySelector('#push').onclick = function () {
    if (input1.value.length == 0) {
        alert("please enter a task")
    }


    else {
        document.querySelector('.tasks').innerHTML += `
        <div class="task">
            <span class="taskname">
                <b>Task:</b>${input1.value} \n 
                <b>Detailed Task:</b>${task_detail.value}\n
                <b>Priority:</b>${priority_options.value}\n 
                <b>Date:</b>${date1.value}
            </span>
            <button class="delete">
                <i>dlt</i>
            </button>

        </div>
        `;
        
        var current_tasks = document.querySelectorAll(".delete")
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}