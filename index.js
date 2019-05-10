const req = require('requestify')
const basePublicUrl = 'https://arcade.zenzo.io/api/v1/'
var authKey = ""

exports.auth = function (creds) {
  if (!creds) throw "An API Key is required to Authenticate"
  if (creds.length !== 64) throw "Invalid API Key"
  authKey = creds
  return true
}

exports.ping = async function () {
  if (authKey === "") throw 'Authentication is required prior to making API requests'
  try {
    var result = await req.request(basePublicUrl + 'ping', {
      method: 'POST',
      body: {
        api_key: authKey
      }
    })
    result = JSON.parse(result.body)
    return result.message
  } catch (err) {
    if (err.body) {
      throw 'ZENZO SDK Error caught: (' + err.body + ')'
    } else {
      throw 'ZENZO SDK Error caught: (' + err + ')'
    }
  }
}
