const fourBtn = document.getElementById('fourth-challenge');
const option = {style : 'currency', currency: 'COP'}; //No estoy segura que hace pero funciona con el formato de dinero.
const moneyFormat = new Intl.NumberFormat('es-CO', option); // Da el formato para el dinero.

let userToTransfer = '';
let users = ['Mazu', 'Vader', 'Odashi', 'Habi', 'Juli']; //Es el array con personas en el sistema.
let usersSaves = Math.round(Math.random()*1000000); // Es el dinero disponible en la cuenta para hacer la transferencia al usuario seleccionado. El numero es random, entero.

fourBtn.addEventListener('click', () => {
    
  const userName = prompt('Por favor ingrese su nombre:')

  if(!userName){
    alert('Por favor ingrse su usuario.');
  } else {
    const moneyToTransfer = parseInt(prompt('Por favor ingrese la cantidad a transferir:'));

    if(isNaN(moneyToTransfer) || !moneyToTransfer){
      alert('Por favor ingrese el valor a transferir.');
    } else if(moneyToTransfer < 0){
      alert(`${moneyToTransfer} no es un valor valido para realizar la transferencia, por favor vuelva a intentarlo.`); 
    } else{
        
      if(moneyToTransfer > usersSaves){
        alert(`${userName} no posee fondos suficientes para realizar la transferencia. Su saldo actual es de ${moneyFormat.format(usersSaves)}`);
      } else {
        let userToTransfer =prompt('Por favor ingrese el usuario al que se le realizara la transferencia:');
        const search = users.includes(userToTransfer);
          
        if(!userToTransfer){
          alert(`${userToTransfer} no es un usuario valido o no se encuentrar en nuestro sistema. Por favor, vuelva a intentarlo.`);
        } else if(search === false){
          alert('El usuario no existe. Por favor verifique al usuario destino para la transferencia.');
        } else {
          alert(`${userName} su transferencia a ${userToTransfer} fue exitosa. Su nuevo saldo es ${moneyFormat.format(usersSaves - moneyToTransfer)}.`)
        }
      }
    }
  }

})

//Falta validar que el usuario exita en el array...
