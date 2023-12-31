
export { Results };

function Results(parent) {
    // this.parent = parent;
    this.wrapper_c = document.querySelector('.wrapper');


    this.render = () => {
        this.wrapper_c.classList.add('font-bold', 'text-white', 'text-3xl', 'p-5');
        this.wrapper_c.textContent = 'Результат';
    }
};
