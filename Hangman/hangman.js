const words = [
    "computer", 
    "binary", 
    "program", 
    "phone", 
    "technology", 
    "algorithm", 
    "bit", 
    "source", 
    "javascript", 
    "machine", 
    "syntax", 
    "array", 
    "varable", 
    "function", 
    "software", 
    "library", 
    "api", 
    "display", 
    "cpu", 
    "memory", 
    "storage", 
    "integer", 
    "string", 
    "number", 
    "digit",
    "bitmap",
    "debug",
    "language",
]

const allowedKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const guessedKeys = []
var word = ""
var hangmanLevel = 0

function init() {
    const random = Math.floor(Math.random() * words.length)
    word = words[random]

    for(let i = 0; i <= 10; i++){
        if(word.length < i){
            document.getElementById(`blank${i}`).setAttribute("stroke", "transparent")
        }
    }
}

function getIndex(given) {
    var array = []

    for(let i = 0; i < word.length; i++) {
        var char = word[i]
        if(char == given) {
            array.push(i + 1)
        }
    }

    return array
}

function hasWon() {
    for(let i = 0; i < word.length; i++) {
        if(word[i] != document.getElementById(`text${i + 1}`).textContent.toLowerCase()) {
            return false
        }
    }

    return true
}

function keyClicked(keyboard) {
    const key = keyboard.key.toLowerCase()

    if(allowedKeys.includes(key) && !guessedKeys.includes(key) && hangmanLevel != 6 && !hasWon()) {
        guessedKeys.push(key)

        if(word.includes(key)) {
            const index = getIndex(key)
            
            index.forEach((i) => {
                document.getElementById(`text${i}`).textContent = key.toUpperCase()
            })
        } else if(hangmanLevel + 1 == 1) {
            document.getElementById(`hangman1`).setAttribute("fill", "black")
            document.getElementById('guessed').textContent = `${document.getElementById('guessed').textContent}${key.toUpperCase()}, `
            hangmanLevel += 1
        } else {
            document.getElementById(`hangman${hangmanLevel + 1}`).setAttribute("stroke", "black")
            document.getElementById('guessed').textContent = `${document.getElementById('guessed').textContent}${key.toUpperCase()}, `
            hangmanLevel += 1
        }
    }

    if(hangmanLevel == 6) {
        document.getElementById("finishText").textContent = `You lost the word was: ${word}`
    } else if(hasWon()) {
        document.getElementById("finishText").textContent = `You guessed the word correctly!`
    }
}

document.addEventListener('keydown', keyClicked)