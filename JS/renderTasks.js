

function renderTasks() {
    var outputTask = JSON.parse(window.localStorage.getItem("outputTask")) || [];
    var outputTaskEl = document.getElementById("outputTasks");
    outputTaskEl.innerHTML = "";
    for (var product of outputTask) {
        var productTwo = document.createElement("div");
        productTwo.setAttribute('class', 'task');
        //lagt til draggable 
        productTwo.setAttribute('draggable', true); 
        
        var {task,member,deadline} = product;
        // Selve tasken og dropdown menyen til taskene
        productTwo.innerHTML = 
        "<div id='task'>" + 
            "<p id='pElement'>" + product.task +" "+ product.member + "</p>" + 
            "<ul>" +
                "<li><img id='pencil-img' src='images/pencil.png' alt='task-options. Pencil'>"+ 
                    "<ul class='dropdown-menu'>" +
                    "<li><a href='#' onclick='deleteTask(" + product.id + ")'>Delete task</a></li>" +
                    "<li><a href='#' onclick='editTask(" + product.id + ")'>Edit task</a></li>" +
                    "</ul>"
                "</li>" + 
            "</ul>";
        outputTaskEl.appendChild(productTwo);
    }
    
        for ( i = 0; i < outputTask.length; i++){
            var taskId = document.getElementsByClassName("task");
            taskId[i].id = "task" + (i + 1);
        }
}

function renderMembers() {
    var storage = JSON.parse(localStorage.getItem("members")) || [];
    var outputTask = JSON.parse(window.localStorage.getItem("outputTask")) || [];
    

    var outputDiv = document.getElementById("members-output");
    

    for (var newMember of storage){
        var {member, stilling} = newMember;
        
        var newH5 = document.createElement("h5");
        newH5.setAttribute('class', 'members')
        newH5.setAttribute('draggable', true); 

        newH5.innerHTML += newMember.member ;
        outputDiv.appendChild(newH5);

        if (newMember.stilling) {
            newH5.setAttribute('data-title', newMember.stilling);
        }

        else {
            newH5.setAttribute('data-title', 'Du må sette en rolle for denne deltakeren');
        }

    
    }
}
