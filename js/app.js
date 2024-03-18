// MASTERMIND ES DI GRUPPO

const valueInput = document.getElementById('number-player');

let outputResult = document.querySelector('.result')

let positionCorrect = document.querySelector('.result-number')
// ARRAY VUOTA DA RIEMPIRE CON NUMERI RANDOM
let correctNumbers = generateArrayUnicNumber(4);



// CREO COLLEGAMENTO CON BOTTONE CHE GENERA NUMERI
const btnStart = document.getElementById('play')
btnStart.addEventListener('click', function(){    
    // AGGIUNGO CLASSE CHE TOGLIE IL POINTER-EVENTS
    // btnStart.classList.add('pointer')
    const userInputNumbersString = valueInput.value;

    const userNumbers = [];
    for (let index = 0; index < userInputNumbersString.length; index++) {
        const element = userInputNumbersString[index];
        userNumbers.push(parseInt(element));   
    }



    console.log('userNumbers', userNumbers)
    console.log(correctNumbers)

    let countCorrectNumbers = 0;
    let countCorrectPositions = 0;
    for (let index = 0; index < userNumbers.length; index++) {
        const userNumber = userNumbers[index];
        
        if(correctNumbers.includes(userNumber)) {
            countCorrectNumbers++;
            outputResult.innerHTML = countCorrectNumbers

            if(correctNumbers.indexOf(userNumber) === index) {
                countCorrectPositions++
                positionCorrect.innerHTML = countCorrectPositions
            }         
        }
        
    }
    
    
    


    
    
    
    
     
    
    // let numberValue = valueInput.value;
    // let newArrayOfNumber = convertStringToNumberArray(numberValue)
    // console.log(newArrayOfNumber);
    

    
    // let result = confrontTwoArray (newArrayOfNumber, correctNumbers)
    // console.log(result)
    // outputResult.innerHTML = result;
    


    
})

// ----
// ****
// ****
// ****
// UTILITY


// FUNZIONE CHE GENERA NUMERI RANDOM DA 1 A 9
function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

// FUNZIONE CHE GENERA ARRAY CON NUMERI UNICI

function generateArrayUnicNumber(maxNumbers){
    const arrayNum = [];
    while (arrayNum.length !== maxNumbers) {
        let randomNumber = getRandomIntInclusive(1,9);
        if(!arrayNum.includes(randomNumber)){
            arrayNum.push(randomNumber)            
        }
    }
    // FACCIO UN CICLO PER INSERIRE I NUMERI RANDOM
    // for(let i = 0; i < maxNumbers; i++){
    //     // INVOCO LA FUNZIONE CHE MI GENERE NUMERI RANDOMA
    //     // DENTRO AL CICLO COSI LI INSERSCE NELL'ARRAY
    //     let randomNumber = getRandomIntInclusive(1,9);
    //     if(!arrayNum.includes(randomNumber)){
    //         arrayNum.push(randomNumber)            
    //     }else if(arrayNum.includes(randomNumber)){
    //         i--
    //     }
    // }

    return arrayNum;
}

// CREO FUNZIONE CHE MI CONVERTE I NUMERI (STRINGA) INSERITI DA UTENTE 
// E LI CONVERTO IN NUMERI DENTRO UN ARRAY

function convertStringToNumberArray(inputValue){

    const arrayOfNumbers = [];

    for(let j = 0; j < inputValue.length; j++){
        let realNumber = parseInt(inputValue[j]);
        arrayOfNumbers.push(realNumber);
    }
   
    return arrayOfNumbers
}

// CREO FUNZIONE CHE MI COMPARA IL CONTENUTO DEI DUE ARRAY

function confrontTwoArray (array1, array2){

    // CREO UN CICLO CHE CONFRONTA ARRAY
    for(let k = 0; k < array1.length; k++){
        let includesNumber = 0;
        let correctOrder = 0;

        if(array1[k] === array2[k]){
            correctOrder++
            return correctOrder
            
            

        }else if (array2.includes(array1[k])){
            includesNumber++
            return includesNumber
            
            
              
        }
        return {includesNumber, correctOrder}

        
    }

   
}

// FUNZIONE CHE MI DICE CHE SEQUENZA HO INDOVINATO


