function dragDropMembers(){
    const memberItem = document.querySelectorAll('.members');
    const taskItems = document.querySelectorAll('.task'); 
    const taskFields = document.querySelectorAll('.taskField');
    

    for (let i = 0; i < memberItem.length; i++){
        const member = memberItem[i];

        member.addEventListener('dragstart', function(){
            draggedMember = event.target.innerText;
            event.dataTransfer.setData("text/plain", draggedMember);
            setTimeout(function () {
            }, 0)
        });
        member.addEventListener('dragend', function (){
            setTimeout(function (){                
            }, 0)
        });

        for (let j = 0; j < taskItems.length; j ++) {
            const listMembers = taskItems[j]; 
            
            listMembers.addEventListener('dragover', function (e) {
                e.preventDefault(); 
            }); 
            listMembers.addEventListener('dragenter', function (e) {
                e.preventDefault(); 
            }); 
            listMembers.addEventListener('drop', function (e) {
                e.preventDefault(); 
                event.dataTransfer.getData("text/plain");
                listMembers.innerHTML += "<p class='memberP'>(" + draggedMember + ")</p>";
                console.log(draggedMember);
                
            }); 

        }
    }
}


function dragDropItems() {
    const taskItems = document.querySelectorAll('.task'); 
    const taskFields = document.querySelectorAll('.taskField');

    for (let i = 0; i < taskItems.length; i++) {
        const item = taskItems[i];

        item.addEventListener('dragstart', function () {
            draggedItem = item; 
            setTimeout(function () {
            }, 0)
        }); 

        item.addEventListener('dragend', function () {
            setTimeout(function () {
                
                
            }, 0);
        })

        for (let j = 0; j < taskFields.length; j ++) {
            const list = taskFields[j]; 
            draggedItem = item;
            list.addEventListener('dragover', function (e) {
                e.preventDefault(); 
            }); 
            list.addEventListener('dragenter', function (e) {
                e.preventDefault(); 
            }); 
            list.addEventListener('drop', function (e) {
                e.preventDefault(); 
                this.append(draggedItem); 
            }); 
        }
    }
}