var ZENZO = require("../index.js")

ZENZO.auth("6d02111e06b1a780ac1821bb11a7edab715e0457ca613bd7267dd4432a7c8553")

ZENZO.ping().then(res => {
  console.log(res)
})
