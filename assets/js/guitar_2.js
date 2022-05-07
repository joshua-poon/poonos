'use strict';

const allCells = document.querySelectorAll('td');
const allCellsLength = allCells.length

//RESETCOLOUR
const resetColourButton = document.querySelector('#reset-colour');
const resetColour = function () {
    for (let j = 0; j < allCellsLength - 6; j++) {
        document.querySelectorAll('td')[j].style.borderColor = 'black'
    }
};
resetColourButton.addEventListener('click', resetColour)

//TOGGLE NOTES
const toggleNoteButton = document.querySelector('#hidenotes');
const table = document.querySelector('table')
const toggleNote = function () {
    if (table.classList.contains('shownote')) {
        table.classList.remove('shownote');
        document.querySelector('#hidenotes').textContent = 'Hide Notes';
    }
    else {
        table.classList.add('shownote')
        document.querySelector('#hidenotes').textContent = 'Show Notes';
    }
};
toggleNoteButton.addEventListener('click', toggleNote);

//CHORD SELECTOR
let chordList = []
const allNotes = ['A', 'A#/B♭', 'B', 'C', 'C#/D♭', 'D', 'D#/E♭', 'E', 'F', 'F#/G♭', 'G', 'G#/A♭']
const toggleChordButton = document.querySelectorAll('.note');
const chordTypeButton = document.querySelectorAll('.chord-type');
const seventhChordButton = document.querySelector('.seventh-chord');

//TONIC NOTE and CHORD TYPE SELECTOR
let tonic;
for (let i = 0; i < toggleChordButton.length; i++) {
    toggleChordButton[i].addEventListener('click', function () {
        for (let i = 0; i < toggleChordButton.length; i++) {
            toggleChordButton[i].classList.remove('colouredbutton')
            toggleChordButton[i].classList.remove('colouredbutton2')

        }
        tonic = toggleChordButton[i].textContent;
        toggleChordButton[i].classList.add('colouredbutton')
    });
}
let chordType;
for (let i = 0; i < chordTypeButton.length; i++) {
    chordTypeButton[i].addEventListener('click', function () {
        for (let i = 0; i < chordTypeButton.length; i++) {
            chordTypeButton[i].classList.remove('colouredbutton')
        }
        chordType = i
        chordTypeButton[i].classList.add('colouredbutton')
    });
}

let seventhChord = 0;
seventhChordButton.addEventListener('click', function () {
    seventhChordButton.classList.toggle('colouredbutton');
    seventhChord++
})

//ALL BUTTONS
const allSelectorButtons = document.querySelectorAll('.selector');

let tonicPosition;
for (let i = 0; i < allSelectorButtons.length; i++) {
    allSelectorButtons[i].addEventListener('click', function () {
        if (allSelectorButtons[i].classList.contains('selector')) {//note crammer will remove selector
            resetColour();
            tonicPosition = allNotes.indexOf(tonic);
            chord();
        }
    });
}

let j;
const chord = function () {
    for (j = 0; j < allCellsLength; j++) {
        if (allCells[j].textContent === tonic) {
            notecolour('green');
        }

        else if (allCells[j].textContent === allNotes[(tonicPosition + 5 - chordType) % 12] || allCells[j].textContent === allNotes[(tonicPosition + 7) % 12]) {
            notecolour('#0f0');
        }

        else if (allCells[j].textContent === allNotes[(tonicPosition + 10) % 12] && seventhChord % 2 === 1) {
            notecolour('purple')
        }
    }
}

const notecolour = function (colour) {
    document.querySelectorAll('td')[j].style.borderTopColor = colour;
    if (j >= 6) {
        document.querySelectorAll('td')[j - 6].style.borderBottomColor = colour;
    }
}

//NOTE CRAMMER
const allNoteButtons = document.querySelectorAll('.note')
const noteCrammerButton = document.querySelector('#notecrammer')

noteCrammerButton.addEventListener('click', function () {
    noteCrammerButton.classList.toggle('colouredbutton')
    for (let i = 0; i < allNoteButtons.length; i++) {
        allNoteButtons[i].classList.toggle('selector')
    }
    noteCram()

})

let randomNumber;
const allCramNotes = document.querySelectorAll('.note')
const noteCram = function () {
    resetColour();
    randomNumber = Math.floor(Math.random() * allCellsLength);
    document.querySelectorAll('td')[randomNumber].style.borderTopColor = '#0f0';
    if (randomNumber >= 6) {
        document.querySelectorAll('td')[randomNumber - 6].style.borderBottomColor = '#0f0';
    }
    wrongAnswer()

}

const wrongAnswer = function () {
    for (let i = 0; i < allCramNotes.length; i++) {
        allCramNotes[i].addEventListener('click', function () {

            if (document.querySelectorAll('td')[randomNumber].textContent !== allCramNotes[i].textContent) {
                allCramNotes[i].classList.add('colouredbutton')
            }
            else {
                noteCram()
            }

        })
    }
}

//implement coloured button 2 later