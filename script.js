    function updateTime() {
        var timeRN = new Date().toLocaleString();
        var timeNR = document.querySelector("#time");
        timeNR.innerHTML = timeRN;
    }

    updateTime();
    setInterval(updateTime, 1000);



    dragElement(document.getElementById("Appwindow"));

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


function openScreen(element) {
    element.style.display = "flex";
}
var AppwindowScreenOpen = document.querySelector("#openScreen");
AppwindowScreenOpen.addEventListener("click", function() {
    openScreen(AppwindowScreen);
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

function initializeWindow(element) {
    var screen = document.querySelector("#" + element.id);
    addWindowTapHandling(screen);
    makeClosable(elementName);
    dragElement(screen);
}
