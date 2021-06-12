/*!
* Start Bootstrap - Modern Business v5.0.0 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Example starter JavaScript for disabling form submissions if there are invalid fields

let email = document.getElementById("inputEmail").value;
let firstName = document.getElementById("input-first-name").value;
let secondName = document.getElementById("input-second-name").value;
/*
function checkInput(input_id, regex) {
    //Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
    //pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
    //Parametry funkcji:
    //pole_id - id sprawdzanego pola tekstowego
    //obiektRegex - wyrażenie regularne
    //---------------------------------
    var inputObject = document.getElementById(input_id);
    if (!regex.test(inputObject.value)) return (false);
    else return (true);
}

function emailValidation() {
    emailObject = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    if (!checkInput("inputEmail", emailObject)) {
        document.getElementById("email_error").innerHTML = "Wpisz poprawnie email!";
    } else document.getElementById("email_error").innerHTML = "";
}

function checkAll() {
    return emailValidation();
}
*/

(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
    })
});
