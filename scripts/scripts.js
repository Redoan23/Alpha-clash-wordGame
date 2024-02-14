function homeControl() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('playground').classList.remove('hidden');
    randomNumber();
    let color = randomNumber().innerText.toLowerCase()
    document.getElementById(color).classList.add('bg-orange-400')
}


// doing the function for generating a random letter
function randomNumber() {
    // adding and splitting a string that carries all the letters

    let string = "abcdefghijklmnopqrstuvwxyz"
    let split = string.split('');


    // adding math.random and math.round to get the random letter

    let random = split[Math.round(Math.random() * (string.length - 1))];
    let address = document.getElementById('show-letter');
    address.innerText = random;
    return address

}

//return from score section

function scoreControl() {
    document.getElementById('score').classList.add('hidden');
    document.getElementById('playground').classList.remove('hidden');
}


