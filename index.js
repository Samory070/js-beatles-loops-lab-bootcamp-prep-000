function theBeatlesPlay(musicians, instruments) {
  const arr = []
  l = musicians.length
  for(var i = 0; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}
