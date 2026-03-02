    function updateTime() {
        var timeRN = new Date().toLocaleString();
        var timeNR = document.querySelector("#time");
        timeNR.innerHTML = timeRN;
    }

    updateTime();
    setInterval(updateTime, 1000);




    function dragElement(element) {
var initialX = 0;
var initialY = 0;
var currentX = 0;
var currentY = 0;
  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

    function dragElement(e) {
    e = e || window.event;
    e.preventDefault();

        currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

        element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

    function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




var AppwindowScreen = document.querySelector("#Appwindow");
function closeScreen(element) { 
    element.style.display = "none";
}

var AppwindowScreenClose = document.querySelector("#closeScreen");

AppwindowScreenClose.addEventListener("click", function() {
    closeScreen(AppwindowScreen);
});


var selectedApp = undefined;
function selectApp(element) {
    element.classList.add("selected");
    selectedApp = element;
}

function deselectApp(element) {
    element.classList.remove("selected");
    selectedApp = undefined;
}

function handleAppClick(element) {
    if (element.classList.contains("selected")) {
        deselectApp(element);
        openScreen(AppwindowScreen);
    }
    else {
        selectApp(element);
    }
}

var biggestIndex = 0;
function addWindowTapHandling(element) {
    element.addEventListener("mousedown", () => 
    handleWindowTap(element)
    )
}



var topBar = document.querySelector("#topBar");
function openScreen(element) {
    element.style.display = "flex" ;
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
    deselectApp(selectedApp);
}

function initializeWindow(elementName) {
    var screen = document.querySelector("#" + elementName);
    addWindowTapHandling(screen);
    dragElement(screen);
}

initializeWindow("Appwindow");



var content = [ 
{
    title: "Hiiii",
    date: "28/02/2026",
    content: ` 
    <p style="color: aliceblue;" contenteditable="true">Welcome to my web-OS, where
    you can experience a mix of different operating systems all in one website. <br><br>
    <img src="OIP.webp" style="width: 400px; border-radius: 14px;"/>
    <br><br>
    I have tried to work on good looking UI, so it really looks nice when experiencing this.
    And honestly, i am proud of this result.
    I followed a guide by hackclub, https://jams.hackclub.com/batch/webOS/part-4,
    and it was really helpful in guiding me towards how to do this.     
    </p>
    `
},
{
    title: "2nd journal",
    date: "29/02/2026",
    content: ` 
    <p style="color: aliceblue;" contenteditable="true">lul...</p>
    `
}

]

function setNotesContent(index) {
    var notesContent = document.querySelector("#Notes");
    notesContent.innerHTML = content[index].content;
}

setNotesContent(0);

function addTosidebar(index) {
    var sidebar = document.querySelector("#sidebar");
    var note = content[index];
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div style="padding: 10px 14px; margin-bottom: 4px; border-radius: 10px; background-color: rgba(63, 59, 59, 0.3); width: 100%; cursor: pointer; transition: background-color 0.2s ease;" onmouseover="this.style.backgroundColor='rgba(63, 59, 59, 0.5)'" onmouseout="this.style.backgroundColor='rgba(63, 59, 59, 0.3)'">
    <p style="margin: 2px;">
      ${note.title}
    </p>
    <p style="font-size: 12px; margin: 0px;">
      ${note.date}
    </p>
    </div>
  `;
  newDiv.addEventListener("click", function() {
    setNotesContent(index);
  });
    sidebar.appendChild(newDiv);
    }

    for (let i = 0; i < content.length; i++) {
        addTosidebar(i);
    }