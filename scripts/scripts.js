function homeControl() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('playground').classList.remove('hidden');
    randomNumber();

}


// doing the function for generating a random letter
function randomNumber() {

    let string = "abcdefghijklmnopqrstuvwxyz/"
    let split = string.split('');

    // adding math.random and math.round to get the random letter

    let random = split[Math.round(Math.random() * (string.length - 1))];
    document.getElementById(random).classList.add('bg-orange-400')
    let address = document.getElementById('show-letter');
    address.innerText = random;
    // return address

}


//return to playground from the score page

function scoreControl() {
    document.getElementById('score').classList.add('hidden');
    document.getElementById('playground').classList.remove('hidden');
    let livesId = document.getElementById('lives-value');
    livesId.innerText = 5;
    let scoreId = document.getElementById('score-value')
    scoreId.innerText=0;

}




// THIS IS THE SCORE AND LIVES SECTION, SCORE AND LIVES COUNT !

document.addEventListener('keyup', function (event) {

    let target = document.getElementById('show-letter');
    let alphabet = target.innerText.toLowerCase();
    let scoreId = document.getElementById('score-value')
    let finalResult=document.getElementById('result')
    if (event.key === target.innerText.toLowerCase()) {
        randomNumber()
        document.getElementById(alphabet).classList.remove('bg-orange-400')
        let currentScore = scoreId.innerText
        scoreText = parseInt(currentScore);
        let newScore = 0;
        newScore = scoreText + 1;
        scoreId.innerText = newScore;
        finalResult.innerText=newScore;
    }

    else {
        let livesId = document.getElementById('lives-value');

        if (livesId.innerText > 1) {
            let currentValue = livesId.innerText
            let actualValue = parseInt(currentValue)
            let newValue = 0;
            newValue = actualValue - 1;
            livesId.innerText = newValue
        }
        else {
            
            document.getElementById('playground').classList.add('hidden')
            document.getElementById('score').classList.remove('hidden')
        }
    }


})

