var score = 0, num = 0, count = 0, t, order = 1;
var questions;
list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var selected = [];
var answers = [];
var second =  0;

$(document).ready(function(){
    $.ajax({
        url: 'data.json',
        method: 'GET',
        dataType:'json',
        success: function(response){
            questions = response;
        }
    });
});

function showhome() {
    document.getElementById("one").style.display = "block";
    document.getElementById("three").style.display = "none";
    score = 0, num = 0, count = 0;
    list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    selected = [];
    answers = [];
}

function hidehome5() {
    num = 5;
    order = 1;
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "block";
    change();
    countdown();
}

function hidehome10() {
    num = 10;
    order = 1;
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "block";
    change();
    countdown();
}

function hidehome15() {
    num = 15;
    order = 1;
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "block";
    change();
    countdown();
}

function clicka(){
    selected.push("a");
    t = 21;
    change();
}

function clickb(){
    selected.push("b");
    t = 21;
    change();
}

function clickc(){
    selected.push("c");
    t = 21;
    change();
}

function clickd(){
    selected.push("d");
    t = 21;
    change();
}

function countdown(){
    t -= 1;
    if (t <= 0){
        change();
    }
    if (t > 22){
        return;
    }
    document.getElementById("time").innerHTML = t.toString();
    setTimeout("countdown()", 1000);
    
}

function remove(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function change() {
    t = 21;
    var i = Math.floor(Math.random() * list.length-1);
    document.getElementById("image").innerHTML = questions[list[i]].img;
    document.getElementById("q").innerHTML = questions[list[i]].q;
    document.getElementById("a").innerHTML = questions[list[i]].a;
    document.getElementById("b").innerHTML = questions[list[i]].b;
    document.getElementById("c").innerHTML = questions[list[i]].c;
    document.getElementById("d").innerHTML = questions[list[i]].d;
    count++;

    document.getElementById("order").innerHTML = order;
    order++;
    answers.push(questions[list[i]].ans);

    remove(list, list[i]);


    if (list.length <= 0 && num == 15){
        calscore();
    }
    if (list.length <= 5 && num == 10){
        calscore();
    }
    if (list.length <= 10 && num == 5){
        calscore();
    }
} 

function calscore(){
    t = 30;
    for (var i = 0; i < selected.length; i++) {
        if (selected[i] == answers[i]){
            score++;
        }
    }

    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "block";
    document.getElementById("finalscore").innerHTML = score.toString();
}