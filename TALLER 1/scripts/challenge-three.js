const thirdBtn = document.getElementById('third-challenge');

thirdBtn.addEventListener('click', () => {
  const dial = prompt('Por favor ingrese su numero de emisora de raido:');

  if(!dial || isNaN(dial)) {
    alert('Por favor ingrese digitos validos.');
  } else if(dial % 2 == 0){
    alert('Por favor verifique que el numero del dial sea impar.')
  }else if(dial <= 89.9 && dial > 107.9){
    alert('Por favor ingrese digitos validos.');
  }else{
    alert(`Felicidadeds, ahora se encuentra escuchando la emosiora ${dial}. Gracias por preferirnos.`)
  }
})