const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});

const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const cityone = document.getElementById('cityone');
const citytwo = document.getElementById('citytwo');
const date = document.getElementById('date');
const time = document.getElementById('time');
const people = document.getElementById('people');

form.addEventListener('submit', e => {
	e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const phoneValue = username.value.trim();
    const cityoneValue = username.value.trim();
    const citytwoValue = username.value.trim();
    const dateValue = username.value.trim();
    const timeValue = username.value.trim();
    const peopleValue = username.value.trim();

    if(usernameValue === '') {
		setErrorFor(username, 'Имя не заполнено');
	} else {
		setSuccessFor(username);
    }
    
    if(phoneValue === '') {
		setErrorFor(phone, 'Телефон не заполнен');
	} /*else if (!isPhone(phoneValue)) {
		setErrorFor(phone, 'Неверно набран номер телефона');
	}*/ else {
		setSuccessFor(phone);
    }

    if(cityoneValue === '') {
		setErrorFor(cityone, 'Неправильно заполнен город отправления');
	} else {
		setSuccessFor(cityone);
    }

    if(citytwoValue === '') {
		setErrorFor(citytwo, 'Неправильно заполнен город прибытия');
	} else {
		setSuccessFor(citytwo);
    }

    if(dateValue === '') {
		setErrorFor(date, 'Дата не заполнена');
    } else {
        setSuccessFor(date);
    }

    if(timeValue === '') {
		setErrorFor(time, 'Время не заполнено');
	} else {
		setSuccessFor(time);
    }

    if(peopleValue === '') {
		setErrorFor(people, 'Количество человек не заполнено');
	} else {
		setSuccessFor(people);
    }
}
    function isPhone(phone) {
      return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
   }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
        
    
    /*не получается, выдает ошибку при любом вводе 
   Valid formats:

    (123) 456-7890
    (123)456-7890
    123-456-7890
    123.456.7890
    1234567890
    +31636363634
    075-63546725*/

