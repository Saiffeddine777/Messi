var upperBound = 10
var highScore = 0
var counter = 0
function guessMyNumber(n) {
    var rn = randInt(upperBound)
    counter = counter + 1
    var temp = counter
    if (n > upperBound) {
        return `Out of bounds! Please try a number between 0 and ${upperBound}.`;
    } else if (n === rn && temp === 1) {
        highScore = temp
        counter = 0
        upperBound++
        return ' Congrats You guessed my number on the first try your score is the highest possible ' + highScore;
    }
    else if (n !== rn && temp < 4) {
        return "try again"
    }
    else if (n === rn && temp < 4) {
        counter = 0
        return 'You guessed my number in try number : ' + temp
    }
    counter = 0
    return 'you execceded the number of trials try again';
}
function randInt(n) {
    return Math.floor(Math.random() * (n + 1))
}