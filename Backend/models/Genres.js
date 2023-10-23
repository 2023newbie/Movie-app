const fs = require('fs');
const path = './data/genreList.json'

module.exports = {
  all: function() {
    return JSON.parse(fs.readFileSync(path, 'utf8'))
  },
  getById: function(id) {
    const genres = this.all()
    const pointGenre = genres.find(g => g.id === id)
    return pointGenre
  },
  getByName: function(name) {
    const genres = this.all()
    const pointGenre = genres.find(g => g.name === name)
    return pointGenre ? pointGenre : {id: ''}
  }
}