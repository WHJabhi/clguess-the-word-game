function addUser(){
    var Player_1 = document.getElementById("player1_name_input").value;
    var Player_2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("Player1",Player_1);
    localStorage.setItem("Player2",Player_2);
    window.location = ("quiz_game_page.html");
}