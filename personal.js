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