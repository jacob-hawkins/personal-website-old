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
        document.getElementById("mySidenav").style.width = "0px";
        open = false;
    }
}

function openCard() {
    if (window.innerWidth > 640) {
        if (cOpen == false) {
            document.getElementById("aboutCard").style.width = "87vw";
            document.getElementById("aboutCard").style.border = "white 1px solid";

            document.body.style.overflow = "hidden";
            cOpen = true;
        }
    } else {
        if (cOpen == false) {
            document.getElementById("about").style.height = "1000px";
            document.getElementById("about").innerHTML =
                '<h3>About Me</h3>' +
                '<img src="photos/IMG_9008.jpg" alt="me" id="aboutImg--mobile">' +
                '<p class="aboutP--mobile">Hello! My name is Jacob Hawkins! I am a computer science major at the University of Tennessee. I am apart of the Grand Cooke Engineering Honors Program and will soon be working with the upcoming web development club here at UT.</p>' +
                '<p class="aboutP--mobile">I am from Knoxville, Tennessee and have been a Tennessee fan since I was born. In my free time, I enjoy offroad driving, spikeball, and fishing.</p>';

            cOpen = true;
        } else if (cOpen == true) {
            document.getElementById("about").style.height = "127px";
            document.getElementById("about").innerHTML = '<h3>About Me</h3>';
            cOpen = false;
        }
    }
}

function closeCard() {
    if (window.innerWidth > 640) {
        if (cOpen == true) {
            document.getElementById("aboutCard").style.width = "0";
            document.getElementById("aboutCard").style.border = "none";
            document.body.style.overflow = "scroll";
            cOpen = false;
        }
    }
}

function openCard1() {
    if (window.innerWidth > 640) {
        if (cOpen == false) {
            document.getElementById("jobCard").style.width = "87vw";
            document.getElementById("jobCard").style.border = "white 1px solid";

            document.body.style.overflow = "hidden";
            cOpen = true;
        }
    } else {
        if (cOpen == false) {
            document.getElementById("job").style.height = "1000px";
            document.getElementById("job").innerHTML =
                '<h3>About Me</h3>' +
                '<img src="photos/IMG_9008.jpg" alt="me" id="aboutImg--mobile">' +
                '<p class="aboutP--mobile">Hello! My name is Jacob Hawkins! I am a computer science major at the University of Tennessee. I am apart of the Grand Cooke Engineering Honors Program and will soon be working with the upcoming web development club here at UT.</p>' +
                '<p class="aboutP--mobile">I am from Knoxville, Tennessee and have been a Tennessee fan since I was born. In my free time, I enjoy offroad driving, spikeball, and fishing.</p>';

            cOpen = true;
        } else if (cOpen == true) {
            document.getElementById("job").style.height = "127px";
            document.getElementById("job").innerHTML = '<h3>About Me</h3>';
            cOpen = false;
        }
    }
}

function closeCard1() {
    if (window.innerWidth > 640) {
        if (cOpen == true) {
            document.getElementById("jobCard").style.width = "0";
            document.getElementById("jobCard").style.border = "none";
            document.body.style.overflow = "scroll";
            cOpen = false;
        }
    }
}

function openCard2() {
    if (window.innerWidth > 640) {
        if (cOpen == false) {
            document.getElementById("projectCard").style.width = "87vw";
            document.getElementById("projectCard").style.border = "white 1px solid";

            document.body.style.overflow = "hidden";
            cOpen = true;
        }
    } else {
        if (cOpen == false) {
            document.getElementById("project").style.height = "1000px";
            document.getElementById("project").innerHTML =
                '<h3>Projects</h3>' +
                '<p>coming soon</p>';

            cOpen = true;
        } else if (cOpen == true) {
            document.getElementById("project").style.height = "127px";
            document.getElementById("project").innerHTML = '<h3>About Me</h3>';
            cOpen = false;
        }
    }
}

function closeCard2() {
    if (window.innerWidth > 640) {
        if (cOpen == true) {
            document.getElementById("projectCard").style.width = "0";
            document.getElementById("projectCard").style.border = "none";
            document.body.style.overflow = "scroll";
            cOpen = false;
        }
    }
}