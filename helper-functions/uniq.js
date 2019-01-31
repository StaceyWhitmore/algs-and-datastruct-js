//Returns only the unique elements in an array 

const uniq = arr => {
  let seen = {}
  return  arr.filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true) )
}
