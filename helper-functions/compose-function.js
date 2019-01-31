const compose = (...fns) =>
  (arg) =>
    fns.reduce(
      (composed, f)  => f(composed),
      arg
    )

const composedFunctions = compose(
  //innerMostFn,
  //nextOuterFn,
  //outerMostFn
)
//now
composedFunctions(arg)

//...is the same as ` outerMostFn(nextOuterFn(innerMostFn(arg))) `
