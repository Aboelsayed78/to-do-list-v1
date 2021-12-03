
/* ========== All Variables Declaration ========== */
var addTask = document.getElementById("add"),
    saveTask = document.getElementById("btn"),
    taskList = document.getElementById("list"),
    myForm = document.querySelector("form"),
    myError = document.createElement("h4"),
    editTask,
    doneTask,
    topTask,
    upTask,
    delTask,
    taskHolder;

/* ========== Removing Placeholder ========== */
addTask.onfocus = function () {
    "use strict";
    this.setAttribute('placeholder', '');
};

/* ========== Adding Placeholder ========== */
addTask.onblur = function () {
    "use strict";
    this.setAttribute('placeholder', 'write a task');
};

/* ========== Function Of The Button ========== */
saveTask.onclick = function () {
    
    "use strict";
    
    if (addTask.value !== "") { // If The Field Contains Text
        
        taskHolder = document.createElement("li");
        
        /* ======== Creating Buttons ======== */
        delTask = document.createElement("i");
        doneTask = document.createElement("i");
        editTask = document.createElement("i");
        upTask = document.createElement("i");
        topTask = document.createElement("i");
        
        /* ======== Adding Classes ======== */
        delTask.setAttribute("class", "fas fa-times-circle");
        doneTask.setAttribute("class", "fas fa-check-circle");
        editTask.setAttribute("class", "fas fa-edit");
        upTask.setAttribute("class", "fas fa-chevron-up");
        topTask.setAttribute("class", "fas fa-angle-double-up");
        
        /* ======== Adding Titles ======== */
        delTask.setAttribute("title", "Delete");
        doneTask.setAttribute("title", "Done");
        editTask.setAttribute("title", "Edit");
        upTask.setAttribute("title", "Move Up");
        topTask.setAttribute("title", "Priority");
        
        taskList.appendChild(taskHolder);
        taskHolder.textContent = addTask.value;
        
        /* ======== Showing Buttons ======== */
        taskHolder.onmouseenter = function () {
            this.appendChild(delTask);
            this.appendChild(doneTask);
            this.appendChild(editTask);
            this.appendChild(upTask);
            this.appendChild(topTask);
        };
        
        /* ======== Hiding Buttons ======== */
        taskHolder.onmouseleave = function () {
            this.removeChild(delTask);
            this.removeChild(doneTask);
            this.removeChild(editTask);
            this.removeChild(upTask);
            this.removeChild(topTask);
        };
        
        /* ======== Function Of Delete ======== */
        delTask.onclick = function () {
            this.parentElement.style.background = "#F55";
            setTimeout(function () {
                delTask.parentElement.style.display = "none";
                window.console.log(delTask.parentElement);
            }, 1500);
        };
        
        /* ======== Function Of Done ======== */
        doneTask.onclick = function () {
            this.parentElement.style.background = "#5F5";
            setTimeout(function () {
                doneTask.parentElement.style.display = "none";
                window.console.log(doneTask.parentElement);
            }, 1500);
        };
        
        /* ======== Function Of Edit ======== */
        editTask.onclick = function () {
            
        };
        
        /* ======== Function Of Up ======== */
        upTask.onclick = function () {
            taskList.insertBefore(this.parentElement, this.parentElement.previousElementSibling);
        };
        
        /* ======== Function Of Top ======== */
        topTask.onclick = function () {
            taskList.insertBefore(this.parentElement, taskList.firstElementChild);
        };
        
    } else if (addTask.value === "" || addTask.value === " ") { // If The Field Is Empty
        
        myError.textContent = "This Field Can't Be Empty";
        myForm.appendChild(myError);
        addTask.onclick = function () {
            myForm.removeChild(myError);
        };
        
    }
    
};

/* ==================== The Clock ==================== */
function showTime() {
    "use strict";
    var now = new Date(),
        hours = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds();
    if (hours < 10) {hours = '0' + hours; }
    if (minutes < 10) {minutes = '0' + minutes; }
    if (seconds < 10) {seconds = '0' + seconds; }
    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
}

window.onload = function () {
    "use strict";
    setInterval(showTime, 1000);
};

/* ==================== The Show ==================== */
var div = document.getElementById('show');

function replace(x, y) {
    'use strict';
    x.onkeyup = function () {
        y.textContent = x.value;
    };
}

replace(addTask, div);

/* ==================== Signature ==================== */
var para = document.getElementById('sign'),
    text = para.getAttribute('name'),
    i = 0;

setTimeout(function () {
    'use strict';
    var func = setInterval(function () {
        para.textContent += text[i];
        i += 1;
        if (i > text.length - 1) {
            clearInterval(func);
        }
    }, 100);
}, 1500);

/* ==================== Random Image ==================== */
var images = ['first', 'second', 'third'];

setInterval(function () {
    'use strict';
    var randomImg = Math.floor(Math.random() * images.length);
    document.body.setAttribute('class', images[randomImg]);
}, 3500);