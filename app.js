let comfirm=document.querySelector('button')
let inputField=document.querySelectorAll('input')
let errors=document.querySelectorAll('.error')
let complete_notif = document.getElementById('complete')
let test=false

let regex = new RegExp(/[0-9]{4}\s\s[0-9]{4}\s\s[0-9]{4}\s\s[0-9]{4}/, 'i')

inputField[1].addEventListener('focusout', () =>{
	let cardnum = inputField[1].value
	var result = ''
	for (let i = 0; i < cardnum.length; i++) {
		result += cardnum.charAt(i)
		if ((i + 1) % 4 === 0 && i !== cardnum.length - 1) {
			result += "  "
		}
	}
	inputField[1].value = result
	if (regex.test(inputField[1].value)) {
		console.log('its okay');
		errors[1].style.display='none'
	} else {
		errors[1].textContent ='wrong format, numbers only'
		console.log('not okay');
		errors[1].style.display = 'block'
	}
	console.log(result);
})



comfirm.onclick=(e)=>{
	e.preventDefault()
	inputField.forEach(input=>{
		if (input.value=="") {
			input.style.outline =" 2px solid var(--error)"
		}else{
			input.style.outline = " 2px solid var(--Lgv)"
		}
	})
	if (inputField[3].value == "" || inputField[2].value == "" || inputField[4].value == "" || inputField[0].value == "") {
		errors[2].style.display = 'block'
		errors[0].style.display = 'block'
		errors[3].style.display = 'block'
		if (inputField[1].value == "") {
			errors[1].textContent = "can't be blank"
			errors[1].style.display = 'block'
		}
	}else{
		errors[1].style.display = 'none'
		errors[3].style.display = 'none'
		errors[2].style.display = 'none'
		errors[0].style.display = 'none'
		if (regex.test(inputField[1].value)) {
			errors[1].style.display = 'none'
			complete_notif.classList.replace('hide', 'show')
		} else {
			errors[1].textContent = 'wrong format, numbers only'
			errors[1].style.display = 'block'
		}
		
	}
}