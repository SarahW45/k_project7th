namespace SpriteKind {
    export const apple = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Man.vy += -1
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    sprite.setPosition(randint(scene.screenWidth(), 10), randint(0, 10))
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
    effects.clearParticles(otherSprite)
    otherSprite.setPosition(randint(10, scene.screenWidth()), randint(10, scene.screenHeight()))
    info.changeScoreBy(1)
})
let Man: Sprite = null
info.startCountdown(30)
scene.setBackgroundColor(13)
Man = sprites.create(assets.image`Man`, SpriteKind.Player)
let bannan1 = sprites.create(img`
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
let banana2 = sprites.create(img`
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
let banana_3 = sprites.create(img`
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
let apple = sprites.create(assets.image`apple`, SpriteKind.Food)
let apple2 = sprites.create(assets.image`apple`, SpriteKind.Food)
let apple3 = sprites.create(assets.image`apple`, SpriteKind.Food)
Man.setStayInScreen(true)
bannan1.setStayInScreen(true)
banana2.setStayInScreen(true)
banana_3.setStayInScreen(true)
banana_3.setStayInScreen(true)
apple.setStayInScreen(true)
apple2.setStayInScreen(true)
apple3.setStayInScreen(true)
info.setScore(0)
