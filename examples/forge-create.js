var ZENZO = require("../index.js")

ZENZO.auth("insert-zenzo-api-key")

ZENZO.forgecreate(10, "ZNZ Kitty", "https://cdn.crowdfundinsider.com/wp-content/uploads/2018/04/CryptoKittie-mascot-Lola.png").then(res => {
  console.log(res.content) // JSON object of the item
})
