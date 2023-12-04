import * as readline from 'readline';
import * as fs from 'fs';

const filePath: string = 'Day\ 2:\ Cube\ Conundrum/input';

function task1(): Promise<string> {
    return new Promise((resolve) => {
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
        });
        let result = 0
        rl.on('line', (line: string) => {
            
            let gameid = Number(line.split(/ |:/g)[1])
            let games: string[] = line.split(":")[1].split(";")
            if(gamecheck(games)){
                result += gameid
            }

        });
        rl.on('close', () => {
            resolve(String(result));
        });
    }
    )
}

function gamecheck(games: string[]){
    let maxTotRed = 12
    let maxTotGreen = 13
    let maxtTotBlue = 14
    let sucess = true


    games.forEach(function (game) {
        let gameTotRed = 0
        let gameTotGreen = 0
        let gameTotBlue = 0
        game.split(',').forEach(function (amtColor){
            let values = amtColor.split(' ')
            if(values[2] == 'green'){gameTotGreen += Number(values[1])}
            if(values[2] == 'red'){gameTotRed += Number(values[1])}
            if(values[2] == 'blue'){gameTotBlue += Number(values[1])}
        })
        if(gameTotRed > maxTotRed || gameTotBlue > maxtTotBlue || gameTotGreen > maxTotGreen){
            sucess = false
          }
      }); 
     return sucess

}

async function task2(): Promise<string> {
    return new Promise((resolve) => {
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
        });
        let result = 0
        rl.on('line', (line: string) => {
            
            let gameid = Number(line.split(/ |:/g)[1])
            let games: string[] = line.split(":")[1].split(";")
            let tot = findLowest(games)
            console.log(tot)
            result += tot

        });
        rl.on('close', () => {
            resolve(String(result));
        });
    }
    )
}

function findLowest(games: string[]){
    let lowTotRed = 0
    let lowTotGreen = 0
    let lowTotBlue = 0

    games.forEach(function (game) {
        game.split(',').forEach(function (amtColor){
            let values = amtColor.split(' ')
            let color : string = values[2]
            let amt : number = Number(values[1])

            if(values[2] == 'red'){
                if(amt > lowTotRed){
                    lowTotRed = amt
                }}
            if(values[2] == 'blue'){
                if(amt > lowTotBlue){
                    lowTotBlue = amt
                }
            }
            if(values[2] == 'green'){
                if(amt > lowTotGreen){
                    lowTotGreen = amt
                }
            }
            console.log(values)
        })
      }); 
     return lowTotBlue * lowTotGreen * lowTotRed

}

async function main() {
    await console.log("Task 1 result: " + await task1())
    await console.log("Task 2 result: " + await task2())
}

main()
