class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
        return this.stack;
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }

    print(){
        console.log(this.stack);
    }
}

const book1 = {nombre: "nombre1", isbn: 12345678, autor: "autor1", editorial: "editorial1"}
const book2 = {nombre: "nombre2", isbn: 87654321, autor: "autor2", editorial: "editorial2"}
const book3 = {nombre: "nombre3", isbn: 81726354, autor: "autor1", editorial: "editorial1"}


const stack = new Stack();
stack.push(book1);
stack.push(book2);
stack.push(book3);
stack.print();
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
stack.print();

