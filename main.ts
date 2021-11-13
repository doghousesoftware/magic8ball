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
/**
 * values of fortunes from the Original Magic 8 Ball
 */
let text_list: string[] = []
text_list = [
"It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful."
]
basic.showString("?")
