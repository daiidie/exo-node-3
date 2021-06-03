const fsPromises = require('fs/promises')
const axios = require('axios')
const asyncTask = (id, timeout, willFulFilled) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willFulFilled === true) {
        // ce console.log simule un side effect
        console.log(`Log: task${id} done after ${timeout} seconds`)
        // la valeur de retour est contenu dans le resolve
        resolve(`result from task${id}`)
      } else {
        reject(new Error(`faillure from task${id}`))
      }
    }, timeout * 1000)
  })
}

const main = async (calc) => {
  // Correction test promises doivent etre les requetes axios.get.
  let promises = [
    '/calc/add/1/2',
    '/calc/sub/10/2',
    '/calc/mul/12/4',
    '/calc/div/10/2',
    '/calc/mod/13/4',
  ]
  try {
    for await (const result of promises) {
      console.log(`got result: ${result}`)
    }
  } catch (e) {
    console.error(e.message)
  }
}

const readFile1 = async () => {
  let content = await fsPromises.readFile('./file1.txt', 'utf-8')
  return content
}

const readFile2 = async () => {
  let content = await fsPromises.readFile('./file2.txt', 'utf-8')
  return content
}

readFile1().then(console.log)
readFile2().then(console.log)
main()
