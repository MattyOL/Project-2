const username = document.getElementById('user-input');
const feedback = document.getElementById('feedback');





function validateUserInput(user) {
    
    let errorMsg = '';

    
    if (user == '') {

        errorMsg = "Please enter a Username";
    
     
    } else if (user.length <= Number(2)) {

        errorMsg = "Username must have 3 or more characters";
    } 

    
    if (errorMsg != '') {
        
        feedback.innerHTML = errorMsg;
        

        username.setAttribute('data-has-error', 'true');
        
        return false;
    }
    
    return true;
}