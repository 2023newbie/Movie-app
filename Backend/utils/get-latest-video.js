module.exports = data => {
  const editData = data.map(v => ({
    ...v,
    mils_type_time: new Date(v.published_at).getTime(),
  })) // add a property time by miliseconds to easy compare 

  let latestVideo = { mils_type_time: 0 }

  editData.forEach(v => {
    if (v.mils_type_time > latestVideo.mils_type_time) {
      latestVideo = v 
    }
  })
  
  delete latestVideo.mils_type_time
  return latestVideo
}