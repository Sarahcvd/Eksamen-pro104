// New member kode: 

$(window).load(function () {
    //Ved klikk på denne classen, skal hover_bkgr_fricc vises. 
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    // Ved klikk på krysset, skal hover_bkgr_fricc skjules. 
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});

// Function for å lagre medlemer i localStorage
document.getElementById("new-member-btn").onclick = function () {
    var member = document.getElementById("member-input").value;

    // Kun lagre om det er skrevet noe
    if(member){
        var members = JSON.parse(window.localStorage.getItem("members")) || [];
        members.push(member);
        window.localStorage.setItem("members", JSON.stringify(members));
        location.reload();
    }
};

$(document).ready(function(){
    $('#member-input').keypress(function(ev){
      //If user pressed Enter Key then trigger Submit click
      if(ev.keyCode==13)
      $('#new-member-btn').click();
    });
});

// printe ut alle medlemmer
var members = JSON.parse(window.localStorage.getItem("members"));
for(var i = 0; i < members.length; i++){
    document.getElementById("members-output").innerHTML += members[i]+','  ;
}




// Task kode: 
function createNewElement() {
    //Først lages en div
    var x2 = document.getElementById("x2");
    var x = document.getElementById("inputField");
    x2.style.display = "none";
    x.style.display = "block";
    
    
    var txtNewInputBox = document.createElement('FORM');
    txtNewInputBox.setAttribute("onsubmit", "createNewTask(event)")
    txtNewInputBox.setAttribute("id", "x")

    // Så legges innhold til i denne diven
    txtNewInputBox.innerHTML = "<input type='text' id='newInputBox' class='field' placeholder='What is your new task?'><input type='submit' id='submit-btn' value='Add'>";
    //Dermed legges txtNewInputBox til som ny child
    document.getElementById("inputField").appendChild(txtNewInputBox);
}
// Kode dersom enter trykkes
$(document).ready(function(){
    $('#newInputBox').keypress(function(ev){
      //If user pressed Enter Key then trigger Submit click
      if(ev.keyCode==13)
      $('#submit-btn').click();
    });
});

function createNewTask(event){
    var x = document.getElementById("inputField");
    const task = document.getElementById("newInputBox").value;
    const product = {task};

    if (task) {
        const outputTask = JSON.parse(window.localStorage.getItem("outputTask")) || [];
        outputTask.push(product);
        window.localStorage.setItem("outputTask", JSON.stringify(outputTask)); 
        renderTasks();

        event.target.reset();
        x.style.display = "none";
        x2.style.display = "block";
    }
}


