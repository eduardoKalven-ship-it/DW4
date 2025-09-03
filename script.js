const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (e) => {
    e.preventDefault
    (
     checkInputs()
    )
})

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    
    if(usernameValue === '')
        {
            setForError(username, 'Campo obrigatório');
        }

        else

        {
            setForSucess(username);
        }
}
    
function setForError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message

    formControl.className = 'form-control error';
 }

function setForSucess(input){
    const formControl = input.parentElement;
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
    }