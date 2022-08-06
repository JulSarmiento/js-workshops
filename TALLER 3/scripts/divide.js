const btnDivide = document.getElementById('divide');
const resultDivide = document.getElementById('divide-result');
const resultEvens = document.getElementById('evens');
const resultOdds = document.getElementById('odds');
const resultOthers = document.getElementById('others');


function divide(){
  let inputs;
  let evens = [];
  let odds = [];
  let others = [];

  do{

    inputs = prompt('Por favor ingrese numeros o letras. Para salir, escribir "0"');

    if(inputs === null || inputs === '0'){
      break;
    };

    if(!inputs){
      alert('Por favor ingrese un numero o una letra.');
    } else {
      if(isNaN(inputs)){
        others.push(inputs);
      } else if( inputs % 2 == 0){
        evens.push(parseInt(inputs));
      } else{
        odds.push(parseInt(inputs));
      }
    }

  }while(inputs !== '0');

  resultEvens.innerHTML = `Pares = ${evens.join(', ')}.`;
  resultOdds.innerHTML = `Impares = ${odds.join(' ,')}.`;
  resultOthers.innerHTML = `Others = ${others.join(', ')}.`;
}

btnDivide.addEventListener('click', divide);