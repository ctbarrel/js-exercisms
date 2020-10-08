// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

function randomNumber(min, max) {
    return Math.random() * (max-min) + min
}

let usedNames = []

function makeName(robot) {
    //get first random capital latter
    var name = ''
    let x
    for (x=0; x<100; x++){
    
        name = ''

        //get two letters
        name += String.fromCharCode(randomNumber(65,90))
        name += String.fromCharCode(randomNumber(65,90))
        //get random 3dig number
        for (let digit = 0; digit < 3; digit++) {
            name += Math.floor(randomNumber(0,9))
        }
        
        //check name for uniqueness
        if (usedNames.findIndex(uname => name === uname) === -1){
            break
        }
    }
    
    if (x === 100) {
        throw new Error("Max tries Exceeded")
    }
    
    usedNames.push(name)

    //return unique name
    return name
}

export class Robot {
    constructor() {
        this._name = makeName()
    }

    get name() {
        return this._name
    }
    
    reset() {
        this._name = makeName()
    }
}

Robot.releaseNames = () => {usedNames = []}

console.log(new Robot().name)