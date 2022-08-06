const btn = document.getElementById('stop');
const resultStop = document.getElementById('stop-result');

function stop() {
  let numbers = [];
  let number;

  do{
    number = prompt('Por favor ingrese un numero:');
    if(number === null){
      break;
    }

    if(!number){
      alert('Por favor ingrese un numero.');
      continue;
    }else if(number !== 'stop'){

      if(isNaN(number)){
        alert(`${number} no es valido, por favor ingrese un numero.`);
      }else{
        numbers.push(parseInt(number));
      }

    }
    
  } while(number !== 'stop');
  resultStop.innerHTML = `${numbers.join(', ')}.`
  console.log(numbers);
};  

btn.addEventListener('click', stop);