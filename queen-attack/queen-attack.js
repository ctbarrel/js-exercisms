//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
    constructor(beginning) {
        var white = beginning === undefined ? [0, 3] : beginning.white
        var black = beginning === undefined ? [7, 3] : beginning.black

        if (black[0] === white[0] && black[1] === white[1]) {throw new Error('Queens cannot share the same space')}
        this.white = white
        this.black = black
    }

    toString() {
        const white = this.white
        const black = this.black
        var board = []
        for (let ver=0; ver<8; ver++) {
            var row = ''
            
            for (let hor=0; hor<8; hor++) {
                
                var square = '_'
                
                if (black[0] === ver && black[1] === hor) {
                    square = 'B'
                } else if (white[0] === ver && white[1] === hor) {
                    square = 'W'
                }

                hor === 7 ? square = square : square = `${square} `
                
                row += square
            }
            ver === 7 ? row += '\n' : row = row
            board.push(row)
        }
        return board.join('\n')
    }

    canAttack() {
        var danger = false
        const white = this.white
        const black = this.black
        if (white[0] === black[0] || white[1] === black[1] || Math.abs(white[0]-black[0]) === Math.abs(white[1]-black[1])) {
            danger = true
        }
        return danger
    }
}
