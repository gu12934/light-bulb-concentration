function doInput () {
	
}
function doDisplay (num: number) {
    let num = 0
    if (num == 1) {
        dirtoDisplay = randint(1, 3)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (dirtoDisplay == 2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (dirtoDisplay == 3) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    basic.clearScreen()
}
let correctValue = 0
let _new = 0
let dirtoDisplay = 0
let history: number[] = []
basic.forever(function () {
    _new = randint(1, 3)
    history.push(_new)
    for (let value of history) {
        dirtoDisplay = value
        doDisplay(value)
    }
    basic.showString("?")
    for (let value of history) {
        correctValue = value
        doInput()
    }
    basic.pause(1000)
})
