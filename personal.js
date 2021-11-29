var open = false;

var cOpen = false;
var cOpen1 = false;
var cOpen2 = false;

function openNav() {
    if (open == false) {
        if (cOpen == true) { closeCard(); }
        if (cOpen1 == true) { closeCard1(); }
        if (cOpen2 == true) { closeCard2(); }

        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.overflow = "hidden";
        open = true;
    }
}

function closeNav() {
    if (open == true) {
        document.getElementById("mySidenav").style.width = "0px";
        document.body.style.overflow = "scroll";
        open = false;
    }
}

function openCard() {
    if (window.innerWidth > 640) {
        if (open == true) { closeNav(); }
        if (cOpen1 == true) { closeCard1(); }
        if (cOpen2 == true) { closeCard2(); }

        if (cOpen == false) {
            document.getElementById("aboutCard").style.width = "87vw";
            document.getElementById("aboutCard").style.border = "white 1px solid";

            document.body.style.overflow = "hidden";
            cOpen = true;
        }
    } else {
        if (cOpen1 == true) {
            document.getElementById("job").style.height = "174px";
            document.getElementById("job").innerHTML = '<h3>Job & Volunteer Experience</h3>';
            cOpen1 = false;
        }

        if (cOpen2 == true) {
            document.getElementById("project").style.height = "127px";
            document.getElementById("project").innerHTML = '<h3>Projects</h3>';
            cOpen2 = false;
        }

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
        if (open == true) { closeNav(); }
        if (cOpen == true) { closeCard(); }
        if (cOpen2 == true) { closeCard2(); }

        if (cOpen1 == false) {
            document.getElementById("jobCard").style.width = "87vw";
            document.getElementById("jobCard").style.border = "white 1px solid";

            document.body.style.overflow = "hidden";
            cOpen1 = true;
        }
    } else {
        if (cOpen == true) {
            document.getElementById("about").style.height = "127px";
            document.getElementById("about").innerHTML = '<h3>About Me</h3>';
            cOpen = false;
        }

        if (cOpen2 == true) {
            document.getElementById("project").style.height = "127px";
            document.getElementById("project").innerHTML = '<h3>Projects</h3>';
            cOpen2 = false;
        }

        if (cOpen1 == false) {
            document.getElementById("job").style.height = "2400px";
            document.getElementById("job").innerHTML =
                '<h3 >Job & Volunteer Experience</h3>' +
                '<div class="cardP--mobile">' +
                '<h6 class="cardP--Title">TJ Maxx</h6>' +
                '<p>Retail Associate </p>' +
                '<blockquote>' +
                '<p>• Responsible for and assisted in the operation of the Men’s, Kid’s and Home department making sure it' +
                ' was well organized and clean. <br>' +
                '• Assisted in the processing and putting out of furniture and luggage. <br>' +
                '• Provided a fast and efficient checkout' + 'experience as a cashier. <br>' +
                '• Maintained a consistent customer experience through the COVID-19 pandemic.</p>' +
                '</blockquote>' +

                '<h6 class="cardP--Title">Carolina Mountain Mission</h6><br>' +
                '<blockquote>' +
                '<p>• Worked with local community members in need building decks and ramps, painting houses, and' +
                'landscaping.<br>' +
                '• Participated in a large-scale food pantry serving customers being responsible for walking' +
                'customers through the service line and stationed at specific food stations to pass out food to the' +
                'customers.</p >' +
                '</blockquote >' +

                '<h6 class="cardP--Title" > Compassion Ministries</h6 > <br>' +
                '<blockquote>' +
                '<p>• Participated in multiple large-scale food pantries in the Knoxville and greater East Tennessee area' +
                'serving hundreds of families and was responsible for specific food stations to pass out food to the' +
                'customers.<br>' +
                '• Organized, cleaned, and restocked the main location food pantry for more efficient and better' +
                'operation when creating food boxes to pass out.</p>' +
                '</blockquote>' +
                '</div>';

            cOpen1 = true;
        } else if (cOpen1 == true) {
            document.getElementById("job").style.height = "174px";
            document.getElementById("job").innerHTML = '<h3>Job & Volunteer Experience</h3>';
            cOpen1 = false;
        }
    }
}

function closeCard1() {
    if (window.innerWidth > 640) {
        if (cOpen1 == true) {
            document.getElementById("jobCard").style.width = "0";
            document.getElementById("jobCard").style.border = "none";
            document.body.style.overflow = "scroll";
            cOpen1 = false;
        }
    }
}

function openCard2() {
    if (window.innerWidth > 640) {
        if (open == true) { closeNav(); }
        if (cOpen == true) { closeCard(); }
        if (cOpen1 == true) { closeCard1(); }

        if (cOpen2 == false) {
            document.getElementById("projectCard").style.width = "87vw";
            document.getElementById("projectCard").style.border = "white 1px solid";

            document.body.style.overflow = "hidden";
            cOpen2 = true;
        }
    } else {
        if (cOpen == true) {
            document.getElementById("about").style.height = "127px";
            document.getElementById("about").innerHTML = '<h3>About Me</h3>';
            cOpen = false;
        }

        if (cOpen1 == true) {
            document.getElementById("job").style.height = "174px";
            document.getElementById("job").innerHTML = '<h3>Job & Volunteer Experience</h3>';
            cOpen1 = false;
        }

        if (cOpen2 == false) {
            document.getElementById("project").style.height = "200px";
            document.getElementById("project").innerHTML =
                '<h3>Projects</h3>' +
                '<p class="cardP--mobile" style="text-align: center;">coming soon</p>';

            cOpen2 = true;
        } else if (cOpen2 == true) {
            document.getElementById("project").style.height = "127px";
            document.getElementById("project").innerHTML = '<h3>Projects</h3>';
            cOpen2 = false;
        }
    }
}

function closeCard2() {
    if (window.innerWidth > 640) {
        if (cOpen2 == true) {
            document.getElementById("projectCard").style.width = "0";
            document.getElementById("projectCard").style.border = "none";
            document.body.style.overflow = "scroll";
            cOpen2 = false;
        }
    }
}