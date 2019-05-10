var ZENZO = require("../index.js")

ZENZO.auth("insert-zenzo-api-key")

ZENZO.forgetransfer("item-id", "user-id").then(res => {
  console.log(res.message) // Human-readable response
})
