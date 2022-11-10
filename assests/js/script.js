/*$(function () {
    //timer countdown

    let totalTime = 200;
    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval(function () {
        counter++;
        min = Math.floor((totalTime - counter) / 60);
        sec = totalTime - min * 60 - counter;

        $(".timerBox span").text(min + ":" + sec);

    
        
    }, 1000);  
});*/
const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementsByClassName("timerbox");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = '${minutes}: ${seconds}';
    time--;

}





const username = document.getElementById('user-input');
const feedback = document.getElementById('feedback');


function validateUserInput(user) {
    
    let errorMsg = '';

    
    if (user == '') {

        errorMsg = "Please enter a Username";
    
     
    } else if (user.length <= Number(3)) {

        errorMsg = "Username must be valid";
    } 

    
    if (errorMsg != '') {
        
        feedback.innerHTML = errorMsg;
        

        username.setAttribute('data-has-error', 'true');
        
        return false;
    }
    
    return true;
}


function needUserName() {

    let user = username.value;

    if (validateUserInput(user)) { 
        
        window.location.replace(`quiz.html?user=${user}`);     
    }
}
