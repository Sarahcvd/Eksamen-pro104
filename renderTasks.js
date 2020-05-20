

function renderTasks() {
    var outputTask = JSON.parse(window.localStorage.getItem("outputTask")) || [];
    var outputTaskEl = document.getElementById("outputTasks");
    outputTaskEl.innerHTML = "";
    for (var product of outputTask) {
        var productTwo = document.createElement("div");
        productTwo.setAttribute('class', 'task')
        
        var {id,task,deadline} = product;
        productTwo.innerHTML =  
            "<p>" + product.task +" (" +  product.deadline + ")</p>" +
            "<ul id='test'>" +
                "<li><img id='pencil-img' src='images/pencil.png'>"+ 
                    "<ul class='dropdown-menu'>" +
                        "<li><a href='#'>Add Member</a></li>" +
                        "<li><a href='#'>Change status</a></li>" +
                        "<li><a href='#'>Delete task</a></li>" +
                    "</ul>"
                "</li>" + 
            "</ul>";
        outputTaskEl.appendChild(productTwo);
    }
    
        for ( i = 0; i < outputTask.length; i++){
            var taskId = document.getElementsByClassName("task");
            taskId[i].id = "task" + (i + 1);
        }
};

function renderMembers() {
    var storage = JSON.parse(localStorage.getItem("members")) || [];
    var outputDiv = document.getElementById("members-output");

    for (var newMember of storage){
        var {member, stilling} = newMember;
        var newDiv = document.createElement("h5");
        
        newDiv.innerHTML += newMember.member ;
        outputDiv.appendChild(newDiv);

        if (newMember.stilling) {
            newDiv.setAttribute('data-title', newMember.stilling);
        }

        else {
            newDiv.setAttribute('data-title', 'Du må sette en rolle for denne deltakeren');
        }
    }
}