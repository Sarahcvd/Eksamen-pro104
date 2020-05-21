
function dragDrop() {
    const taskItems = document.querySelectorAll('.task'); 
    const taskFields = document.querySelectorAll('.taskField');
    let draggedItem = null; 
        
    for (let i = 0; i < taskItems.length; i++) {
        const item = taskItems[i];
        
        item.addEventListener('dragstart', function () {
            draggedItem = item; 
            setTimeout(function () {
                item.style.display = 'none'; 
            }, 0)
        }); 
        
        item.addEventListener('dragend', function () {
            setTimeout(function () {
                draggedItem.style.display = 'block'; 
                draggedItem = null; 
            }, 0);
        })
        
        for (let j = 0; j < taskFields.length; j ++) {
            const list = taskFields[j]; 
            
            list.addEventListener('dragover', function (e) {
                e.preventDefault(); 
            }); 
            list.addEventListener('drop', function (e) {
                e.preventDefault(); 
                this.append(draggedItem); 
            }); 
        }
    }
}