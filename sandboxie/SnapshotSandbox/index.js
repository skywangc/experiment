function iter(obj, callbackFn) {
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            callbackFn(prop);
        }
    }
}

/**
 * 基于 diff 方式实现的沙箱，用于不支持 Proxy 的低版本浏览器
 */
class SnapshotSandbox {
    constructor(name) {
        this.name = name;
        this.proxy = window;
        this.type = 'Snapshot';
        this.sandboxRunning = true;
        this.windowSnapshot = {};
        this.modifyPropsMap = {};
        this.active();
    }
    //激活
    active() {
        // 记录当前快照
        this.windowSnapshot = {};
        iter(window, (prop) => {
            this.windowSnapshot[prop] = window[prop];
        });

        // 恢复之前的变更
        Object.keys(this.modifyPropsMap).forEach((p) => {
            window[p] = this.modifyPropsMap[p];
        });

        this.sandboxRunning = true;
    }
    //还原
    inactive() {
        this.modifyPropsMap = {};

        iter(window, (prop) => {
            if (window[prop] !== this.windowSnapshot[prop]) {
                // 记录变更，恢复环境
                this.modifyPropsMap[prop] = window[prop];

                window[prop] = this.windowSnapshot[prop];
            }
        });
        this.sandboxRunning = false;
    }
}
let sandbox = new SnapshotSandbox();

console.log('sandbox',sandbox)
//test
((window) => {
    window.name = '张三'
    window.age = 18
    console.log(window.name, window.age) //	张三,18
    sandbox.inactive() //	还原
    console.log(window.name, window.age) //	undefined,undefined
    sandbox.active() //	激活
    console.log(window.name, window.age) //	张三,18
})(sandbox.proxy);
