import * as readline from 'readline';
import * as fs from 'fs';

const filePath: string = './Day\ 3:\ Gear\ Ratios/input';

function task1(): Promise<string> {
    return new Promise((resolve) => {
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
        });
        let result = 0
        let lines: Array<string> = []
        let linenum: number = 0
        rl.on('line', (line: string) => {
            lines.push(line)
            linenum++

        });
        rl.on('close', () => {
            for (let i = 0; i < lines.length; i++) {
                let rownums: string[] = lines[i].split(/[^0-9]/g).filter(element => element)
                rownums.forEach(num => {
                    let sucess = false
                    let numpos = lines[i].indexOf(num)
                    console.log("_______" + num + "_______")
                    try{
                        console.log("LEFT: " + lines[i].charAt(numpos - 1))

                    }catch{}
                    try{
                        console.log("RIGHT: " + lines[i].charAt(numpos + num.length))
                    }catch{}
                    try {
                        if (lines[i].charAt(numpos - 1) != '' && !lines[i].charAt(numpos - 1).match(/\./g)
                        ) {
                            sucess = true
                        }
                    } catch { }
                    try {
                        if (lines[i].charAt(numpos + num.length) != '' && !lines[i].charAt(numpos + num.length).match(/\./g)
                        ) {
                            sucess = true
                        }
                    } catch { }
                    for (let l = -1; l < num.length + 1; l++) {
                        console.log(l)
                        try{
                        console.log("TOP:" + lines[i - 1].charAt(numpos + l) + " AT numpos: " + (numpos + l) + " ROW: " + (i -1))
                        }catch{}
                        try{
                        console.log("BOTTOM: " + lines[i + 1].charAt(numpos + l) + " AT numpos: " + (numpos + l) + " ROW: " + (i +1))
                        }catch{}
                        try {
                            if (lines[i + 1].charAt(numpos + l) != '' && !lines[i + 1].charAt(numpos + l).match(/\./g)) {
                                sucess = true
                            }
                        } catch { }
                        try {
                            if (lines[i - 1].charAt(numpos + l)!= '' && !lines[i - 1].charAt(numpos + l).match(/\./g)) {
                                sucess = true
                            }
                        } catch { }
                    }
                    let dots = ""
                    for(let i = 0; i < num.length; i++){
                        dots += "."
                    }
                    lines[i] = lines[i].substring(0,numpos) + dots + lines[i].substring(numpos + num.length) 
                    console.log(lines[i])
                    if (sucess) {
                        console.log("grape sucess")
                        result += Number(num)
                    }
                    else{
                        console.log("FAIL" + num)
                    }
    
            })
                if (i == linenum -1) {
                    resolve(String(result));
                }
            }
        });
    }
    )
}



async function task2(): Promise<string> {
    return new Promise((resolve) => {
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
        });
        let result = 0
        let lines: Array<string> = []
        let linenum: number = 0
        rl.on('line', (line: string) => {
            lines.push(line)
            linenum++

        });
        rl.on('close', () => {
            for (let i = 0; i < lines.length; i++) {
                let rowgear: string[] = lines[i].split(/\* /g).filter(element => element)
                rowgear.forEach(num => {
                    let sucess = false
                    let numpos = lines[i].indexOf(num)
                    console.log("_______" + num + "_______")
                    try{
                        console.log("LEFT: " + lines[i].charAt(numpos - 1))

                    }catch{}
                    try{
                        console.log("RIGHT: " + lines[i].charAt(numpos + num.length))
                    }catch{}
                    try {
                        if (lines[i].charAt(numpos - 1) != '' && !lines[i].charAt(numpos - 1).match(/\./g)
                        ) {
                            sucess = true
                        }
                    } catch { }
                    try {
                        if (lines[i].charAt(numpos + num.length) != '' && !lines[i].charAt(numpos + num.length).match(/\./g)
                        ) {
                            sucess = true
                        }
                    } catch { }
                    for (let l = -1; l < num.length + 1; l++) {
                        console.log(l)
                        try{
                        console.log("TOP:" + lines[i - 1].charAt(numpos + l) + " AT numpos: " + (numpos + l) + " ROW: " + (i -1))
                        }catch{}
                        try{
                        console.log("BOTTOM: " + lines[i + 1].charAt(numpos + l) + " AT numpos: " + (numpos + l) + " ROW: " + (i +1))
                        }catch{}
                        try {
                            if (lines[i + 1].charAt(numpos + l) != '' && !lines[i + 1].charAt(numpos + l).match(/\./g)) {
                                sucess = true
                            }
                        } catch { }
                        try {
                            if (lines[i - 1].charAt(numpos + l)!= '' && !lines[i - 1].charAt(numpos + l).match(/\./g)) {
                                sucess = true
                            }
                        } catch { }
                    }
                    let dots = ""
                    for(let i = 0; i < num.length; i++){
                        dots += "."
                    }
                    lines[i] = lines[i].substring(0,numpos) + dots + lines[i].substring(numpos + num.length) 
                    console.log(lines[i])
                    if (sucess) {
                        console.log("grape sucess")
                        result += Number(num)
                    }
                    else{
                        console.log("FAIL" + num)
                    }
    
            })
                if (i == linenum -1) {
                    resolve(String(result));
                }
            }
        });
    }
    )
}

async function findlast(line: string, accountedvalues: string[][]): Promise<string> {
    return new Promise((resolve) => {

    })
}

async function main() {
    await console.log("Task 1 result: " + await task1())
    await console.log("Task 2 result: " + await task2())
}

main()
