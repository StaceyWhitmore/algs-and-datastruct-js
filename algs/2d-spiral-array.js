/*
Solution
There are two general ways most people try to solve this problem.
The most common is to find a pattern of how often you move each four directions.
For example, on the 4x4 case it is 4,3,3,2,2,1.
This kind of code usually has four for loops,
each going one of the four directions.
These kinds of solutions can very easily have bugs if you don't get the
 pattern exactly right or if you go too far. For example, the 1x1 case.

Another way to solve this problem is to greedily traverse in each
direction until you must stop, then turn around and head in the other direction.

Note, however, you can also solve this problem using recursion-
walk around the boarder and fill out the numbers with each iteration.
Then, reduce the problem to a smaller square (reduced n by 2).
Continue until you arrive at the base case of 1 or 0.
*/

let input = [[1,  2,   3,  4],
             [5,  6,   7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16]];

let spiralTraversal = function(matriks){ //form function(matriks)
  let result = [];
    let goAround = function(matrix) {
        if (matrix.length == 0) {
            return;
        }

        // right
        result = result.concat(matrix.shift());

        // down
        for (let j=1; j < matrix.length - 1; j++) {
            result.push(matrix[j].pop());
        }

        // bottom
        result = result.concat(matrix.pop().reverse());

        // up
        for (let k=matrix.length -2; k > 0; k--) {
            result.push(matrix[k].shift());
        }

        return goAround(matrix);
    };

    goAround(matriks);//from  goAround(matriks)

    return result;
};
let result = spiralTraversal(input);

console.log('result', result);
