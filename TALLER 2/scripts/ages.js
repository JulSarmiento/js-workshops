const btnThree = document.getElementById('ages');
const resultBoxThree = document.getElementById('age-resutl');

btnThree.addEventListener('click', () => {
  let ages = [];
  let adults = [];
  let age = '';

  do {
    age = prompt('Por favor ingrese una edad. Para salir escriba "0".');
    
    if(age == null || age === '0'){
      break;
    } else if(age === '') {
      alert(`Por favor ingrese una edad.`)
      continue;
    }else{
      age = parseInt(age);
      if(isNaN(age) || age <= 0){
        alert(`${age} no es valido. Por favor ingrese una edad.`);
      } else if(age < 18){
        ages.push(age);
      }else{
        adults.push(age);
      }
    }
      
  } while(age !== 0)

  resultBoxThree.innerHTML = `Los mayores de edad son: ${adults.join(', ')}.`;
});