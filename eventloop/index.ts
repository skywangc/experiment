console.log('start')
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function () {
    console.log('promise1')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function () {
    console.log('promise2')
  })
}, 0)
Promise.resolve().then(function () {
  console.log('promise3')
})
console.log('end')


setTimeout(function timeout() {
  console.log('timeout');
}, 0);
setImmediate(function immediate() {
  console.log('immediate');
});


setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function () {
    console.log('promise1')
  })
}, 0)
process.nextTick(() => {
  console.log('nextTick1')
  process.nextTick(() => {
    console.log('nextTick2')
    process.nextTick(() => {
      console.log('nextTick3')
      process.nextTick(() => {
        console.log('nextTick4')
      })
    })
  })
})

