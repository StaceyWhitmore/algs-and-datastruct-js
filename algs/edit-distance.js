/*Edit Distance (Levenshtein's distance)
Write a function that returns whether two words are exactly "one edit"
away using the following signature:

bool OneEditApart(string s1, string s2);

An edit is:
Inserting one character anywhere in the word (including at the beginning and end)
Removing one character
Replacing one character
Examples:
OneEditApart("cat", "dog") = false
OneEditApart("cat", "cats") = true
OneEditApart("cat", "cut") = true
OneEditApart("cat", "cast") = true
OneEditApart("cat", "at") = true
OneEditApart("cat", "act") = false

Solution
There are many solutions to this problem.
One optimal solution is to walk each string in unison,
tracking if a difference has been encountered.
If a second difference is encountered, return false.
If one string is longer than the other,
then the difference must mean it is an insertion,
so skip a character in the longer string and continue.
Additionally, there are symmetry and short circuit opportunities.
*/

function calculateLevDistance (src, target) {
    if (!tgt.length) return src.length;
    if (!src.length) return tgt.length;

    return Math.min(
        calculateLevDistance( src.slice(1), tgt ) + 1, calculateLevDistance( tgt.slice(1), src ) + 1,
        calculateLevDistance( src.slice(1), tgt.slice(1) ) + ( src[0] == tgt[0] ? 0 : 1 )
    );
}
