function update() {
    console.log('更新啦')
}

const newPrototype = Array.prototype
console.log(newPrototype)
const arrProto = Object.create(newPrototype)
// 由于Object.defineProperty不能监听数组，此处重写数组的方法
// 此处只演示数组的push方法，其他方法的实现与此一致
arrProto.push = function () {
    update()
    newPrototype.push.call(this, ...arguments)
}
function watcherFn(obj) {
    // 如果是数组，重写obj的原型指向arrProto
    if (Array.isArray(obj)) {
        obj.__proto__ = arrProto
    } else {
        for (let k of Object.keys(obj)) {
            register(obj, k, obj[k])
        }
    }
}

function register(obj, key, value) {
    if (typeof value === 'object') {
        watcherFn(value)
    } else {
        Object.defineProperty(obj, key, {
            get() {
                return value
            },
            set(val) {
                if (val !== value) {
                    update()
                    value = val
                }
            }
        })
    }
}

const obj = {
    name: 'h',
    info: {
        address: 'bj'
    },
    likes: ['music']
}

watcherFn(obj)

obj.name = 'b'
obj.info.address = 'gz'
obj.likes.push('sing')
console.log(obj) // 更新啦 × 3
