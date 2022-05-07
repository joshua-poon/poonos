'use strict';

const allCells = document.querySelectorAll('td');
const allCellsLength = allCells.length

//CHORD SELECTOR
let chordList = []
const allNotes = ['A', 'A#/B♭', 'B', 'C', 'C#/D♭', 'D', 'D#/E♭', 'E', 'F', 'F#/G♭', 'G', 'G#/A♭']
const toggleChordButton = document.querySelectorAll('.chord');

for (let i = 0; i < toggleChordButton.length; i++) {
    toggleChordButton[i].addEventListener('click', function () {
        let tonic = toggleChordButton[i].textContent;
        let tonicPosition = allNotes.indexOf(tonic);
        let mediant = (tonicPosition + 4 < 12) ? allNotes[tonicPosition + 4] : allNotes[tonicPosition + 4 - 12]
        let dominant = (tonicPosition + 7 < 12) ? allNotes[tonicPosition + 7] : allNotes[tonicPosition + 7 - 12]
        let primaryTriad = [tonic, mediant, dominant]
        for (let j = 0; j < allCellsLength; j++) {
            console.log(allCells[j].textContent)
            if (primaryTriad.includes(allCells[j].textContent)) {

                document.querySelectorAll('td')[j].style.borderTopColor = '#0f0';
                if (j >= 5) {
                    document.querySelectorAll('td')[j - 5].style.borderBottomColor = '#0f0';
                }
            }
        }
    })
};

//NOTE CRAMMER

const noteCrammerButton = document.querySelector('#crammer')
const revealButton = document.querySelector('#reveal')
const noteText = document.querySelector('#note')
const toggleNoteButton = document.querySelector('#hidenotes');
const resetColourButton = document.querySelector('#resetcolour');


//hide notes
const toggleNote = function () {
    document.querySelector('table').style.color = 'white'
};
toggleNoteButton.addEventListener('click', toggleNote);

const resetColour = function () {
    for (let j = 0; j < allCellsLength - 5; j++) {
        document.querySelectorAll('td')[j].style.borderColor = 'black'
    }
};
resetColourButton.addEventListener('click', resetColour);


const noteCrammer = function () {

    let randomNumber = Math.floor(Math.random() * allCellsLength);
    console.log(randomNumber)
    document.querySelectorAll('td')[randomNumber].style.borderTopColor = '#0f0';
    if (randomNumber >= 5) {
        document.querySelectorAll('td')[randomNumber - 5].style.borderBottomColor = '#0f0';

        revealButton.addEventListener('click', function () {
            document.querySelector('#note').textContent = 'Note: ' + document.querySelectorAll('td')[randomNumber].textContent


        })

    }
}
noteCrammerButton.addEventListener('click', noteCrammer)
