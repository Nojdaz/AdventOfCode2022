import * as readline from 'readline';
import * as fs from 'fs';

const filePath: string = './Day\ 1:\ Trebuchet\?\!/input';

function task1(): Promise<string> {
    return new Promise((resolve) => {
        let result: number = 0;
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
        });

        rl.on('line', (line: string) => {
            line = line.replace(/[^0-9]/g, '');
            if (line.length > 0) {
                var twodigitnum: number = Number(line.charAt(0) + line.charAt(line.length - 1))
                result += twodigitnum
            }
        });
        rl.on('close', () => {
            resolve(result.toString());
        });
    }
    )
}

async function task2(): Promise<string> {
    return new Promise((resolve) => {

        var accountedvalues: string[][] = [['zero','one','two','three','four','five','six','seven','eight','nine','1','2','3','4','5','6','7','8','9','0'],['0','1','2','3','4','5','6','7','8','9','1','2','3','4','5','6','7','8','9','0']]

        let result: number = 0;
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
        });

        rl.on('line', async(line: string) => {
            var twodigitnum: number = Number(await findfirst(line,accountedvalues) + await findlast(line,accountedvalues))
            console.log(twodigitnum)
            result += twodigitnum

        });
        rl.on('close', () => {
            resolve(result.toString());
        });
    }
    )
}

async function findfirst(line : string, accountedvalues:string[][]): Promise<string>{ 
    return new Promise((resolve) => {
        let result: string[] = ["",""]
        //value, position
    for(let i = 0; i < accountedvalues[0].length +1; i++){
        if((line.indexOf(accountedvalues[0][i]) != -1 && result[1] == "")||(line.indexOf(accountedvalues[0][i]) != -1 && Number(result[1]) > line.indexOf(accountedvalues[0][i]))){
            result[1] = line.indexOf(accountedvalues[0][i]).toString()
            result[0] = accountedvalues[1][i]
            console.log(result)
        }
        if(i == accountedvalues[0].length){
            console.log("___")
            resolve(result[0])
        }
    }
    })
}

 async function findlast(line: string, accountedvalues: string[][]): Promise<string>{
    return new Promise((resolve) => {
        let result: string[] = ["",""]
        //value, position
    for(let i = 0; i < accountedvalues[0].length +1; i++){
        if((line.lastIndexOf(accountedvalues[0][i]) != -1 && result[1] == "")||(line.lastIndexOf(accountedvalues[0][i]) != -1 && Number(result[1]) < line.lastIndexOf(accountedvalues[0][i]))){
            result[1] = line.lastIndexOf(accountedvalues[0][i]).toString()
            result[0] = accountedvalues[1][i]
            console.log(result)
        }
        if(i == accountedvalues[0].length){
            console.log("___")
            resolve(result[0])
        }
    }
    })
}

async function main() {
    await console.log("Task 1 result: " + await task1())
    await console.log("Task 2 result: " + await task2())
}

main()
