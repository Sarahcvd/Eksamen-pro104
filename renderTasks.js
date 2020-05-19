

function renderTasks() {
    const outputTask = JSON.parse(window.localStorage.getItem("outputTask")) || [];
    const outputTaskEl = document.getElementById("outputTasks");
    outputTaskEl.innerHTML = "";
    for (const product of outputTask) {
        const productTwo = document.createElement("div");
        productTwo.setAttribute('class', 'task')
        
        const { task } = product;
        productTwo.innerHTML = 
        "<div id='task'>" + 
            "<p>" + product.task + "</p>" + 
            "<ul>" +
                "<li><img id='pencil-img' src='images/pencil.png'>"+ 
                    "<ul class='dropdown-menu'>" +
                        "<li><a href='#'>Add Member</a></li>" +
                        "<li><a href='#'>Change status</a></li>" +
                    "</ul>"
                "</li>" + 
            "</ul>" +
        "</div>" ;
        outputTaskEl.appendChild(productTwo);
    }
    
        for ( i = 0; i < outputTask.length; i++){
            var taskId = document.getElementsByClassName("task");
            taskId[i].id = "task" + (i + 1);
        }
};


