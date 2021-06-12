(function ($) {
    'use strict'

    $(document).ready(function () {
        if ($('body').hasClass('homepage')) {
            initHomePage()
        }

        if ($('body').hasClass('contact-us')) {
            initContactUs()
        }

        $('#get-tour-dates').click(getTourDates)
    });

    function initHomePage() {
        $('.carousel').carousel({
            interval: 3000
        })
    }

    function initContactUs() {
        $('#contact-form').submit(function (event) {
            event.preventDefault();
            // if (!$('#contact-form').checkValidity()) {
            //     event.preventDefault()
            //     event.stopPropagation()
            // }

            if (isFormValid()) {
                saveFormDataToLocalStorage()
                var dataFromJson = JSON.parse(localStorage.getItem('contact-form-data'));
                var formDataString = 'email: ' + dataFromJson.email + '\nfirst name: ' + dataFromJson.firstName + '\nlast name: ' + dataFromJson.lastName + '\nregion: ' + dataFromJson.region + '\nsex: ' + dataFromJson.sex + '\npolicy is read: ' + dataFromJson.policyRead + '\n policy agreed: ' + dataFromJson.policyAgreed

                if (confirm(formDataString)) {
                    alert('form was submitted and reset')
                }
            }
        });
    }

    function isFormValid() {
        var emailRegex = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+$/;
        var latinLetterRegex = /^[a-z ,.'-]+$/i
        var formIsValid = true;

        var enteredEmail = $('#inputEmail').val();
        var enteredFirstname = $('#input-first-name').val();
        var enteredLastname = $('#input-second-name').val();

        // reset form validation - hide error/success messages
        $('#contact-form .is-invalid').removeClass('is-invalid');
        $('#contact-form .is-valid').removeClass('is-valid');

        // check email field
        if (!emailRegex.test(enteredEmail)) {
            $('#inputEmail').closest('.form-input-wrp').addClass('is-invalid')
            formIsValid = false;
        }

        // validate first/last name
        if (!latinLetterRegex.test(enteredFirstname)) {
            $('#input-first-name').closest('.form-input-wrp').addClass('is-invalid')
            formIsValid = false;
        }

        if (!latinLetterRegex.test(enteredLastname)) {
            $('#input-second-name').closest('.form-input-wrp').addClass('is-invalid')
            formIsValid = false;
        }

        // check if user sex selected:
        if (!$('[name="sexChoice"]:checked').val()) {
            $('[name="sexChoice"]').closest('.form-input-wrp').addClass('is-invalid')
            formIsValid = false;
        }

        // check if both checkboxes are checked:
        if (!$('#policy-read').prop('checked') || !$('#policy-agree').prop('checked')) {
            $('#policy-read').closest('.form-input-wrp').addClass('is-invalid')
            formIsValid = false;
        }

        $('#contact-form').addClass('was-validated')

        return formIsValid;
    }

    function saveFormDataToLocalStorage() {
        var email = $('#inputEmail').val();
        var firstName = $('#input-first-name').val();
        var lastName = $('#input-second-name').val();
        var region = $('#region').val();
        var sex = $('[name=sexChoice]:checked').val();
        var policyRead = $('#policy-read').prop('checked');
        var policyAgreed = $('#policy-agree').prop('checked');

        var json = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            region: region,
            sex: sex,
            policyRead: policyRead,
            policyAgreed: policyAgreed
        }

        localStorage.setItem('contact-form-data', JSON.stringify(json))
    }

    function getTourDates() {
        fetch('./tour-dates.txt').then(function(response) {
            return response.json()
        }).then(function(data) {
            data.forEach(function(tourItem) {
                $('.tours-list li[data-city="' + tourItem.cityKey + '"]').addClass('has-date')
                $('.tours-list li[data-city="' + tourItem.cityKey + '"] .rounded-pill').html(tourItem.date);
            });
        })
    }
})(jQuery)