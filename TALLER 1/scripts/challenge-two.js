const secondBtn = document.getElementById('second-challenge');
const modelOnePointSix = 15;
const modelOnePointEigth = 12;
const modelTwoPointCero = 10;
let version = 0;


secondBtn.addEventListener('click', () => {
  version = prompt('Por favor ingrese el modelo de su motor (1.6, 1.8 o 2.0):');

  if(isNaN(version)){
    alert('Por favor ingresar unicamente numeros.');
  } else if(version <= 0 || version > 2 || version == 1){
    alert('Por favor ingrese numeros validos.');
  } else if( version == null){
    alert('Por favor ingrese su version de motor.');
  } else if(version == 1.6){
    version = modelOnePointSix;
  } else if(version == 1.8){
    version = modelOnePointEigth;
  } else if( version == 2.0){
    version = modelTwoPointCero;
  } else {
    alert('Por favor ingrese su version de motor.');
  }

  kilometer = prompt('Por favor ingrese la cantidad de kilometros a recorrer:');

  if(isNaN(kilometer)){
    alert('Por favor ingresar unicamente numeros.');
  } else if(kilometer <= 0){
    alert('Por favor ingrese numeros validos.');
  } else if( kilometer == null){
    alert('Por favor ingrese su kilometraje.');
  }else {
    const result = Math.ceil(parseFloat(((kilometer * 1) / version)/carNaftaTank)); 
      
    if(result !== 1){
      alert(`Para el modelo de motor ${version}, si desea recorer ${kilometer} kilometros, necesitara recagar su vehiculo ${result} veces.`); 
    }else{

      if(version == 15){
        version = 1.6;
      } else if(version == 12){
        version = 1.8;
      } else {
        version = 2.0;
      }
      alert(`Para la ${version}, con el tanque de gasolina de su vehiculo sera capaz de recorrer ${kilometer} kilometros sin problema.`);
    }
  }

})

