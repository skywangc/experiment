function sandbox(code) {
    code = 'with (sandbox) {' + code + '}'
    const fn = new Function('sandbox', code)

    return function (sandbox) {
        const sandboxProxy = new Proxy(sandbox, {
            has(target, key) {
                return true
            }
        })
        return fn(sandboxProxy)
    }
}
var a = 1;
var code = 'console.log(a)' // TypeError: Cannot read property 'log' of undefined
sandbox(code)({})
