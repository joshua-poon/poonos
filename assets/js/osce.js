'use strict';

const allHistories = document.querySelectorAll('.history');
const allHistoriesLength = allHistories.length

const histories = [
    ['pain', 'swelling', 'loss of motion', 'loss of function', 'deformity', 'weakness', 'instability', 'joint stiffness after inactivity', 'morning stiffness', 'sensory changes']
]

let historyChoice;
for (let i = 0; i < allHistoriesLength; i++) {
    allHistories[i].addEventListener('click', function () {
        historyChoice = i
        console.log(historyChoice)
    });
}

const submitButton = document.querySelector('.submitbutton');
submitButton.addEventListener('click', function () {
    console.log(document.getElementById("fname"));
})
