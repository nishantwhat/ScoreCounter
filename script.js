let score1 = 0;
let score2 = 0;
let w_score = 5;

function increaseScore(player) {
    if (player === 1) {
        score1++;
        document.getElementById("score1").innerText = score1;
    } else if (player === 2) {
        score2++;
        document.getElementById("score2").innerText = score2;
    }
}

function resetScores() {
    score1 = 0;
    score2 = 0;
    document.getElementById("score1").innerText = score1;
    document.getElementById("score2").innerText = score2;
}
// function win(){
//     if (score1===w_score-1 && score2===w_score-1){
//         w_score++;
//     }
//     else if (score1===w_score) {
//         document.getElementById("score1").innerText = "WINNER";
//     }
//     else if (score2===w_score){
//         document.getElementById("score2").innerText = "WINNER";
//     }
// }