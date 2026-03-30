    function updateTime() {
        var timeRN = new Date().toLocaleString();
        var timeNR = document.querySelector("#time");
        timeNR.innerHTML = timeRN;
        var lockscreenTimeRN = new Date ().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var lockscreenTimeNR = document.querySelector("#lockscreenTime")
        if (lockscreenTimeNR) {
            lockscreenTimeNR.innerHTML = lockscreenTimeRN;
        }
    }

    updateTime();
    setInterval(updateTime, 1000);

    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
function updateBatteryLevel() {
const BatteryLevel = document.querySelector(".battery span");
    const level = battery.level;
    const status = Math.floor(level * 100) + "%";
        BatteryLevel.innerHTML = status;
    const batteryJuice = document.querySelector(".batteryJuice");
    batteryJuice.style.width = level * 100 + "%";
    if (level > 0.5) {
        batteryJuice.style.backgroundColor = "rgba(0, 255, 0, 0.7)";
    } else if (level > 0.2) {
        batteryJuice.style.backgroundColor = "rgba(255, 255, 0, 0.7)";
    } else {
        batteryJuice.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
    }
}
    updateBatteryLevel();
    battery.addEventListener("levelchange", updateBatteryLevel);

});
}


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
    document.onmousemove = moveElement;
  }

    function moveElement(e) {
    e = e || window.event;
    e.preventDefault();

        currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.transform = "none";

        element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

    function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




var AppwindowScreen = document.querySelector("#Appwindow");
function closeScreen(element, buttonID) { 
    element.style.display = "none";
        if (buttonID) {
        let button = document.getElementById(buttonID);
        if (button) button.classList.remove("desktopApp-active");
    }
}

var AppwindowScreenClose = document.querySelector("#closeScreen");

AppwindowScreenClose.addEventListener("click", function() {
    closeScreen(AppwindowScreen, "desktopApp");
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

function handleAppClick(element, windowID) {
    if (element.classList.contains("selected")) {
        deselectApp(element);
        openScreen(document.querySelector("#" + windowID), element.id);
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
var Bottombar = document.querySelector("#Bottombar");
function openScreen(element, buttonID) {
    element.style.display = "flex" ;
    element.style.animation = "windowOpen 0.3s ease forwards";
    if (buttonID) {
        let button = document.getElementById(buttonID);
        if (button) button.classList.add("desktopApp-active");
        
    }
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
    Bottombar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
    Bottombar.style.zIndex = biggestIndex + 1;
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
    <p contenteditable="true">Welcome to my web-OS, where
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
    title: "Top secret",
    date: "29/02/2026",
    content: ` 
    <p contenteditable="true">lul, nice try...</p>
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






    initializeWindow("Appwindow2");
    var Appwindow2Screen = document.querySelector("#Appwindow2");
    var Appwindow2ScreenClose = document.querySelector("#closeScreen2");

    Appwindow2ScreenClose.addEventListener("click", function() {
        closeScreen(Appwindow2Screen, "desktopApp2");
    });



    initializeWindow("Appwindow3");
    var Appwindow3Screen = document.querySelector("#Appwindow3");
    var Appwindow3ScreenClose = document.querySelector("#closeScreen3");

    Appwindow3ScreenClose.addEventListener("click", function() {
        closeScreen(Appwindow3Screen, "desktopApp3");
    });

initializeWindow("Appwindow4");
var Appwindow4Screen = document.querySelector("#Appwindow4");
var Appwindow4ScreenClose = document.querySelector("#closeScreen4");

Appwindow4ScreenClose.addEventListener("click", function() {
    closeScreen(Appwindow4Screen, "desktopApp4");
});
    
initializeWindow("Appwindow5");
var Appwindow5Screen = document.querySelector("#Appwindow5");
var Appwindow5ScreenClose = document.querySelector("#closeScreen5");

Appwindow5ScreenClose.addEventListener("click", function() {
    closeScreen(Appwindow5Screen, "desktopApp5");
});

function turnToDarkmode() {
    document.documentElement.classList.toggle("dark-mode");

}

initializeWindow("Appwindow6");
var Appwindow6Screen = document.querySelector("#Appwindow6");
var Appwindow6ScreenClose = document.querySelector("#closeScreen6");
Appwindow6ScreenClose.addEventListener("click", function() {
    closeScreen(Appwindow6Screen, "desktopApp6");
});

function opentab(tabs, tabName) {
var i, tabcontent, sidebarButton;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    sidebarButton = document.getElementsByClassName("sidebarButton");
    for(i=0; i < sidebarButton.length; i++){
        sidebarButton[i].className = sidebarButton[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    tabs.currentTarget.className += " active";
}