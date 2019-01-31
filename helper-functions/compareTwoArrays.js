//More efficient if you sort the two arrays first

const compareTwoArrays = (arr1, arr2) => {
  //for now arr2 is the bigger arr1 smaller
  let bigger, smaller
  if(arr1.length >= arr2.length) {
    bigger = arr1
    smaller = arr2
  } else {
    bigger = arr2
    smaller = arr1
  }

  let commonElements = []
  commonElements = bigger.filter((el) => smaller.includes(el))
  return commonElements
}
