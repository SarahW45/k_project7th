def on_up_pressed():
    Man.vy += -1
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_created(sprite):
    bannan1.set_image(assets.image("""
        banna
    """))
    bannan1.set_position(randint(scene.screen_width(), 10), randint(0, 10))
sprites.on_created(SpriteKind.food, on_on_created)

def on_left_pressed():
    Man.vx += -1
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    Man.vx += 1
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    Man.vy += 1
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap(sprite, otherSprite):
    effects.clear_particles(bannan1)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

bannan1: Sprite = None
Man: Sprite = None
scene.set_background_color(13)
Man = sprites.create(assets.image("""
    Man
"""), SpriteKind.player)
bannan1 = sprites.create(img("""
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
    """),
    SpriteKind.food)
apple = sprites.create(assets.image("""
    apple
"""), SpriteKind.food)