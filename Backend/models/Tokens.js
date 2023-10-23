const fs = require('fs');
const path = './data/userToken.json'

module.exports = {
  all: function() {
    return JSON.parse(fs.readFileSync(path, 'utf8'))
  },
  isExist: function(token) {
    const tokens = this.all()
    const pointToken = tokens.find(t => t.token === token)
    return typeof pointToken === 'object'
  }
}