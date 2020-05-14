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
        localStorage.setItem(member, member);
        location.reload();
    }
};

// printe ut alle medlemer
for(var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    document.getElementById("members-output").innerHTML += ` ${key}, `;
}




// Task kode: 
function createNewElement() {
    //Først lages en div
	var txtNewInputBox = document.createElement('div');

    // Så legges innhold til i denne diven
	txtNewInputBox.innerHTML = "<input type='text' id='newInputBox' class='field' placeholder='What is your new task?'>";

    //Dermed legges txtNewInputBox til som ny child
	document.getElementById("inputField").appendChild(txtNewInputBox);
}

