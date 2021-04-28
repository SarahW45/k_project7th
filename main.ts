controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Man.vy += -1
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    bannan1.setImage(assets.image`banna`)
    bannan1.setPosition(randint(scene.screenWidth(), 10), randint(0, 10))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Man.vx += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Man.vx += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Man.vy += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    effects.clearParticles(bannan1)
    effects.clearParticles(apple)
})
let apple: Sprite = null
let bannan1: Sprite = null
let Man: Sprite = null
scene.setBackgroundColor(13)
Man = sprites.create(assets.image`Man`, SpriteKind.Player)
bannan1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . e . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . . . 5 5 . . . . . . 
    . . . . . . . . . 5 e . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
apple = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
