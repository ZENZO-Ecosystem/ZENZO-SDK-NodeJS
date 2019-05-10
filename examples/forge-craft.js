var ZENZO = require("zenzo-sdk-nodejs")

ZENZO.auth("insert-zenzo-api-key")

ZENZO.forgecraft("item_one-id", "item_two-id", "crafted-item-name", "crafted-item-image-url").then(res => {
  console.log(res.message) // Human-readable response
  console.log(res.content) // JSON object of the item
})
