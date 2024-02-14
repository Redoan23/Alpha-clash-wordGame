function checkName(str) {

    const wordString = 'Ayieouw'
    if (typeof str !== 'string') {
        return "invalid"
    }
    else {
        if (wordString.toLowerCase().includes(str[str.length - 1].toLowerCase())) {
            return 'good name';
        }
        return 'bad name'
    }
}


console.log(checkName('uthso'))