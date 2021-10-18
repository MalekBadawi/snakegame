input.onButtonPressed(Button.A, function () {
    snakehead.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    while (snakehead.get(LedSpriteProperty.X) >= 0 && snakehead.get(LedSpriteProperty.X) <= 5) {
        snakehead.move(1)
        basic.pause(500)
        if (snakehead.get(LedSpriteProperty.X) == -1 && snakehead.get(LedSpriteProperty.X) <= 6) {
            game.gameOver()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    snakehead.turn(Direction.Right, 90)
})
let snakehead: game.LedSprite = null
snakehead = game.createSprite(0, 0)
let fruit = game.createSprite(randint(0, 5), randint(0, 5))
basic.forever(function () {
    if (snakehead.isTouching(fruit)) {
        fruit.set(LedSpriteProperty.X, randint(0, 5))
        fruit.set(LedSpriteProperty.Y, randint(0, 5))
    }
})
