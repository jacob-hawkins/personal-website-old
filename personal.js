var open = false;
var cOpen = false;

function openNav() {
    if (open == false) {
        document.getElementById("mySidenav").style.width = "250px";
        open = true;
    }
}

function closeNav() {
    if (open == true) {

        document.getElementById("mySidenav").style.width = "0";
        open = false;
    }
}

function openCard() {
    if (cOpen == false) {
        document.getElementById("aboutCard").style.width = "87vw";
        document.body.style.overflow = "hidden";
        cOpen = true;
    }
}

function closeCard() {
    if (cOpen == true) {
        document.getElementById("aboutCard").style.width = "0";
        document.body.style.overflow = "scroll";
        console.log("overflow: visable");
        cOpen = false;
    }
}