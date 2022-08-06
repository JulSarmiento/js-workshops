const btnFive = document.getElementById('par-impar');
const resultBoxFive = document.getElementById('par-impar-result');

btnFive.addEventListener('click', () => {
  let number; 
  let par = [];
  let impar = [];

  do{
    resultBoxFive.innerHTML = '';
    number = prompt('Por favor ingrese un numero, para salir escriba " 0" ');
    if(number === null || number === '0'){
      break;
    } else if(number == ''){
      alert('Por favor ingrese un numero.');
      continue;
    }else {
      number = parseInt(number);
      if(isNaN(number)){
        alert(`${number} no es una opcion valida, por favor ingrese un numero.`);
      } else if( number % 2 == 0){
        par.push(number);
      } else {
        impar.push(number)
      }
    }

  } while(number !== 0);
  
  if(par.length > impar.length){
    par.sort((a, b) => a - b);
    resultBoxFive.innerHTML = `Hay mas numeros pares. Estos son los numeros pares: ${par.join(', ')}.`

  } else{
    impar.sort((a, b) => a - b);
    resultBoxFive.innerHTML = `Hay mas numeros impares. Estos son los numeros impares: ${impar.join(', ')}.`
  }

});