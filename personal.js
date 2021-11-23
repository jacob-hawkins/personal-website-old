var open = false;

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
    if (open == false) {
        document.getElementById("aboutCard").style.width = "250px";
        open = true;
    }
}

function closeCard() {
    if (open == true) {

        document.getElementById("aboutCard").style.width = "0";
        open = false;
    }
}