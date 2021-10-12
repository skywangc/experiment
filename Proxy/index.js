const target = {
    id:'target'
}

const handler = {}

const proxy = new Proxy(target,handler)

console.log(target.id)
console.log(proxy.id)