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

// Function for å lagre medlemmer i localStorage
document.getElementById("new-member-btn").onclick = function () {
    var member = document.getElementById("member-input").value;
    var stilling = document.getElementById("stilling-input").value;
    var newMember = {member, stilling};

    // Kun lagre om det er skrevet noe
    if(member){
        var members = JSON.parse(window.localStorage.getItem("members")) || [];
        members.push(newMember);
        window.localStorage.setItem("members", JSON.stringify(members));
        renderMembers();
        location.reload();
    }
}

$(document).ready(function(){
    $('#member-input').keypress(function(ev)  {
      //If user pressed Enter Key then trigger Submit click
      if(ev.keyCode==13)
      $('#new-member-btn').click();
    });
});
$(document).ready(function(){
    $('#stilling-input').keypress(function(ev)  {
      //If user pressed Enter Key then trigger Submit click
      if(ev.keyCode==13)
      $('#new-member-btn').click();
    });
});

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
    var task = document.getElementById("newInputBox").value;
    var deadline = "test";
    var member = "";

    if (task) {
        var outputTask = JSON.parse(localStorage.getItem("outputTask")) || [];
        
        var id = outputTask.length;
        
        var product = {id, member, task, deadline};

        outputTask.push(product);
        window.localStorage.setItem("outputTask", JSON.stringify(outputTask)); 
        renderTasks();
        
        event.target.reset();
        location.reload();
    }
}


function deleteTask(i){
  var currentValue = JSON.parse(localStorage.getItem("outputTask"));
  console.log(currentValue);
  var indexToRemove = i;
  console.log(indexToRemove);
  currentValue.splice(indexToRemove, 1);
  console.log(currentValue);
  localStorage.setItem("outputTask", JSON.stringify(currentValue));
  console.log(currentValue);
  location.reload();
}

var deadline = 'May 27 2020 24:00:00';

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
