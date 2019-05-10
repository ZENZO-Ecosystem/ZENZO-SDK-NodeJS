var ZENZO = require("zenzo-sdk-nodejs")

ZENZO.auth("insert-zenzo-api-key")

ZENZO.regen().then(res => {
  console.log(res.content) // New API Key
})
