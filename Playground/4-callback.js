// setTimeout(() => {
//   console.log('2 seconds are up')
// }, 2000)

// const shortNames = ['Andrew', 'Jen', 'Jess']

// const shortNames = names.filter((name) => {
//   return name.length <= 4
// })

const add = (x, y, f) => {
  setTimeout(() => {
    f(x+y)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
})

const doWork = (callback) => {
  setTimeout(() => {
    callback('This is my error', undefined)
  }, 2000)
}

doWork((error, result) => {
  if(error) {
    return console.log(error)
  }
  console.log(result)
})