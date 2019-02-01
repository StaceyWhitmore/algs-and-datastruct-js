/* Look-and-say sequence

The Look and say sequence is a recursively defined sequence of numbers s
tudied most notably by   John Conway.


Sequence Definition

Take a decimal number
Look at the number, visually grouping consecutive runs of the same digit.
Say the number, from left to right, group by group; as how many of that
digit there are - followed by the digit grouped.
This becomes the next number of the sequence.

An example:

Starting with the number 1,   you have one 1 which produces 11
Starting with 11,   you have two 1's.   I.E.:   21
Starting with 21,   you have one 2, then one 1.   I.E.:   (12)(11) which becomes 1211
Starting with 1211,   you have one 1, one 2, then two 1's.   I.E.:   (11)(12)(21) which becomes 111221

QUESTION:
Implement a function that outputs the Look and Say sequence:
1
11
21
1211
111221
312211
13112221
1113213211
31131211131221
13211311123113112211

Solution
========
This problem is fairly straightforward and should not take a long time to solve. However, be sure you do proper error checking of the input first! (Empty and invalid inputs should be taken into account). Additionally, you can ask yourself:
* How does the ouput length scale?
* What is the max single digit that can exist in the output?
* What is the only starting sequence that never grows in length?
*/

function lookAndSay(seq){
    let prev = seq[0];
    let freq = 0;
    let output = [];
    seq.forEach(function(s){
        if (s==prev){
            freq++;
        }
        else{
            output.push(prev);
            output.push(freq);
            prev = s;
            freq = 1;
        }
    });
    output.push(prev);
    output.push(freq);
    console.log(output);
    return output;
}

//TEST:Rum on the 1st 11 sequences
let seq = [1];
for (let n=0; n<11; n++){
    seq = lookAndSay(seq);
}
