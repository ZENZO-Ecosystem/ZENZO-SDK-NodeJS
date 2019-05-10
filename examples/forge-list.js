var ZENZO = require("zenzo-sdk-nodejs")

ZENZO.auth("insert-zenzo-api-key")

ZENZO.forgelist().then(res => {
  console.log(res.content) // JSON array of items
})
