const btn = document.getElementById('first-challenge');
const gasCosumePerLiter = 15;
const carNaftaTank = 45;
let kilometer = 0;

btn.addEventListener('click', () => {
  kilometer = prompt('Por favor ingrese la cantidad de kilometros a recorrer:');

  if(isNaN(kilometer)){
    alert('Por favor ingresar unicamente numeros.')
  } else if(kilometer <= 0){
    alert('Por favor ingrese numeros validos.')
  } else if( kilometer == null){
    alert('Por favor ingrese su kilometraje.')
  }else {
    const result = Math.ceil(parseFloat(((kilometer * 1) / gasCosumePerLiter)/carNaftaTank)); 
    
    if(result !== 1){
      alert(`Para recorer ${kilometer} kilometros, necesitara recagar su vehiculo ${result} veces.`) 
    }else{
      alert(`Con el tanque de gasolina de su vehiculo sera capaz de recorrer ${kilometer} kilometros sin problema.`)
    }
  }
});