    function updateTime() {
        var timeRN = new Date().toLocaleString();
        var timeNR = document.querySelector("#time");
        timeNR.innerHTML = timeRN;
    }

    updateTime();
    setInterval(updateTime, 1000);



    dragElement(document.getElementById("begin"));

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




var beginScreen = document.querySelector("#begin");
function closeScreen(element) { 
    element.style.display = "none";
}

var beginScreenClose = document.querySelector("#closeScreen");

beginScreenClose.addEventListener("click", function() {
    closeScreen(beginScreen);
});


function openScreen(element) {
    element.style.display = "flex";
}
var beginScreenOpen = document.querySelector("#openScreen");
beginScreenOpen.addEventListener("click", function() {
    openScreen(beginScreen);
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
        openScreen(beginScreen);
    }
    else {
        selectApp(element);
    }
}