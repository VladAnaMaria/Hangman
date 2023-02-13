let word, wordUpperCase, lengthWord, counter, div, divArray = Array();
const DivContainer = document.getElementById('div-container');

function prepareGame () {
    word = document.getElementById('word').value;
    if (word.indexOf(" ") >-1) {
        let message = 'Please write a word without spaces!';
        displayMessage(message);
    } else if (word.length < 2 || word.length > 20) {
        let message = 'Please write a word between 2 and 20 letters!';
        displayMessage(message);
    } else {
        wordUpperCase = word.toUpperCase();
        lengthWord = wordUpperCase.length;
        counter = lengthWord;
        for (let i = 0; i < lengthWord; ++i) {
            div = document.createElement('div');
            div.id = i;
            divArray.push(div.id);
            div.style = 'width: 30px; height: 25px; background: white; margin: 3px';
            div.style.textAlign = 'center';
            DivContainer.appendChild(div);
        }
    document.getElementById('word').value = '';
    }
    document.getElementById('btn-start').disabled = true;
}

let gameOver = 0, wrongAnswer = 11;

function clickButton (clicked_id) {
    if (gameOver == 1) {
        let message = 'The game is over! Please press Restart!';
        displayMessage(message);
        return;
    }
    document.getElementById('counter').innerHTML = wrongAnswer - 1 + ' attempts left';
    document.getElementById('counter').style.color = 'white';
    document.getElementById('counter').style.fontSize = 'x-large';
    if (wordUpperCase.indexOf(clicked_id) > -1) {
        for (let i = 0; i < lengthWord; ++i) {
            if (wordUpperCase[i] == clicked_id) {
                document.getElementById(i).innerHTML = clicked_id;
                --counter;
            }
        }
        if (counter == 0) {
            document.getElementById('message').innerHTML = 'YOU WIN!';
            gameOver = 1;
        }
    } else {
        --wrongAnswer;
        drawHangman[wrongAnswer]();
        if (wrongAnswer == 0) {
            document.getElementById('message').innerHTML = 'YOU LOSE!';
            gameOver = 1;
            for (let i = 0; i < lengthWord; ++i) {
                document.getElementById(i).innerHTML = wordUpperCase[i];
            }
        } 
    }
    document.getElementById('btn-restart').hidden = false;
    document.getElementById(clicked_id).style.visibility = 'hidden';
}

function displayMessage (message) {
    document.getElementById('div-container').innerHTML = message;
    document.getElementById('div-container').style = 'color: black; background: white';
    document.getElementById('div-container').style.fontSize = 'x-large';
    document.getElementById('btn-restart').hidden = false;
    document.getElementById('word').value = '';
    document.getElementById('counter').innerHTML = '';
}