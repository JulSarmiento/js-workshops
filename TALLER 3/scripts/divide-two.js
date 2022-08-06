const btnDivideTwo = document.getElementById('divide-two');
const resultDivideTwo = document.getElementById('divide-two-result');

btnDivideTwo.addEventListener('click', () => {
  let array = [];
  let element;

  do{
    element = prompt('Por favor ingrese el numero o la letra deseado. Para salir escribir "0".');
    if(element === null || element === '0'){
      break;
    } else if(!!element){
      array.push(element);
    } 
  } while(element !== '0');

  const length = Math.floor(array.length/3);

  let arrayOne = array.slice(0, length);
  let arrayTwo = array.slice(length, length * 2);
  let arrayThree = array.slice(length * 2, length * 3);

  console.log(`Este es el array original: ${array}`, array, length);
  console.log(`Este es el primer array: ${arrayOne}`, arrayOne);
  console.log(`Este es el segundo array: ${arrayTwo}`, arrayTwo);
  console.log(`Este es el tercer array: ${arrayThree}`, arrayThree);

});