// 主题类
class Subject {
    constructor() {
        // 设置一个state和观察者数组
        this.state = 0
        this.observers = []
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
        // 赋值的时候调用通知的方法
        this.notify()
    }
    notify() {
        // 通知各个观察者更新
        this.observers.forEach(observer => {
            observer.update()
        })
    }
    // 传入观察者实例，绑定观察者
    attach(observer) {
        this.observers.push(observer)
    }
}

// 观察者类
class Observer {
    constructor(name, subject) {
        this.name = name
        // 传入主题实例
        this.subject = subject
        // 在此观察者实例上传入主题
        this.subject.attach(this)
    }
    update() {
        console.log(`${this.name} update, state:${this.subject.getState()}`)
    }
}

const s = new Subject()

// 一对多 绑定多个观察者
const o1 = new Observer('o1', s)
const o2 = new Observer('o2', s)
s.setState(1234) // "o1 update, state:1234" "o2 update, state:1234"
