const form = document.querySelector('form');
const success = document.querySelector('.success');
// const cardOne = document.querySelector('.form');

const Name = document.querySelector('.name');
const number = document.querySelector('.number');
const spanNumber = document.querySelector('.span-number');
const dateMonth = document.querySelector('.date-month');
const dateYear = document.querySelector('.date-year');
const spanDate = document.querySelector('.span-date');
const cvc = document.querySelector('.cvc');
const spanCvc = document.querySelector('.span-cvc');
const resultName = document.querySelector('.result-name');
const spanName = document.querySelector('.span-name');
const resultNumber = document.querySelector('.result-number');
const resultCvc = document.querySelector('.result-cvc');
const resultDateYear = document.querySelector('.result-year');
const resultDateMonth = document.querySelector('.result-month');

let regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)[.]([a-z]{2,4})$/;

form.addEventListener('submit', e => {
	e.preventDefault();

	//NAME VALIDATION
	// let nameRegex = /^[A-Za-z][A-Za-z0-9_]{5,30}$/;

	let nameRegex = /(\w.+\s).{6,30}/;

	if (Name.value === '') {
		const html = `
        whoops, you forgot to add your name`;

		spanName.innerHTML = html;

		Name.classList.add('wrong');
	} else if (Name.value.match(nameRegex)) {
		spanName.innerHTML === '';

		resultName.innerHTML = Name.value;
		Name.classList.add('display');
		Name.classList.remove('wrong');
	} else {
		spanName.innerHTML = 'invalid name';
		Name.classList.add('wrong');
	}

	//NUMBER VALIDATION

	let numberRegex = /^[0-9]{16}$/;
	// let numberRegex = /^@\d{16,17}$/;

	if (number.value.match(numberRegex)) {
		spanNumber.innerHTML === '';
		// number.style.borderColor = 'hsl(279, 6%, 55%)';
		resultNumber.innerHTML = number.value;

		number.classList.remove('wrong');
		number.classList.add('display');
	} else if (number.value === '') {
		resultNumber.innerHTML = '0000 0000 0000 0000';
		const html = `
        Wrong format or incomplete`;

		spanNumber.innerHTML = html;

		number.classList.add('wrong');
	} else {
		const html = `
        Wrong format or incomplete`;

		spanNumber.innerHTML = html;

		number.classList.add('wrong');
		resultNumber.innerHTML = number.value;
	}

	//MONTH VALIDATION
	let monthRegex = /^(0[1-9]|1[12])$/;

	if (dateMonth.value.match(monthRegex)) {
		spanDate.innerHTML = '';

		resultDateMonth.innerHTML = dateMonth.value;
		// dateMonth.style.borderColor = 'none';
		dateMonth.classList.remove('wrong');
		dateMonth.classList.add('display');
	} else if (dateMonth.value === '') {
		const html = `
		can't be blank`;
		spanDate.innerHTML = html;

		dateMonth.classList.add('wrong');
	} else {
		spanDate.innerHTML = 'not correct';
		// dateMonth.style.borderColor = 'crimson';
	}

	//YEAR VALIDATION
	let yearRegex = /^\d{2}$/;

	if (dateYear.value.match(yearRegex)) {
		spanDate.innerHTML = '';

		resultDateYear.innerHTML = dateYear.value;

		dateYear.classList.remove('wrong');

		dateYear.classList.add('display');
	} else if (dateYear.value === '') {
		const html = `
		can't be blank`;
		spanDate.innerHTML = html;

		dateYear.classList.add('wrong');
	} else {
		spanDate.innerHTML = 'not correct';
		// dateYear.style.borderColor = 'crimson';
	}

	//CVC VALIDATION

	let cvcRegex = /^[0-9]{3}$/;

	if (cvc.value.match(cvcRegex)) {
		// cvc.style.borderColor = 'none';
		spanCvc.innerHTML = '';
		resultCvc.innerHTML = cvc.value;
		cvc.classList.remove('wrong');
		cvc.classList.add('display');
	} else if (cvc.value == '') {
		// spanNumber.style.display = 'none';
		const html = `
            can't be blank`;

		spanCvc.innerHTML = html;

		cvc.classList.add('wrong');
		resultCvc.innerHTML = '000';
	} else {
		spanDate.innerHTML = 'not correct';
		// cvc.style.borderColor = 'crimson';
	}

	if (
		Name.classList.contains('display') &&
		number.classList.contains('display') &&
		dateMonth.classList.contains('display') &&
		dateYear.classList.contains('display') &&
		cvc.classList.contains('display')
	) {
		form.style.display = 'none';
		success.style.display = 'block';
	}
});
