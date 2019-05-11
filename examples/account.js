var ZENZO = require("zenzo-sdk-nodejs")

ZENZO.auth("insert-zenzo-api-key")

ZENZO.account().then(res => {
  console.log(res.content) // Account Object
})
