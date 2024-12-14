// check password is matching
const password = document.querySelector('input[name = "password"');
const confirm = document.querySelector('input[name = "confirm password"');

let check = function() {
    if(password.value === confirm.value) {
        confirm.style.border = '1px solid green';
        password.style.border = '1px solid green';
    } else {
        confirm.style.border = '1px solid red';
        password.style.border = '1px solid red';
    }
}

// display thank you page after submit form 

document.getElementById('myForm').addEventListener('submit', function(e){
    e.preventDefault();
    setTimeout(function() {
        window.location.href = 'thank-you.html';
    }, 1000);
})









