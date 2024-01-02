
export { Results };

function Results(parent, answers_are_correct) {
    this.parent = parent;
    this.wrapper_c = parent;
    this.answers_are_correct = answers_are_correct;
    // console.log(answers_are_correct);

    this.cleanScreen = () => {
        wrapper.classList.add('fade-out');
        setTimeout(() => {
            wrapper.innerHTML = '';
            wrapper.classList.remove('fade-out');
        }, 500);
    }


    this.render = () => {
        
    
        let results_heading = document.createElement('div');

        results_heading.classList.add('font-bold', 'text-white', 'text-3xl', 'p-5', 'text-center');
        results_heading.textContent = 'Результат';

        this.parent.appendChild(results_heading);

        let glass_card = document.createElement('div');
        glass_card.classList.add('glassy', 'mx-3', 'min-h-[70%]', 'flex', 'flex-col', 'items-center', 'justify-center', 'border-b-1', 'border-white');
        let result_caption = document.createElement('div');
        result_caption.classList.add('result-phrase', 'text-3xl', 'text-white', 'font-bold', 'text-center', 'px-5', 'mt-5');
        result_caption.textContent = "Превосходно!";

        let q_counter = document.createElement('div');
        q_counter.classList.add('result', 'text-5xl', 'flex', 'flex-row', 'text-white', 'font-bold', 'text-center', 'my-7');
        let correct_answers_count = this.answers_are_correct.filter(x => x===true).length;
        let q_counter_string = `${correct_answers_count}/${this.answers_are_correct.length}`;
        q_counter.textContent = q_counter_string;

        let actions_block = document.createElement('div');
        actions_block.classList.add('container-fluid', 'flex', 'flex-row', 'items-end', 'justify-end', 'font-medium', 'text-2xl');

        let share_button = document.createElement('div');
        share_button.className = 'flex rounded-lg border justify-center font-medium text-white border-1 border-cyan-300 p-3 m-3 w-1/2';
        share_button.textContent = 'Поделиться';

        let to_menu_button = document.createElement('div');
        to_menu_button.className = 'flex rounded-lg border justify-center font-medium text-white border-1 border-cyan-300 p-3 m-3 w-1/2';
        to_menu_button.textContent = 'Назад в меню';
        to_menu_button.addEventListener('click', ()=> {
            console.log(window.q);
            delete window.q;
            console.log(window.q);
            window.dispatchEvent(new CustomEvent("show_quiz_list"));
        });

        let restart_button = document.createElement('div');
        restart_button.className = 'flex rounded-lg border justify-center font-medium text-white border-1 border-cyan-300 p-3 m-3 w-1/2';
        restart_button.textContent = 'Перезапустить';
        
        actions_block.appendChild(share_button);
        actions_block.appendChild(to_menu_button);
        // actions_block.appendChild(restart_button);


        glass_card.appendChild(result_caption);
        glass_card.appendChild(q_counter);
        glass_card.appendChild(actions_block);


        this.wrapper_c.appendChild(glass_card);

        // <div class="result-phrase text-3xl text-white font-bold text-center px-5">Превосходно!</div>
        

    }
};
