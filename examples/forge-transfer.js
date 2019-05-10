var ZENZO = require("../index.js")

ZENZO.auth("6d02111e06b1a780ac1821bb11a7edab715e0457ca613bd7267dd4432a7c8553")

ZENZO.forgetransfer("cb165f57619585cdee707879034d1d10d0575d9806ae4a2c5714c71099056eb6", "378520729601179648").then(res => {
  console.log(res)
})
