var ZENZO = require("zenzo-sdk-nodejs")

ZENZO.auth("insert-zenzo-api-key")

ZENZO.forgesmelt("item-id").then(res => {
  console.log(res.message) // Human-readable response
})
