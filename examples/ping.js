var ZENZO = require("zenzo-sdk-nodejs")

ZENZO.auth("insert-zenzo-api-key")

ZENZO.ping().then(res => {
  console.log(res) // Pong!
})
