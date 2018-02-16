function theBeatlesPlay(musicians, instruments) {
  let arr = []

  for(var i = 0; l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}
