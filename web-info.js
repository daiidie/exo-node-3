const axios = require('axios')
const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const { window } = new JSDOM(`...`)
// or even
//const { document } = (new JSDOM(`...`)).window;

const main = async () => {
  try {
    const response = await axios.get('https://en.wikipedia.org/wiki/Fravia')
    console.log(response)
    const dom = new JSDOM(response.data)
    console.log(typeof dom)
    const urlTag = dom.window.document.querySelector('url')
    console.log(titleTag.textContent)

    const contentLengthTags = dom.window.document.querySelectorAll('p')
    console.log(contentLengthTags.length)

    const nbImgs = dom.window.document.querySelectorAll('img')
    for (const link of links) {
      console.log(nbImgs.length)
    }
  } catch (e) {
    console.error(e.message)
  }
}

// Correction: Il faut appeller ta fonction comme ci dessous
main()
