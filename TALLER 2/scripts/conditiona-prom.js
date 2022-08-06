const btnFour = document.getElementById('conditional-prom');
const resultBoxFour = document.getElementById('conditional-prom-result');

btnFour.addEventListener('click', () => {
    let numbersOverTen = [];
    let numberUnderTen = [];
    let number = '';

    do{
        number = prompt('Por favor ingrese un numero. Escriba "salir" para finalizar.');
        resultBoxFour.innerHTML = '';

        if(number === null){
            // validacion hace que salga del todo.
            break;
        };

        if( !number ){
            alert('Por favor ingrese un numero.');
            continue;
        } else if(number !== 'salir'){
            number = parseInt(number);

            if(isNaN(number)){
                alert(`${number} no es valido, por favor ingrese un numero.`);
            }else if(number <= 0 || number >= 10) {
                numbersOverTen.push(number);
            }else {
                numberUnderTen.push(number);
            }
        }
    } while( number !== 'salir');

    const conditionalProm = numberUnderTen.reduce((a,b) => a + b) / numberUnderTen.length;
    resultBoxFour.innerHTML = `Promedio de los numeros de un solo digito es: (${numberUnderTen.join(' +')}) / ${numberUnderTen.length} =  ${conditionalProm}.`;
});