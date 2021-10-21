input.onButtonPressed(Button.A, function () {
    snakehead.turn(Direction.Left, 90)
    direction += -1
    if (direction == -1) {
        direction = 3
    }
    if (body_alive == true) {
        basic.pause(500)
        body.turn(Direction.Left, 90)
    }
})
input.onButtonPressed(Button.AB, function () {
    while (snakehead.get(LedSpriteProperty.X) >= 0 && snakehead.get(LedSpriteProperty.X) <= 5) {
        snakehead.move(1)
        basic.pause(500)
        if (body_alive == true) {
            body.move(1)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    snakehead.turn(Direction.Right, 90)
    direction += 1
    if (direction == 4) {
        direction = 0
    }
    if (body_alive == true) {
        basic.pause(500)
        body.turn(Direction.Right, 90)
    }
})
let body: game.LedSprite = null
let body_alive = false
let direction = 0
let snakehead: game.LedSprite = null
snakehead = game.createSprite(0, 0)
let fruit = game.createSprite(randint(0, 5), randint(0, 5))
let body_number = 0
basic.forever(function () {
    if (snakehead.isTouching(fruit)) {
        fruit.set(LedSpriteProperty.X, randint(0, 5))
        fruit.set(LedSpriteProperty.Y, randint(0, 5))
        body_number = body_number + 1
        if (direction == 0) {
            body = game.createSprite(snakehead.get(LedSpriteProperty.X) - 1, snakehead.get(LedSpriteProperty.Y))
            body_alive = true
        } else if (direction == 1) {
            body = game.createSprite(snakehead.get(LedSpriteProperty.X), snakehead.get(LedSpriteProperty.Y) - 1)
            body_alive = true
        } else if (direction == 2) {
            body = game.createSprite(snakehead.get(LedSpriteProperty.X) + 1, snakehead.get(LedSpriteProperty.Y))
            body_alive = true
        } else if (direction == 3) {
            body = game.createSprite(snakehead.get(LedSpriteProperty.X), snakehead.get(LedSpriteProperty.Y) + 1)
            body_alive = true
        }
    }
    while (snakehead.isTouching(fruit)) {
        if (direction == 1) {
            body.turn(Direction.Right, 90)
        } else if (direction == 2) {
            body.turn(Direction.Right, 180)
        } else if (direction == 3) {
            body.turn(Direction.Right, 270)
        }
    }
})
