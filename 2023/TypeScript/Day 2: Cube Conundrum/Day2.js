"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var fs = require("fs");
var filePath = 'Day\ 2:\ Cube\ Conundrum/input';
function task1() {
    return new Promise(function (resolve) {
        var fileStream = fs.createReadStream(filePath);
        var rl = readline.createInterface({
            input: fileStream,
        });
        var result = 0;
        rl.on('line', function (line) {
            var gameid = Number(line.split(/ |:/g)[1]);
            var games = line.split(":")[1].split(";");
            if (gamecheck(games)) {
                result += gameid;
            }
        });
        rl.on('close', function () {
            resolve(String(result));
        });
    });
}
function gamecheck(games) {
    var maxTotRed = 12;
    var maxTotGreen = 13;
    var maxtTotBlue = 14;
    var sucess = true;
    games.forEach(function (game) {
        var gameTotRed = 0;
        var gameTotGreen = 0;
        var gameTotBlue = 0;
        game.split(',').forEach(function (amtColor) {
            var values = amtColor.split(' ');
            if (values[2] == 'green') {
                gameTotGreen += Number(values[1]);
            }
            if (values[2] == 'red') {
                gameTotRed += Number(values[1]);
            }
            if (values[2] == 'blue') {
                gameTotBlue += Number(values[1]);
            }
        });
        if (gameTotRed > maxTotRed || gameTotBlue > maxtTotBlue || gameTotGreen > maxTotGreen) {
            sucess = false;
        }
    });
    return sucess;
}
function task2() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    var fileStream = fs.createReadStream(filePath);
                    var rl = readline.createInterface({
                        input: fileStream,
                    });
                    var result = 0;
                    rl.on('line', function (line) {
                        var gameid = Number(line.split(/ |:/g)[1]);
                        var games = line.split(":")[1].split(";");
                        var tot = findLowest(games);
                        console.log(tot);
                        result += tot;
                    });
                    rl.on('close', function () {
                        resolve(String(result));
                    });
                })];
        });
    });
}
function findLowest(games) {
    var lowTotRed = 0;
    var lowTotGreen = 0;
    var lowTotBlue = 0;
    games.forEach(function (game) {
        game.split(',').forEach(function (amtColor) {
            var values = amtColor.split(' ');
            var color = values[2];
            var amt = Number(values[1]);
            if (values[2] == 'red') {
                if (amt > lowTotRed) {
                    lowTotRed = amt;
                }
            }
            if (values[2] == 'blue') {
                if (amt > lowTotBlue) {
                    lowTotBlue = amt;
                }
            }
            if (values[2] == 'green') {
                if (amt > lowTotGreen) {
                    lowTotGreen = amt;
                }
            }
            console.log(values);
        });
    });
    return lowTotBlue * lowTotGreen * lowTotRed;
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _b = (_a = console).log;
                    _c = "Task 1 result: ";
                    return [4 /*yield*/, task1()];
                case 1: return [4 /*yield*/, _b.apply(_a, [_c + (_g.sent())])];
                case 2:
                    _g.sent();
                    _e = (_d = console).log;
                    _f = "Task 2 result: ";
                    return [4 /*yield*/, task2()];
                case 3: return [4 /*yield*/, _e.apply(_d, [_f + (_g.sent())])];
                case 4:
                    _g.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main();
