let arr1 = ["Ramesh", "Suresh", "Mahesh", "Rajesh", "Rahul", "Rabi", "Animesh", "Prakash"];
let currentIndex = 0;
let points = 0;
let timer;

document.getElementById('display').innerHTML = arr1[currentIndex];

function Update() {
    clearTimeout(timer);  // clear previous timer
    timer = setTimeout(decrementPoints, 5000);  // set new timer

    var a = document.getElementById("textinput").value;
    if (a === arr1[currentIndex]) {
        points++;
        currentIndex++;
        document.getElementById('textinput').value = '';
        if (currentIndex < arr1.length) {
            document.getElementById('display').innerHTML = arr1[currentIndex];
        } else {
            document.getElementById('message').innerHTML = "All Names Displayed";
            document.getElementById('textinput').disabled = true;
        }
        document.getElementById('points').innerHTML = "Points: " + points;
    }
}

function decrementPoints() {
    points--;
    if (points < 0) points = 0;
    document.getElementById('points').innerHTML = "Points: " + points;
}


