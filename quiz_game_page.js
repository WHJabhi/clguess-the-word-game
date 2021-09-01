player1_name=localStorage.getItem("Player1");
player2_name=localStorage.getItem("Player2");

console.log(player1_name); 
console.log(player2_name);

player1_score=0; 
player2_score=0;

document.getElementById("player1_score").innerHTML=player1_score; 
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player1_name").innerHTML=player1_name; 
document.getElementById("player2_name").innerHTML=player2_name;

document.getElementById("questionplayer").innerHTML="Question Turn-" + player1_name; 
document.getElementById("answerplayer").innerHTML="Answer Turn-" +player2_name;

var question_turn = "player1";
var answer_turn = "player2"

function send(){ 
var number1= document.getElementById("number1").value; 
var number2= document.getElementById("number2").value; 
actual_answer= parseInt(number1) * parseInt(number2); 
question_number="<h4>"+ number1+ "X" + number2 + "</h4>"; 
input_box= "<br> Answer: <input type='text' id='input_check_box'> "; 
check_btn= "<br><br> <button class='btn btn-info' onclick='check()'> Check Answer!</button> "; 
row= question_number+ input_box+ check_btn; document.getElementById("output").innerHTML=row; 
document.getElementById("number1").value=""; 
document.getElementById("number2").value=""; 
if(question_turn=="player1") { 
question_turn="player2"; 
document.getElementById("questionplayer").innerHTML="Question turn- "+ player2_name; 
answer_turn="Player1"; 
document.getElementById("answerplayer").innerHTML="Answer turn- "+player1_name; 
} 
else { 
question_turn= "player1"; 
document.getElementById("questionplayer").innerHTML="Question turn- "+ player1_name; answer_turn="Player2"; 
document.getElementById("answerplayer").innerHTML="Answer turn- "+player2_name; 
} 
}

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn=="player1") { 
        question_turn="player2"; 
        document.getElementById("questionplayer").innerHTML="Question turn- "+ player2_name; 
        answer_turn="Player1"; 
        document.getElementById("answerplayer").innerHTML="Answer turn- "+player1_name; 
        } 
        else { 
        question_turn= "player1"; 
        document.getElementById("questionplayer").innerHTML="Question turn- "+ player1_name; answer_turn="Player2"; 
        document.getElementById("answerplayer").innerHTML="Answer turn- "+player2_name; 
        } 
        document.getElementById("output").innerHTML = "";
}