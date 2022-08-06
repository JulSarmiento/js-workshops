const btnSix = document.getElementById('numbers-to-letters');
const resultBoxSix = document.getElementById('number-to-letter-result');

btnSix.addEventListener('click', () => {
	resultBoxSix.innerHTML = '';
	let number = prompt('Por favor escribe un numero del 1 al 10.');

	if(!number){
		return;
	} else if(isNaN(number)){
		alert(`${number} no es valido. Por favor ingrese un numero.`);
	}	else {
		number = parseInt(number);
		if(number < 1 || number > 10){
			alert(`${number} no es valido. Por favor ingrese un numero entre el 1 al 10.`);
		} else {
			let letter =  String.fromCharCode(96 + number);
			resultBoxSix.innerHTML = `El numero ${number} equivale a la letra ${letter}.`
		}
	}
});