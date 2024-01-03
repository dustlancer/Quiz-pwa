// 'use strict';



import { QuizList } from "./quizlist.js";
import { LoginCard } from "./login.js";


const SCREEN_WIDTH = window.innerWidth;



const quiz1 = [
    {
        text: "Меня kak зовут?",
        answers: [
            {text: "Anton"},
            {text: "Andrey"},
            {text: "Nikolay"},
        ],
        correct_answer_index: 1,
    },
    {
        text: "2 + 2 = ?",
        answers: [
            {text: "1"},
            {text: "35"},
            {text: "4"},
        ],
        correct_answer_index: 2,
    },
    {
        text: "10 - 4 = ?",
        answers: [
            {text: "65"},
            {text: "6"},
            {text: "1"},
        ],
        correct_answer_index: 1,
    },
    {
        text: "6 x 6 = ",
        answers: [
            {text: "36"},
            {text: "12"},
            {text: "0"},
        ],
        correct_answer_index: 0,
    },
];

let quizes_list = [
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
        ]
    },
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
            {
                text: "10 - 4 = ?",
                answers: [
                    {text: "65"},
                    {text: "6"},
                    {text: "1"},
                ],
                correct_answer_index: 1,
            },
            {
                text: "6 x 6 = ",
                answers: [
                    {text: "36"},
                    {text: "12"},
                    {text: "0"},
                ],
                correct_answer_index: 0,
            },
        ]
    },
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
            {
                text: "10 - 4 = ?",
                answers: [
                    {text: "65"},
                    {text: "6"},
                    {text: "1"},
                ],
                correct_answer_index: 1,
            },
            {
                text: "6 x 6 = ",
                answers: [
                    {text: "36"},
                    {text: "12"},
                    {text: "0"},
                ],
                correct_answer_index: 0,
            },
        ]
    },
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
            {
                text: "10 - 4 = ?",
                answers: [
                    {text: "65"},
                    {text: "6"},
                    {text: "1"},
                ],
                correct_answer_index: 1,
            },
            {
                text: "6 x 6 = ",
                answers: [
                    {text: "36"},
                    {text: "12"},
                    {text: "0"},
                ],
                correct_answer_index: 0,
            },
        ]
    },
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
            {
                text: "10 - 4 = ?",
                answers: [
                    {text: "65"},
                    {text: "6"},
                    {text: "1"},
                ],
                correct_answer_index: 1,
            },
            {
                text: "6 x 6 = ",
                answers: [
                    {text: "36"},
                    {text: "12"},
                    {text: "0"},
                ],
                correct_answer_index: 0,
            },
        ]
    },
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
            {
                text: "10 - 4 = ?",
                answers: [
                    {text: "65"},
                    {text: "6"},
                    {text: "1"},
                ],
                correct_answer_index: 1,
            },
            {
                text: "6 x 6 = ",
                answers: [
                    {text: "36"},
                    {text: "12"},
                    {text: "0"},
                ],
                correct_answer_index: 0,
            },
        ]
    },
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
            {
                text: "10 - 4 = ?",
                answers: [
                    {text: "65"},
                    {text: "6"},
                    {text: "1"},
                ],
                correct_answer_index: 1,
            },
            {
                text: "6 x 6 = ",
                answers: [
                    {text: "36"},
                    {text: "12"},
                    {text: "0"},
                ],
                correct_answer_index: 0,
            },
        ]
    },
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
            {
                text: "10 - 4 = ?",
                answers: [
                    {text: "65"},
                    {text: "6"},
                    {text: "1"},
                ],
                correct_answer_index: 1,
            },
            {
                text: "6 x 6 = ",
                answers: [
                    {text: "36"},
                    {text: "12"},
                    {text: "0"},
                ],
                correct_answer_index: 0,
            },
        ]
    },
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
            {
                text: "10 - 4 = ?",
                answers: [
                    {text: "65"},
                    {text: "6"},
                    {text: "1"},
                ],
                correct_answer_index: 1,
            },
            {
                text: "6 x 6 = ",
                answers: [
                    {text: "36"},
                    {text: "12"},
                    {text: "0"},
                ],
                correct_answer_index: 0,
            },
        ]
    },
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
            {
                text: "10 - 4 = ?",
                answers: [
                    {text: "65"},
                    {text: "6"},
                    {text: "1"},
                ],
                correct_answer_index: 1,
            },
            {
                text: "6 x 6 = ",
                answers: [
                    {text: "36"},
                    {text: "12"},
                    {text: "0"},
                ],
                correct_answer_index: 0,
            },
        ]
    },
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
            {
                text: "10 - 4 = ?",
                answers: [
                    {text: "65"},
                    {text: "6"},
                    {text: "1"},
                ],
                correct_answer_index: 1,
            },
            {
                text: "6 x 6 = ",
                answers: [
                    {text: "36"},
                    {text: "12"},
                    {text: "0"},
                ],
                correct_answer_index: 0,
            },
        ]
    },
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
            {
                text: "10 - 4 = ?",
                answers: [
                    {text: "65"},
                    {text: "6"},
                    {text: "1"},
                ],
                correct_answer_index: 1,
            },
            {
                text: "6 x 6 = ",
                answers: [
                    {text: "36"},
                    {text: "12"},
                    {text: "0"},
                ],
                correct_answer_index: 0,
            },
        ]
    },
]







let cleanScreen = () => {
    wrapper.classList.add('fade-out');
    setTimeout(() => {
        wrapper.innerHTML = '';
        wrapper.classList.remove('fade-out');
    }, 500);
}


let forAuthenticated = () => {
    let _list = new QuizList(wrapper, quizes_list);
    _list.initEventListeners();
    _list.render();

}

window.addEventListener('login_success', () => {
    cleanScreen();
    setTimeout(() => {
        forAuthenticated();
    }, 500);
});




let lc = new LoginCard(wrapper);

lc.render();

// let q = new Quiz(quiz1);
// q.startQuiz();


// // -----------












// startQuiz();






// let todoSubmit = document.querySelector('.todoSubmit');
// let todos = document.querySelector('.todos');


