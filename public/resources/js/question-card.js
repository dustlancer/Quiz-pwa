
function QuestionCard(parent, question) {
    this.parent = parent;
    this.question = question;
    this.componentId = "component-id";

    this.render = function(){
        let questions_c = document.createElement("p");
        questions_c.classList.add('text-white', 'font-light', 'text-lg', 'text-center');
        questions_c.textContent = "in@MacBook-P in@MacBook-Pin@MacBook-Pin@MacBook-P";

        let question = document.createElement("div");
        question.classList.add('question', 'text-3xl', 'text-white', 'font-bold', 'text-center', 'px-5');
        question.textContent = this.question.text;

        this.parent.appendChild(questions_c);
        this.parent.appendChild(question);
    }

};
  
export { QuestionCard };



{/* <p class="text-white font-light text-lg">Вопрос <span id="question-number">5</span> из <span id="total-questions">20</span></p>
<div class="question text-3xl text-white font-bold text-center px-5">В каком году крестили Русь?</div>
       */}