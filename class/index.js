const test = {
    name: "wang"
}

Object.defineProperty(test, 'age', {
    get() {
        console.log(this)
        return 12
    },
    set(e) {
        console.log('e', e)
    }
})

test.age = 18

console.log('test.age', test.age)

class Demonstration {
    age = 18;
    constructor(name) {
        this.name = name
    }
}

function Test(name) {
    this.name = name;

}

console.log('Test', new Test('sky'))

console.log('Demonstration', new Demonstration('wang'))

class A {
    constructor(a, b) {
        console.log({ a, b }); // new.target 指向当前正在执行的函数
    }
}

class B extends A {
    constructor(a, b) {
        super(a, b);
    }
}

new A(1, 2); // A
new B(3, 4); // B
