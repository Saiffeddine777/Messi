var upperBound = 0
var counter = 0
function guessMyNumber(n) {
    var rn = randInt(upperBound)
    counter = counter + 1
    var temp = counter
    if (n > upperBound) {
        return `Out of bounds! Please try a number between 0 and ${upperBound}.`;
    } else if (n === rn && temp === 1) {
        counter = 0
        return 'You guessed my number on the first try';
    }
    else if (n === rn) {
        counter = 0
        return 'You guessed my number in try number : ' + temp
    }
    return 'try again...';
}
function randInt(n) {
    return Math.floor(Math.random() * (n + 1))
}