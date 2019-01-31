//recursive function for searching JSON style datastructures

/*
This fn is either going to
a) return a value OR
b) keep calling itself until a value is returned
*/
cosnt deepPick = (fields, object={}) => {
  //first becomes the first item in the array and
  const [first,...remaining] = fields.split(".") //Split the str -> arr using "." as the delimeter
    return (remaining.length) ? //are there any elements remaining ? ...
    //...then, recursivley call
      deepPick(remaining.join("."), object[first]) : //...deepPick()
        object[first] //when there are no more elements remaining
}

/*
given
{
....
......
fullname: {
first: "Dan",
last: "Deacon"
}
}

e.g. deepPick("data.info.fullname.first", dan) // "Dan "
*/
