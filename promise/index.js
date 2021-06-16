// 简单的Promise实现
class PromiseClass {
    constructor(fn) {
        this.thenArr = [];
        fn(this._resolve.bind(this))
    }

    then(n) {
        this.thenArr.push(n)
    }

    _resolve(a) {
        this.thenArr.forEach(item => {
            item(a)
        })
    }
}

new PromiseClass((resolve) => {
    setTimeout(() => {
        resolve('Hello Promise!')
    }, 2000)
}).then((a) => {
    console.log('a', a)
})


