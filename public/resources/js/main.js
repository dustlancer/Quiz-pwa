'use strict';


import { QuestionCard } from './question-card.js';
import { Answer } from './answers.js';

const SCREEN_WIDTH = window.innerWidth;

const questions = [
    {
        text: "Меня kak зовут?",
        answers: [
            {text: "Anton"},
            {text: "Andrey"},
            {text: "Negr"},
        ],
        correct_answer_index: 1,
    },
    {
        question_text: "Negra kak зовут?",
        answers: [
            {text: "Anton"},
            {text: "Andrey"},
            {text: "Negr"},
        ],
        correct_answer_index: 2,
    },
];



let question_ind = 0;

let question_block = document.querySelector('.question-block');
let answer_options = document.querySelector('.answer-options');

let q = new QuestionCard(question_block, questions[0]);
q.render();

for (let i = 0; i < questions[0].answers.length; i++) {
    let answer_text = questions[0].answers[i].text;
    let answer_card = new Answer(answer_options, answer_text, i);
    answer_card.render();
}


let todoSubmit = document.querySelector('.todoSubmit');
let todos = document.querySelector('.todos');


