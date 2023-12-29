
function Answer(parent, text, id) {
    this.parent = parent;
    this.text = text
    this.id = id;
    this.componentId = id;
    this.component = undefined;

    this.onClickHandler = () => {
        this.displayCorrectOrNot()
        alert("your answer id is " + this.id)
    };

    this.displayCorrectOrNot = (isCorrect) => {
        if (isCorrect) {
            this.component.classList.add('correct-answer');
        } else {
            this.component.classList.add('incorrect-answer')
        }
    }

    this.render = function(){
        let answer_card = document.createElement("div");
        answer_card.classList.add('answer-option', 'flex', 'rounded-lg', 'border', 'font-medium', 'text-white', 'border-1', 'border-cyan-300', 'p-3', 'm-3');
        
        let answer_text = document.createElement("p");
        answer_text.classList.add('answer-text', 'ml-2');
        answer_text.textContent = this.text;

        answer_card.appendChild(answer_text);
        answer_card.addEventListener('click', this.onClickHandler)

        this.parent.appendChild(answer_card);
        this.component = answer_card;
    }
};


export { Answer };

{/* <div class="answer-option flex rounded-lg border font-medium text-white border-1 border-cyan-300 p-3 m-3">
        <b class="answer-mark">A.</b><p class="answer-text ml-2">Это один вариант ответа один вариант ответа один вариант ответа один вариант ответа</p>
</div> */}