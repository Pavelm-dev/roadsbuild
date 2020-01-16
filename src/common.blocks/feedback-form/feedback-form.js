/* eslint-disable */
let feedbackCallButtons = document.querySelectorAll('.feedback-button'),
    feedbackPopup = document.querySelector('.feedback-form'),
    feedbackCancel = document.querySelector('.feedback-form__cancel-button'),
    feedbackInputFields = document.querySelectorAll('.feedback-form__input'),
    feedbackSubmit = document.querySelector('.feedback-form__submit button'),
    feedbackErrors,
    overlay = document.querySelector('.overlay');

//Вызов модального окна Обратная связть
for (let i = 0; i < feedbackCallButtons.length ; i++) {
    feedbackCallButtons[i].addEventListener('click', function () {
        feedbackPopup.classList.add('is-active');
        document.body.classList.add('modal-opened');
        overlay.classList.add('is-active');
    })
}

//Закрытие модального окна Обратная связь по нажатию на крестик
feedbackCancel.addEventListener('click', function () {
    feedbackPopup.classList.remove('is-active');
    document.body.classList.remove('modal-opened');
    overlay.classList.remove('is-active');
});

//Валидация обязательных форм при отправке
feedbackSubmit.addEventListener('click', function () {
    for (let i = 0; i < feedbackInputFields.length ; i++) {
        if (feedbackInputFields[i].hasAttribute('required'))  {
            if (feedbackInputFields[i].value == 0) {
                feedbackInputFields[i].classList.add('error');
                feedbackSubmit.style.pointerEvents = 'none';
                feedbackSubmit.setAttribute('disabled', 'disabled');
            }
            feedbackInputFields[i].addEventListener('change', function () {
                feedbackErrors = document.querySelectorAll('.error');
                if (feedbackInputFields[i].value !== 0) {
                    feedbackInputFields[i].classList.remove('error');
                    feedbackErrors = document.querySelectorAll('.error');
                    if (feedbackErrors.length == 0) {
                        feedbackSubmit.style.pointerEvents = 'auto';
                        feedbackSubmit.removeAttribute('disabled', 'disabled');
                    }
                }
            })
        }
    }
});



/*
 if (feedbackInputFields[i].hasAttribute('required'))  {
            if (feedbackInputFields[i].value == 0) {
                this.style.pointerEvents = 'none';
                feedbackInputFields[i].classList.add('error');
            }
            feedbackInputFields[i].addEventListener('change', function () {
                if (feedbackInputFields[i].value !== 0) {
                    feedbackInputFields[i].classList.remove('error')
                }
            })
        }
 */