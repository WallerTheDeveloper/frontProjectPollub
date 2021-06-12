(function($) {
    'use strict'

    $(document).ready(function () {
        if ($('body').hasClass('homepage')) {
            initHomePage()
        }

        if ($('body').hasClass('contact-us')) {
            initContactUs()
        }
    });

    function initHomePage() {
        $('.carousel').carousel({
            interval: 3000
        })
    }

    function initContactUs() {
        $('#contact-form').submit(function(event) {
            event.preventDefault();
            // if (!$('#contact-form').checkValidity()) {
            //     event.preventDefault()
            //     event.stopPropagation()
            // }

            if (isFormValid()) {
                alert('form is valid')
            } else {
                alert('has error')
            }
        });
    }

    function isFormValid() {
        var emailRegex = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
        var latinLetterRegex = /[a-zA-Z]/;
        var formIsValid = true;

        var enteredEmail = $('#inputEmail').val();
        var enteredFirstname = $('#input-first-name').val();
        var enteredLastname = $('#input-second-name').val();

        // check email field
        if (!emailRegex.test(enteredEmail)) {
            formIsValid = false;
        }

        // validate first/last name
        if (!latinLetterRegex.test(enteredFirstname)) {
            formIsValid = false;
        }

        if (!latinLetterRegex.test(enteredLastname)) {
            formIsValid = false;
        }

        // check if user sex selected:
        if (!$('[name="sexChoice"]:checked').val()) {
            formIsValid = false;
        }

        // check if both checkboxes are checked:
        if (!$('#policy-read').prop('checked') || !$('#policy-agree').prop('checked')) {
            formIsValid = false;
        }

        $('#contact-form').addClass('was-validated')

        return formIsValid;
    }
})(jQuery)