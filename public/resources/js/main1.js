// 'use strict';


import { Quiz } from "./quiz.js";


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


function QuizList(parent, quizes_list) {
    this.parent = parent;
    //console.log(this.parent);
    this.quizes = quizes_list;

    this.cleanScreen = () => {
        wrapper.classList.add('fade-out');
        setTimeout(() => {
            wrapper.innerHTML = '';
            wrapper.classList.remove('fade-out');
        }, 500);
    }

    this.initEventListeners = () => {
        window.addEventListener('show_quiz_list', (e) => {
            this.cleanScreen();
            setTimeout(() => {
                this.render();
            }, 700);
        })
    }

    this.render = () => {
        let header = document.createElement('div');
        header.className = 'top-bar flex flex-row items-center justify-center font-bold text-white text-3xl p-5';
        header.textContent = 'Квизы';
        let quiz_list = document.createElement('div');
        quiz_list.className = 'mx-3 h-full flex flex-col items-center justify-center border-b-1 border-white text-white';
        
        

        this.parent.appendChild(header);
        let quiz_list_c = document.createElement('div');
        quiz_list_c.className = 'mx-3 h-full flex flex-col items-center pt-3 overflow-auto justify-start border-b-1 border-white text-white';

    
        for (let i = 0; i < this.quizes.length; i++) {
            let quiz_row = document.createElement('div');
            quiz_row.className = 'glassy flex flex-row items-center justify-between w-full p-3 px-5 my-1';
            let quiz_name = document.createElement('p');
            quiz_name.className = 'font-medium';
            quiz_name.textContent = this.quizes[i].name;
            let difficulty = document.createElement('p');
            difficulty.textContent = 'сложность';

            quiz_row.appendChild(quiz_name);
            quiz_row.appendChild(difficulty);
            quiz_row.addEventListener('click', () => {
                this.cleanScreen();
                setTimeout(() => {
                    // var q = null;
                    // window.q = 123;
                    if (window.q!==null) {
                        window.q = null
                        if (window.q!==null) {
                            console.log('q was deleted');
                        }
                    }
                    // console.log(window.q);
                    window.q = new Quiz(this.quizes[i].content);
                    window.q.startQuiz();
                }, 700);
            })
            quiz_list_c.appendChild(quiz_row);
        }

        this.parent.appendChild(quiz_list_c);
    }
}

let _list = new QuizList(wrapper, quizes_list);
_list.initEventListeners();
_list.render();


// let q = new Quiz(quiz1);
// q.startQuiz();


// // -----------












// startQuiz();






// let todoSubmit = document.querySelector('.todoSubmit');
// let todos = document.querySelector('.todos');


