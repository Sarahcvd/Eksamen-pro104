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

function createNewElement() {
    //Først lages en div
	var txtNewInputBox = document.createElement('div');

    // Så legges innhold til i denne diven
	txtNewInputBox.innerHTML = "<input type='text' id='newInputBox' class='field' placeholder='What is your new task?'>";

    //Dermed legges txtNewInputBox til som ny child
	document.getElementById("inputField").appendChild(txtNewInputBox);
}