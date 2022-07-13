let add_button = document.querySelector('.add_button');
var input = document.querySelector('.input1')
let todo = document.querySelector('.todo')

class container {
    constructor(todoname) {
        this.createDiv(todoname);
    }

    createDiv(todoname) {

        let input = document.createElement('input');
        input.value = todoname;
        input.disabled = true;
        input.classList.add('h4')
        input.type = "text";

        let newtodo = document.createElement('div');
        newtodo.classList.add('container')

        let Button1 = document.createElement('button');
        Button1.innerHTML = "✏️";
        Button1.classList.add('button1');

        let Button2 = document.createElement('button');
        Button2.innerHTML = "❎";
        Button2.classList.add('button2');

        todo.appendChild(newtodo);

        newtodo.appendChild(input);
        newtodo.appendChild(Button1);
        newtodo.appendChild(Button2);


        Button1.addEventListener('click', () => this.edit(input));

        Button2.addEventListener('click', () => this.remove(newtodo));

    }

    edit(input) {

        input.disabled = !input.disabled;
    }

    remove(container) {

        todo.removeChild(container);
    }

}

function check() {

    if (input.value != "") {
        new container(input.value);
        input.value = "";
    }

}

add_button.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
});