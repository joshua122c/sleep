input.onButtonPressed(Button.A, function () {
    if (a.get(LedSpriteProperty.Y) >= 4) {
        a.set(LedSpriteProperty.Y, 0)
    } else {
        a.change(LedSpriteProperty.Y, 1)
    }
    if (a.isTouching(b)) {
        game.addScore(1)
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (a.get(LedSpriteProperty.X) > 4) {
        a.set(LedSpriteProperty.X, 0)
    } else {
        a.change(LedSpriteProperty.X, 1)
    }
    if (a.isTouching(b)) {
        game.addScore(1)
        control.reset()
    }
})
let b: game.LedSprite = null
let a: game.LedSprite = null
game.setScore(0)
a = game.createSprite(0, 0)
b = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (game.score() == 5) {
        basic.showString("win!")
    }
})
