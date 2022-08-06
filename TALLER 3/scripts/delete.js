const btnDelete = document.getElementById('delete');
const resultDelete = document.getElementById('delete-resutl');
const resultDeleteModified = document.getElementById('modified-delete-result');

btnDelete.addEventListener('click', () =>{
  let inputs;
  let numbers = [];

  do {
    inputs = prompt('Por favor ingrese un numero. Para terminar escriba "0"');
    if(inputs === null || inputs === '0'){
      break;
    }

    if(!inputs){
      alert('Por favor ingrese un numero.');
    }else if( isNaN(inputs)){
      continue;
    } else {
      numbers.push(inputs);
    }
  }while(inputs !== '0');
  
  resultDelete.innerHTML = `El array inicial era ${numbers.sort((a,b) => a - b).join(', ')}.`;
  
  numbers.shift();
  numbers.pop();

  resultDeleteModified.innerHTML = `El array con el primer y segundo elemento eliminado es = ${numbers.join(', ')}.`;
})