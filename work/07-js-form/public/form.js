"use strict";

(function() {
    const formEl = document.querySelector('form');
    const nameEl = document.querySelector(".signup-label-name");
    const emailEl = document.querySelector(".signup-label-email");
    const confirmEmailEl = document.querySelector(".signup-label-confirm-email");
    const wantsSpamEl = document.querySelector(".signup-label-wants-spam");
    const tierEl = document.querySelector(".signup-label-tier");

    const state = {
        name: '',
        email: '',
        confirmEmail: '',
        wantsSpam: false,
        tier: '1'
    };

    // use trim() to remove whitespace to prevent the user from submitting empty values (input with only whitespace)
    function isNameValid(name) {
        return name.trim().length > 0;
    }

    function isEmailValid(email) {
        return email.trim().length > 0;
    }

    function isConfirmEmailValid(email, confirmEmail) {
        return email === confirmEmail && confirmEmail.length > 0;
    }

    function validateName() {
        const isValid = isNameValid(state.name);
        const errorEl = nameEl.nextElementSibling;
        if (!isValid) {
            nameEl.parentElement.classList.add('error');
            errorEl.innerText = 'Name is required';
        } else {
            nameEl.parentElement.classList.remove('error');
            errorEl.innerText = '';
        }
        return isValid;
    }

    function validateEmail() {
        const isValid = isEmailValid(state.email);
        const errorEl = emailEl.nextElementSibling;
        if (!isValid) {
            emailEl.parentElement.classList.add('error');
            errorEl.innerText = 'Email is required';
        } else {
            emailEl.parentElement.classList.remove('error');
            errorEl.innerText = '';
        }
        return isValid;
    }

    function validateConfirmEmail() {
        const isValid = isConfirmEmailValid(state.email, state.confirmEmail);
        const errorEl = confirmEmailEl.nextElementSibling;
        if (!isValid) {
            confirmEmailEl.parentElement.classList.add('error');
            errorEl.innerText = 'Emails must match';
        } else {
            confirmEmailEl.parentElement.classList.remove('error');
            errorEl.innerText = '';
        }
        return isValid;
    }

    nameEl.addEventListener('input', e => {
        state.name = e.target.value;
        validateName();
    });

    emailEl.addEventListener('input', e => {
        state.email = e.target.value;
    });

    confirmEmailEl.addEventListener('input', e => {
        state.confirmEmail = e.target.value;
    });
    
    wantsSpamEl.addEventListener('change', e => {
        state.wantsSpam = e.target.checked;
    });
    
    tierEl.addEventListener('change', e => {
        state.tier = e.target.value;
    });

    formEl.addEventListener('submit', e => {
        e.preventDefault();
        
        let isValid = true;
        
        const nameValid = validateName();
        const emailValid = validateEmail();
        const confirmEmailValid = validateConfirmEmail();
        
        isValid = nameValid && emailValid && confirmEmailValid;

        if (isValid) {
            e.target.submit();
        }
    });
})();