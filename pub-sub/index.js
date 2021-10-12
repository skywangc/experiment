// window._on = window.addEventListener;
// window._off = window.removeEventListener;
// window._emit = (type, data) => window.dispatchEvent(new CustomEvent(type, { detail: data }));;
// window._once = (type, callback) => window.addEventListener(type, callback, { once: true, capture: true });


// function onEventX(ev) {
//     console.log("event-x 收到数据:", ev.detail);
// }

// // console.log(123)

// // 订阅
// window._on("event-x", onEventX);
// window._once("event-once", ev => console.log("event-once 收到数据:", ev.detail));

// // once
// window._emit("event-once", { uid: -100, message: "you love me" });
// window._emit("event-once", { uid: -100, message: "you love me" });
// // 订阅和取消订阅
// window._emit("event-x", { uid: 100, message: "i love you" })
// window._off("event-x", onEventX);
// window._emit("event-x", { uid: 100, message: "i love you" })


// class EventEmitter extends EventTarget {
//     on = this.addEventListener;
//     off = this.removeEventListener;
//     // dispatchEvent 派发到事件对象上， CustomEvent 自定义事件对象
//     emit = (type, data) => this.dispatchEvent(new CustomEvent(type, { detail: data }));
//     once = (type, callback) => this.on(type, callback, { once: true, capture: true });
// }


// var emitter = new EventEmitter();
// function onEventX(ev) {
//     console.log("event-x 收到数据:", ev.detail);
// }

// // 订阅
// emitter.on("event-x", onEventX);
// emitter.once("event-once", ev => console.log("event-once 收到数据:", ev.detail));

// // 发布
// emitter.emit("event-once", { uid: -103, message: "you love me" });
// emitter.emit("event-once", { uid: -102, message: "you love me" });

// emitter.emit("event-x", { uid: 100, message: "i love you" })
// emitter.off("event-x", onEventX);
// emitter.emit("event-x", { uid: 100, message: "i love you" })

class EventSelf extends EventTarget {
    on = this.addEventListener
    off = this.removeEventListener
    emit = (type, data) => this.dispatchEvent(new CustomEvent(type, { detail: data }))
}

const emit = new EventSelf()

// console.log(emit)

function EventFn(params) {
    console.log('接受数据:',params.detail)
}

// 订阅
emit.on('getData', EventFn)

// 发布
emit.emit('getData', { test: 123 })

// 移除
emit.off('getData', EventFn)