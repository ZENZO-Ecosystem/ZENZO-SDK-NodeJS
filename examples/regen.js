var ZENZO = require("../index.js")

ZENZO.auth("insert-zenzo-api-key")

ZENZO.regen().then(res => {
  console.log(res.content) // New API Key
})
