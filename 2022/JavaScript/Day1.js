const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const arr = readFileSync(filename).toString().split("\n");
    return arr;
}

const CalorieCounting = () => {
    var arr = syncReadFile("./Inputs/day1-input")
    var elfs = []
    let tmpint = 0;
    var largestvalue = 0;
    let sum = 0;
    for(i in arr) {
        if(arr[i] != ""){
            tmpint += parseInt(arr[i])

        }
        else{
            elfs.push(tmpint)
            console.log("this elf is " + tmpint + " Cal fat")
            if(tmpint > largestvalue){
                largestvalue = tmpint
            }
            tmpint = 0;
            
        }
    }
    elfs.sort(function(a, b){return b-a});

    sum = elfs[0] + elfs[1] + elfs[2]
    return sum
}


console.log(CalorieCounting() + "<- This is total")
