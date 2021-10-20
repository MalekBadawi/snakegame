input.onButtonPressed(Button.A, function () {
    snakehead.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    while (snakehead.get(LedSpriteProperty.X) >= 0 && snakehead.get(LedSpriteProperty.X) <= 5) {
        if (snakehead.isTouching(fruit)) {
            fruit.set(LedSpriteProperty.X, randint(0, 5))
            fruit.set(LedSpriteProperty.Y, randint(0, 5))
            bodyx = snakehead.get(LedSpriteProperty.X)
            bodyy = snakehead.get(LedSpriteProperty.Y)
            snakehead.move(1)
            led.plot(bodyx, bodyy)
            basic.pause(500)
        } else {
            snakehead.move(1)
            basic.pause(500)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    snakehead.turn(Direction.Right, 90)
})
let bodyy = 0
let bodyx = 0
let fruit: game.LedSprite = null
let snakehead: game.LedSprite = null
snakehead = game.createSprite(0, 0)
fruit = game.createSprite(randint(0, 5), randint(0, 5))
basic.forever(function () {
	
})
