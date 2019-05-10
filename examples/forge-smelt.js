var ZENZO = require("../index.js")

ZENZO.auth("insert-zenzo-api-key")

ZENZO.forgesmelt("item-id").then(res => {
  console.log(res.message) // Human-readable response
})
