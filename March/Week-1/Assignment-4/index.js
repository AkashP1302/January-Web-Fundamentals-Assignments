
var countOne = 0;
function like1() {
    countOne++;
    render1();
}
function dislike1() {
    countOne--;
    render1();
}
function render1() {

    var updown = document.getElementById("demo1");
    updown.innerHTML = countOne;
}
var countTwo = 0;

function like2() {
    countTwo++;
    render2();
}
function dislike2() {
    countTwo--;
    render2();
}
function render2() {

    var updown = document.getElementById("demo2");
    updown.innerHTML = countTwo;
}

var countThree = 0;

function like3() {
    countThree++;
    render3();
}
function dislike3() {
    countThree--;
    render3();
}
function render3() {

    var updown = document.getElementById("demo3");
    updown.innerHTML = countThree;
}

