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
