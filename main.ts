// any action event works
input.onButtonPressed(Button.A, function () {
    waiting()
    serial.writeLine("" + (text_list[randint(0, text_list.length - 1)]))
    basic.showString("?")
})
// animation
function waiting () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # . . .
        # # # . .
        # # # # .
        # # # . .
        # # . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # #
        . . # # #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        `)
    basic.pause(200)
}
// values of fortunes from 0 to 7 (8 total)
let text_list: string[] = []
text_list = [
"Not Today",
"My sources say Yes",
"Ask again later",
"Possibly tomorrow",
"Never in a million years",
"When pigs fly",
"For sure - not",
"Because no, wait, no"
]
basic.showString("?")
