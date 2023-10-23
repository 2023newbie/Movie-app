const fs = require('fs')
const getLatestVideo = require('../utils/get-latest-video')
const path = './data/videoList.json'

module.exports = {
  all: function () {
    return JSON.parse(fs.readFileSync(path, 'utf8'))
  },
  getById: function (id) {
    const videos = this.all()
    const pointListById = videos.find(l => l.id === id)?.videos
    if (!pointListById) return undefined // check the video's existence

    // handle logic to return point video
    const pointList = pointListById
      .filter(v => v.official === true) // 1 - official = true
      .filter(v => v.site === 'YouTube') // 2 - site = youtube

    const trailerList = pointList.filter(v => v.type === 'Trailer')
    const teaserList = pointList.filter(v => v.type === 'Teaser')

    // 3.1 - prioritizing trailer
    if (trailerList.length > 0) { 
      return getLatestVideo(trailerList) // 4 latest video
    }
    // 3.2
    return getLatestVideo(teaserList) // 4
  },
}
