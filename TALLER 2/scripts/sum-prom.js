const btnOne = document.getElementById('sum');
const btnTwo = document.getElementById('prom');
const resultBoxOne = document.getElementById('sum-result');
const resultBoxTwo = document.getElementById('prom-result');

let results = 0;
const numbers = [];

btnOne.addEventListener('click', () => {
  resultBoxOne.innerHTML = '';
  numbers.length = 0;
  for(let i = 0; i < 5; i++){
    number = parseInt(prompt('Por favor ingrese un numero:'));

    if(isNaN(number) || !number || number <= 0){
      alert(`${number} no es valido. Por favor vuelva a intentarlo.`)
      return;
    } else{
      numbers.push(number);
    }
  }
  results = numbers.reduce((a , b) => a + b);
  resultBoxOne.innerHTML = `La suma de sus numeros es: ${results}.`;
});

btnTwo.addEventListener('click', () => {
  resultBoxTwo.innerHTML = '';
  const prom = results / numbers.length;
  console.log(prom);
  resultBoxTwo.innerHTML = `El promedio de los numeros que escribio es: ${prom}.`
});