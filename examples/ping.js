var ZENZO = require("../index.js")

ZENZO.auth("insert-zenzo-api-key")

ZENZO.ping().then(res => {
  console.log(res)
})
