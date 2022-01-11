namespace SpriteKind {
    export const flower = SpriteKind.create()
    export const res = SpriteKind.create()
    export const enenmyprojectile = SpriteKind.create()
    export const winning = SpriteKind.create()
    export const god = SpriteKind.create()
    export const Counterattack = SpriteKind.create()
    export const butten = SpriteKind.create()
    export const heath = SpriteKind.create()
    export const ttrap = SpriteKind.create()
    export const res2 = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const maxheal = SpriteKind.create()
    export const callboss = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const point = SpriteKind.create()
    export const Fraction = SpriteKind.create()
    export const bossprojectile = SpriteKind.create()
    export const PIC = SpriteKind.create()
}
namespace StatusBarKind {
    export const BOSSHP = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.maxheal, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += 100
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    life = false
})
scene.onOverlapTile(SpriteKind.butten, assets.tile`tileGrass2`, function (sprite, location) {
    speak2 = true
    DoubleCheck2 = 0
    if (controller.A.isPressed()) {
        Checkpoint = 5
        story.clearAllText()
        level()
    }
})
statusbars.onZero(StatusBarKind.BOSSHP, function (status) {
    status.spriteAttachedTo().destroy(effects.spray, 500)
    bossVariables2 = false
    projectile3.destroy()
    game.showLongText("Congratulations!!", DialogLayout.Full)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    game.showLongText("Boss has been defeated \\n ", DialogLayout.Full)
    game.showLongText("", DialogLayout.Full)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Checkpoint == 0) {
    	
    } else if (Checkpoint >= 1 && Checkpoint <= 2) {
        if (mySprite.vy == 0) {
            mySprite.vy = -90
            music.jumpUp.play()
        }
    } else if (Checkpoint >= 5 && Checkpoint <= 6) {
        if (mySprite2.vy == 0) {
            mySprite2.vy = -90
            music.setVolume(15)
            music.jumpUp.play()
        }
    } else if (Checkpoint == 4) {
        if (mySprite.vy == 0) {
            mySprite.vy = -250
            music.jumpUp.play()
        }
    } else if (Checkpoint == 8) {
        if (mySprite2.vy == 0) {
            mySprite2.vy = -250
            music.jumpUp.play()
        }
    } else if (Checkpoint == 7) {
        if (mySprite2.vy == 0) {
            mySprite2.vy = -100 - info.score() / 3
            music.jumpUp.play()
        }
    } else if (Checkpoint == 3) {
        if (mySprite.vy == 0) {
            mySprite.vy = -100 - info.score() / 3
            music.jumpUp.play()
        }
    }
})
function menu () {
    tiles.setTilemap(tilemap`層級6`)
    button = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........111.............
        ........12211...........
        ........12fff11.........
        .........1fffff1........
        .........1fffff1........
        ..........1ff11.........
        ..........1ff1..........
        ...........11...........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.butten)
    controller.moveSprite(button, 150, 150)
    scene.cameraFollowSprite(button)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile60`, function (sprite, location) {
    if (Checkpoint == 4) {
        Checkpoint = 3
    } else if (Checkpoint == 8) {
        Checkpoint = 7
    }
    level()
})
function level () {
    life = true
    kill()
    if (Checkpoint == 1) {
        mySprite = sprites.create(img`
            ........................
            ........................
            ........................
            .........ffffff.........
            ........ff44eeff........
            .......f444eeeeef.......
            ......fa44444eeeef......
            .....fa5a444444eeef.....
            .....f4a44444444eef.....
            ....f44444444444eeef....
            ....f444444444e4eeef....
            ....ff444d4444deeeff....
            .....f44ddfddfddeef.....
            ......f4ddfddfddef......
            .....f444dddddde4ef.....
            ....f444ffddddffeeef....
            ....fffee11dd11e4fff....
            .....fff11111111fff.....
            .....fdd1c11cc11ddf.....
            .....fdd11111111ddf.....
            ......fffddddd111f......
            .......f6ffffff6f.......
            .......faaaffaaaf.......
            ........fff..fff........
            `, SpriteKind.Player)
        friendly = statusbars.create(20, 4, StatusBarKind.Health)
        friendly.setLabel("HP")
        friendly.attachToSprite(mySprite, 0, 0)
        friendly.value = 100
        friendly.setColor(7, 2)
        controller.moveSprite(mySprite, 100, 0)
        tiles.setTilemap(tilemap`層級1`)
        scene.cameraFollowSprite(mySprite)
    } else if (Checkpoint == 2) {
        controller.moveSprite(mySprite, 100, 0)
        tiles.setTilemap(tilemap`層級3`)
    } else if (Checkpoint == 3) {
        controller.moveSprite(mySprite, 100 + info.score() / 2, 0)
        tiles.setTilemap(tilemap`層級5`)
    } else if (Checkpoint == 5) {
        mySprite2 = sprites.create(img`
            ........................
            ........................
            ........................
            .........ffffff.........
            ........ff44eeff........
            .......f444eeeeef.......
            ......fa44444eeeef......
            .....fa5a444444eeef.....
            .....f4a44444444eef.....
            ....f44444444444eeef....
            ....f444444444e4eeef....
            ....ff444d4444deeeff....
            .....f44ddfddfddeef.....
            ......f4ddfddfddef......
            .....f444dddddde4ef.....
            ....f444ffddddffeeef....
            ....fffee11dd11e4fff....
            .....fff11111111fff.....
            .....fdd1c11cc11ddf.....
            .....fdd11111111ddf.....
            ......fffddddd111f......
            .......f6ffffff6f.......
            .......faaaffaaaf.......
            ........fff..fff........
            `, SpriteKind.Player)
        friendly = statusbars.create(20, 4, StatusBarKind.Health)
        friendly.setLabel("HP")
        friendly.attachToSprite(mySprite2, 0, 0)
        friendly.value = 100
        friendly.setColor(7, 2)
        controller.moveSprite(mySprite2, 100, 0)
        tiles.setTilemap(tilemap`層級13`)
        scene.cameraFollowSprite(mySprite2)
    } else if (Checkpoint == 6) {
        controller.moveSprite(mySprite2, 100, 0)
        tiles.setTilemap(tilemap`層級14`)
    } else if (Checkpoint == 7) {
        controller.moveSprite(mySprite2, 100 + info.score() / 2, 0)
        tiles.setTilemap(tilemap`層級16`)
    } else if (Checkpoint == 4) {
        tiles.setTilemap(tilemap`層級23`)
    } else if (Checkpoint == 8) {
        tiles.setTilemap(tilemap`層級24`)
    }
    if (Checkpoint >= 1 && Checkpoint <= 4) {
        mySprite.ay = 220
    } else if (Checkpoint >= 5 && Checkpoint <= 8) {
        mySprite2.ay = 220
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        flowe = sprites.create(img`
            . . . . . . . . . . 1 1 1 1 1 . 
            . . . . . . . . 1 1 7 7 7 7 7 1 
            . . . . . . 1 1 7 7 1 1 1 7 7 1 
            . . . . . 1 7 7 7 1 . 1 7 7 1 . 
            . . . . 1 7 7 1 1 . . 1 7 1 . . 
            . . . . 1 7 1 . . . 1 7 7 1 . . 
            . . . 1 7 7 1 . . . 1 1 1 1 . . 
            . . . 1 7 1 . . . 1 1 2 2 1 1 . 
            . . 1 1 1 1 1 1 1 1 2 2 2 2 1 1 
            1 1 2 2 2 2 2 2 1 1 2 2 2 2 2 1 
            1 2 2 2 2 2 2 2 1 1 2 2 2 2 2 1 
            1 2 2 2 2 2 2 2 1 1 2 2 2 2 2 1 
            1 2 2 2 2 2 2 2 1 1 1 1 2 2 1 1 
            1 2 2 2 2 2 2 2 1 . . 1 1 1 1 . 
            1 1 2 2 2 2 2 1 1 . . . . . . . 
            . 1 1 1 1 1 1 1 . . . . . . . . 
            `, SpriteKind.res)
        if (Checkpoint == 5) {
            flowe.setImage(img`
                1 1 1 1 1 1 . . . . . . . . . . 
                1 7 7 7 7 7 1 1 . . . . . . . . 
                1 7 7 1 1 1 7 7 1 1 . . . . . . 
                . 1 7 7 1 . 1 7 7 7 1 . . . . . 
                . . 1 7 1 . . 1 1 7 7 1 . . . . 
                . . 1 7 7 1 . . . 1 7 1 . . . . 
                . . 1 1 1 1 . . . 1 7 7 1 . . . 
                . 1 1 2 2 1 1 . . . 1 7 1 . . . 
                1 1 2 2 2 2 1 . 1 1 1 1 1 1 . . 
                1 2 2 2 2 2 1 1 2 2 2 2 2 2 1 1 
                1 2 2 2 2 2 1 1 2 2 2 2 2 2 2 1 
                1 2 2 2 2 2 1 1 2 2 2 2 2 2 2 1 
                1 1 2 2 1 1 1 1 2 2 2 2 2 2 2 1 
                . 1 1 1 1 . . 1 2 2 2 2 2 2 2 1 
                . . . . . . . 1 1 2 2 2 2 2 1 1 
                . . . . . . . . 1 1 1 1 1 1 1 . 
                `)
        }
        tiles.placeOnTile(flowe, value)
        tiles.setTileAt(value, assets.tile`myTile5`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile35`)) {
        flowe2 = sprites.create(img`
            . . . . . . . . . f f f f f f . 
            . . . . . . . . . . . f f . . . 
            . . . . . . . . . . . f 5 f . . 
            . . . . . . . . . . f 5 5 f . . 
            . . . . . . . . . f 5 5 5 f . . 
            . . . . . . f f f 5 5 5 f . . . 
            . f f f f f 1 1 5 5 5 5 f . . . 
            f 5 5 5 5 1 1 5 5 5 5 f . . . . 
            . f f 5 5 5 5 5 5 f f . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.res2)
        if (Checkpoint == 5) {
            flowe2.setImage(img`
                . e e e e e e . . . . . . . . . 
                . . . e e . . . . . . . . . . . 
                . . e 5 e . . . . . . . . . . . 
                . . e 5 5 e . . . . . . . . . . 
                . . e 5 5 5 e . . . . . . . . . 
                . . . e 5 5 5 e e e . . . . . . 
                . . . e 5 5 5 5 1 1 e e e e e . 
                . . . . e 5 5 5 5 1 1 5 5 5 5 e 
                . . . . . e e 5 5 5 5 5 5 e e . 
                . . . . . . . e e e e e e . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        tiles.placeOnTile(flowe2, value)
        tiles.setTileAt(value, sprites.castle.tilePath5)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        win = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 7 1 1 . . . . . 
            . . . . . . . 1 7 7 7 1 . . . . 
            . . . . . . . 1 7 7 7 7 1 1 . . 
            . 1 1 1 1 1 1 7 7 7 7 7 7 7 1 . 
            1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 
            1 1 1 1 1 1 1 7 7 7 7 7 7 7 1 . 
            . . . . . . . 1 7 7 7 7 1 1 . . 
            . . . . . . . 1 7 7 7 1 . . . . 
            . . . . . . . 1 7 1 1 . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.winning)
        if (Checkpoint == 6 || Checkpoint == 5) {
            win.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 . . . . . . . . 
                . . . . . 1 1 7 1 . . . . . . . 
                . . . . 1 7 7 7 1 . . . . . . . 
                . . 1 1 7 7 7 7 1 . . . . . . . 
                . 1 7 7 7 7 7 7 1 1 1 1 1 1 1 . 
                1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 
                . 1 7 7 7 7 7 7 1 1 1 1 1 1 1 . 
                . . 1 1 7 7 7 7 1 . . . . . . . 
                . . . . 1 7 7 7 1 . . . . . . . 
                . . . . . 1 1 7 1 . . . . . . . 
                . . . . . . . 1 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        tiles.placeOnTile(win, value)
        if (Checkpoint == 1 || Checkpoint == 5) {
            tiles.setTileAt(value, assets.tile`myTile5`)
        } else if (Checkpoint == 2 || Checkpoint == 6) {
            tiles.setTileAt(value, sprites.castle.tilePath5)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        if (Checkpoint >= 1 && Checkpoint <= 3) {
            tiles.placeOnTile(mySprite, value)
        } else if (Checkpoint >= 5 && Checkpoint <= 7) {
            tiles.placeOnTile(mySprite2, value)
        } else if (Checkpoint == 4) {
            tiles.placeOnTile(mySprite, value)
        } else if (Checkpoint == 8) {
            tiles.placeOnTile(mySprite2, value)
        }
        if (Checkpoint == 1 || Checkpoint == 5) {
            tiles.setTileAt(value, assets.tile`myTile5`)
        } else if (Checkpoint == 2 || Checkpoint == 6) {
            tiles.setTileAt(value, sprites.castle.tilePath2)
        } else if (Checkpoint == 4) {
            tiles.setTileAt(value, assets.tile`myTile15`)
        } else if (Checkpoint == 8) {
            tiles.setTileAt(value, assets.tile`myTile45`)
        } else if (Checkpoint == 3) {
            tiles.setTileAt(value, assets.tile`myTile15`)
        } else if (Checkpoint == 7) {
            tiles.setTileAt(value, assets.tile`myTile15`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile22`)) {
        trap = sprites.create(img`
            . . . . . 2 . . . . 2 2 . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . 2 . . . . . . . . . . 2 . . 
            2 2 . . 2 2 2 2 2 2 2 . . 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . 2 2 2 2 2 4 2 4 2 2 4 2 2 2 . 
            . . 2 4 2 2 2 4 4 2 2 4 2 . . . 
            . 2 2 2 2 2 4 2 4 2 2 4 2 . . . 
            . . 2 2 2 4 2 2 4 4 2 4 2 . 2 . 
            . . 2 2 2 2 2 2 2 2 2 4 2 . 2 . 
            2 . 2 2 4 2 2 4 2 2 4 4 2 . 2 . 
            . . 2 2 2 2 4 2 4 4 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 . 2 . . 
            2 . . . 2 2 2 2 2 2 2 . 2 . 2 . 
            2 . . 2 . . . . . . . 2 . . 2 . 
            . . . . 2 2 . . 2 . . . . . . . 
            `, SpriteKind.ttrap)
        tiles.placeOnTile(trap, value)
        animation.runMovementAnimation(
        trap,
        "c 0-200 0 200 0 0",
        2000,
        true
        )
        if (Checkpoint == 1 || Checkpoint == 5) {
            tiles.setTileAt(value, assets.tile`myTile5`)
        } else if (Checkpoint == 2 || Checkpoint == 6) {
            tiles.setTileAt(value, sprites.castle.tilePath5)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile21`)) {
        item = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 3 3 . . . . 3 3 3 . . . 
            . . 3 2 2 2 3 . . 3 2 2 2 3 . . 
            . 3 2 2 2 2 2 3 3 2 2 2 2 2 3 . 
            . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 . 
            . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 . 
            . . 3 2 2 2 2 2 2 2 2 2 2 3 . . 
            . . 3 3 2 2 2 2 2 2 2 2 2 3 . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . . 3 3 2 2 2 2 3 3 . . . . 
            . . . . . 3 3 2 2 3 3 . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.heath)
        tiles.placeOnTile(item, value)
        if (Checkpoint == 1 || Checkpoint == 5) {
            tiles.setTileAt(value, assets.tile`myTile5`)
        } else if (Checkpoint == 2 || Checkpoint == 6) {
            tiles.setTileAt(value, sprites.castle.tilePath5)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile44`)) {
        item2 = sprites.create(img`
            9 9 9 9 9 9 9 9 2 9 9 9 9 9 9 9 
            2 2 9 9 9 9 9 2 2 9 9 9 9 9 2 2 
            9 2 9 9 9 9 9 2 9 9 9 9 9 9 2 9 
            9 9 9 3 3 3 9 9 9 9 3 3 3 9 9 9 
            9 9 3 2 2 2 3 9 9 3 2 2 2 3 9 9 
            9 3 2 2 2 2 2 3 3 2 2 2 2 2 3 9 
            9 3 2 2 2 2 2 2 2 2 2 2 2 2 3 9 
            9 3 2 2 2 2 2 2 2 2 2 2 2 2 3 9 
            9 9 3 2 2 2 2 2 2 2 2 2 2 3 9 9 
            9 9 3 3 2 2 2 2 2 2 2 2 2 3 9 9 
            9 9 9 3 3 2 2 2 2 2 2 3 3 9 9 9 
            9 2 2 9 3 3 2 2 2 2 3 3 9 9 2 2 
            2 2 9 9 9 3 3 2 2 3 3 9 9 9 9 2 
            9 9 9 2 9 9 3 3 3 3 9 9 2 9 9 9 
            9 9 9 2 9 9 9 3 3 9 9 9 2 2 2 9 
            9 9 2 2 9 9 9 9 9 9 9 9 9 9 2 9 
            `, SpriteKind.maxheal)
        tiles.placeOnTile(item2, value)
        if (Checkpoint == 3 || Checkpoint == 7) {
            tiles.setTileAt(value, assets.tile`myTile15`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile36`)) {
        wall = sprites.create(img`
            f f f c f f f f f f f f c f f f 
            f e e e c 7 b e e b 7 c e e e f 
            f e e e c 7 b e e b 7 c e e e f 
            f e c 1 b 7 b e e b 7 b 1 c e f 
            f e c 1 b 7 b e e b 7 b 1 c e f 
            f f c 1 b b b e e b b b 1 c f f 
            f f c 1 b b 7 7 7 7 b b 1 c f f 
            f f c 1 b b e 7 7 e b b 1 c f f 
            f f c 1 b b b 7 7 b b b 1 c f f 
            f f c 1 b b b e e b b b 1 c f f 
            f f c 1 b c b e e b c b 1 c f f 
            f e e 1 b c b e e b c b 1 e e f 
            f 7 e e c c b e e b c c e e 7 f 
            f 7 e e c c b e e b c c e e 7 f 
            f 7 e e c c b e e b c c e e 7 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.callboss)
        tiles.placeOnTile(wall, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile45`)) {
        fraction = sprites.create(img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b d d b . . . . . . 
            . . . . . b d 5 5 d b . . . . . 
            . . . . b b 5 5 5 5 b b . . . . 
            . . . . b 5 5 5 5 5 5 b . . . . 
            b b b b b 5 5 5 5 1 1 d b b b b 
            b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
            b d d 5 5 5 5 5 5 1 1 1 5 d d b 
            . b d d 5 5 5 5 5 5 5 5 d d b . 
            . . b b 5 5 5 5 5 5 5 5 b b . . 
            . . c b 5 5 5 5 5 5 5 5 b c . . 
            . . c 5 5 5 5 d d 5 5 5 5 c . . 
            . . c 5 5 d b b b b d 5 5 c . . 
            . . c 5 d b c c c c b d 5 c . . 
            . . c c c c . . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Fraction)
        tiles.placeOnTile(fraction, value)
    }
    if (Checkpoint == 1) {
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("Magma is extremely unstable, and violent bats are infested, please beware", DialogLayout.Full)
        game.splash("Jiuqudong")
        game.splash("prass \"b\" to shoot", "prass \"a\" to jump")
    } else if (Checkpoint == 2) {
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("Infected orangutans spotted", DialogLayout.Full)
        game.showLongText("Broken bridge \\n please beware?", DialogLayout.Full)
        game.splash("Sha Ka-dang Trail")
    } else if (Checkpoint == 3) {
        game.splash("Qingshui Cliff")
    } else if (Checkpoint == 5) {
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("Magma is extremely unstable, and violent bats are infested, please beware", DialogLayout.Full)
        game.splash("Jiuqudong")
        game.splash("prass \"b\" to shoot", "prass \"a\" to jump")
    } else if (Checkpoint == 6) {
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("Infected orangutans spotted", DialogLayout.Full)
        game.showLongText("Broken bridge \\n please beware?", DialogLayout.Full)
        game.splash("Sha Ka-dang Trail")
    } else if (Checkpoint == 7) {
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("I have a bad feeling", DialogLayout.Full)
        game.splash("Qingshui Cliff")
    } else if (Checkpoint == 4) {
    	
    } else if (Checkpoint == 8) {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    if (Checkpoint == 2) {
        Checkpoint = 4
    } else if (Checkpoint == 6) {
        Checkpoint = 8
    }
    level()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.heath, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += 20
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ttrap, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += -10
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hazardLava1`, function (sprite, location) {
    if (Checkpoint >= 1 && Checkpoint <= 3) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite).value += -100
    } else if (Checkpoint >= 5 && Checkpoint <= 7) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite2).value += -100
    }
})
function boss2 () {
    evilboss = sprites.create(img`
        ........................
        ........fff..fff........
        .......fcccffcccf.......
        ......f11ccccccccf......
        ......f11ccccccccf......
        ......fc11cccccccf......
        ......fccccccccccf......
        .....fbbccccccccbbf.....
        ....ffccbbbbbbbbccff....
        ...fccccccccccccccccf...
        ...ffccfffccccfffccff...
        .....ffeeeffffeeeff.....
        .ff.fdeeed2ed2edeedf.ff.
        fccf.fdedd2dd2ddedf.fccf
        fcfcfffffddddddfffffcfcf
        ffcccfccff5d25ffccfcccff
        .fcffcffcca2daccffcffcfc
        fcfccffccca12a6ccffccfcf
        ffccffdaccc12c7cadffccff
        fccfcf9ddccaaccdddfcfccf
        fcfccffffaccccaffffccfcf
        .fccff.fcffffffcf.ffccf.
        ..fcf..fbccffccbf..fcf..
        ...ff...fffccfff...ff...
        `, SpriteKind.boss)
    bossVariables = true
    bossVariables2 = true
    if (Checkpoint == 3) {
        evilboss.setPosition(mySprite.x + 400, mySprite.y - 20)
    } else if (Checkpoint == 7) {
        evilboss.setPosition(mySprite2.x - 400, mySprite2.y - 20)
    }
    evilboss.ay = 5600
    bossHP = statusbars.create(60, 10, StatusBarKind.BOSSHP)
    bossHP.attachToSprite(evilboss)
    bossHP.max = 500
    bossHP.value += 500
    bossHP.setLabel("BossHP")
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.res2, function (sprite, otherSprite) {
    music.spooky.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
    enemy2()
})
function kill () {
    for (let value of sprites.allOfKind(SpriteKind.boss)) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.BOSSHP, value).value += -500
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy2)) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, value).value += -150
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, value).value += -100
    }
    for (let value of sprites.allOfKind(SpriteKind.enenmyprojectile)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bossprojectile)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.res2)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Fraction)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.res)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.winning)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.ttrap)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.heath)) {
        value.destroy()
    }
    bossVariables = false
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Checkpoint == 0) {
    	
    } else if (Checkpoint >= 1 && Checkpoint <= 4) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........ffffffff........
            .......feeeaee44f.......
            ......feeea5a4411f......
            .....fee44ea444414f.....
            ....fee44444444414f.....
            ....fe4444444444444f....
            ....fe4ed4444444444f....
            ....feedfdd4444e44f.....
            .....fddfdd4444ee4f.....
            .....fdddd444444eef.....
            ......fdddd444444eef....
            .......ffd44ee44444ff...
            .........feee1ffe4444f..
            .........fc1dd11e44ff...
            ..........f1dd111ef.....
            ..........ff11dddf......
            .........facfffff.......
            ..........faaaaaf.......
            ..........ffffff........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ......ffffffff..........
            .....feeeaee44f.........
            ....feeea5a4411f........
            ...fee44ea444414f.......
            ..fee44444444414f.......
            ..fe4444444444444f......
            ..fe4ed4444444444f......
            ..feedfdd4444ee4f.......
            ...fddfdd44444eef.......
            ...fdddd4444444eef......
            ....fdddd444f44ee4f.....
            ...fdffd44eeffffeef.....
            ...fdd144e1111ddfe4f....
            ...fffeeec1c11ddfef.....
            ......ff111111ffef......
            .....facfddddfcaf.......
            .....faacfffffaaf.......
            .....ffaaf....ff........
            .......ff...............
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ......ffffffff..........
            .....feeeaee44f.........
            ....feeea5a4411f........
            ...fee44ea444414f.......
            ..fee44444444414f.......
            ..fe4444444444444f......
            ..fe4ed4444444444f......
            ..feedfdd4444e44f.......
            ...fddfdd44444e4f.......
            ...fdddd444444ee4f......
            ....fdddd444f44ff4f.....
            .....ffd44eefffddf4f....
            ....fdd44e11111ddf4f....
            ....fdeeecc1c11ffef.....
            .....fff111111ffef......
            ......fafddddfcaf.......
            ......facffffcaaf.......
            .......ff...faaf........
            .............ff.........
            `],
        100,
        true
        )
    } else if (Checkpoint >= 5 && Checkpoint <= 8) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........ffffffff........
            .......f66666691f.......
            ......f6666699911f......
            .....f666699999919f.....
            ....f6669969999999f.....
            ....f66966999999999f....
            ....f69699999999999f....
            ....f69dfd999999669f....
            .....fddfd69d9996f9f....
            .....fddddddd666f.f.....
            ......fdddddddf66f......
            .......ffddddfffff......
            .........f1e44ef........
            .........f1fddeef.......
            ..........f1ddeeef......
            ..........ffeeeeef......
            .........f89fffff.......
            ..........f88888f.......
            ..........ffffff........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........fffffffff.......
            .......f666666699f......
            ......f66666699991f.....
            .....f6666699999911f....
            ....f66666666999991f....
            ....f666699999999999f...
            ....f6669d9999996f69f...
            ....f66dfdd999996ff6f...
            .....fddfdd999966f.ff...
            .....fddddd99666f.......
            ......fddddd6df66f......
            .....fdffddddffffff.....
            .....fdde4111ee4eddf....
            ......ffee11eeee4ddf....
            ........ff11feeeeff.....
            .......f86f1eeeef68f....
            .......f886ffffff88f....
            .......ff88f.....ff.....
            .........ff.............
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            .........fffffffff......
            ........f666666699f.....
            .......f66666699991f....
            ......f6666699999911f...
            .....f66666666999991f...
            .....f666699999999999f..
            .....f6669d9999996f69f..
            .....f66dfdd999996ff6f..
            ......fddfdd999966f.ff..
            ......fddddd99666f......
            .......fddddd6df66ff....
            ........ffddddffffddf...
            .......fdd411eee4eddf...
            .......fdde1eeeee4ff....
            ........fff1feeeeff.....
            .........f8f1eeef68f....
            .........f86ffff688f....
            ..........ff...f88f.....
            ................ff......
            `],
        100,
        true
        )
    }
})
function level2 () {
    life = true
    kill()
    if (Checkpoint == 1) {
        tiles.setTilemap(tilemap`層級1`)
        scene.cameraFollowSprite(mySprite)
    } else if (Checkpoint == 2) {
        controller.moveSprite(mySprite, 100, 0)
        tiles.setTilemap(tilemap`層級3`)
    } else if (Checkpoint == 3) {
        controller.moveSprite(mySprite, 100 + info.score() / 2, 0)
        tiles.setTilemap(tilemap`層級5`)
    } else if (Checkpoint == 5) {
        scene.cameraFollowSprite(mySprite2)
        tiles.setTilemap(tilemap`層級13`)
    } else if (Checkpoint == 6) {
        controller.moveSprite(mySprite2, 100, 0)
        tiles.setTilemap(tilemap`層級14`)
    } else if (Checkpoint == 7) {
        controller.moveSprite(mySprite2, 100 + info.score() / 2, 0)
        tiles.setTilemap(tilemap`層級16`)
    } else if (Checkpoint == 4) {
        tiles.setTilemap(tilemap`層級23`)
    } else if (Checkpoint == 8) {
        tiles.setTilemap(tilemap`層級24`)
    }
    if (Checkpoint >= 1 && Checkpoint <= 4) {
        mySprite.ay = 220
    } else if (Checkpoint >= 5 && Checkpoint <= 8) {
        mySprite2.ay = 220
    }
    if (Checkpoint == 5) {
        info.setScore(0)
    } else if (Checkpoint >= 6 && Checkpoint <= 7) {
        info.setScore(8)
    }
    if (Checkpoint == 1) {
        info.setScore(0)
    } else if (Checkpoint >= 2 && Checkpoint <= 3) {
        info.setScore(8)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        flowe = sprites.create(img`
            . . . . . . . . . . 1 1 1 1 1 . 
            . . . . . . . . 1 1 7 7 7 7 7 1 
            . . . . . . 1 1 7 7 1 1 1 7 7 1 
            . . . . . 1 7 7 7 1 . 1 7 7 1 . 
            . . . . 1 7 7 1 1 . . 1 7 1 . . 
            . . . . 1 7 1 . . . 1 7 7 1 . . 
            . . . 1 7 7 1 . . . 1 1 1 1 . . 
            . . . 1 7 1 . . . 1 1 2 2 1 1 . 
            . . 1 1 1 1 1 1 1 1 2 2 2 2 1 1 
            1 1 2 2 2 2 2 2 1 1 2 2 2 2 2 1 
            1 2 2 2 2 2 2 2 1 1 2 2 2 2 2 1 
            1 2 2 2 2 2 2 2 1 1 2 2 2 2 2 1 
            1 2 2 2 2 2 2 2 1 1 1 1 2 2 1 1 
            1 2 2 2 2 2 2 2 1 . . 1 1 1 1 . 
            1 1 2 2 2 2 2 1 1 . . . . . . . 
            . 1 1 1 1 1 1 1 . . . . . . . . 
            `, SpriteKind.res)
        if (Checkpoint == 5) {
            flowe.setImage(img`
                1 1 1 1 1 1 . . . . . . . . . . 
                1 7 7 7 7 7 1 1 . . . . . . . . 
                1 7 7 1 1 1 7 7 1 1 . . . . . . 
                . 1 7 7 1 . 1 7 7 7 1 . . . . . 
                . . 1 7 1 . . 1 1 7 7 1 . . . . 
                . . 1 7 7 1 . . . 1 7 1 . . . . 
                . . 1 1 1 1 . . . 1 7 7 1 . . . 
                . 1 1 2 2 1 1 . . . 1 7 1 . . . 
                1 1 2 2 2 2 1 . 1 1 1 1 1 1 . . 
                1 2 2 2 2 2 1 1 2 2 2 2 2 2 1 1 
                1 2 2 2 2 2 1 1 2 2 2 2 2 2 2 1 
                1 2 2 2 2 2 1 1 2 2 2 2 2 2 2 1 
                1 1 2 2 1 1 1 1 2 2 2 2 2 2 2 1 
                . 1 1 1 1 . . 1 2 2 2 2 2 2 2 1 
                . . . . . . . 1 1 2 2 2 2 2 1 1 
                . . . . . . . . 1 1 1 1 1 1 1 . 
                `)
        }
        tiles.placeOnTile(flowe, value)
        tiles.setTileAt(value, assets.tile`myTile5`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile35`)) {
        flowe2 = sprites.create(img`
            . . . . . . . . . e e e e e e . 
            . . . . . . . . . . . e e . . . 
            . . . . . . . . . . . e 5 e . . 
            . . . . . . . . . . e 5 5 e . . 
            . . . . . . . . . e 5 5 5 e . . 
            . . . . . . e e e 5 5 5 e . . . 
            . e e e e e 1 1 5 5 5 5 e . . . 
            e 5 5 5 5 1 1 5 5 5 5 e . . . . 
            . e e 5 5 5 5 5 5 e e . . . . . 
            . . . e e e e e e . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.res2)
        if (Checkpoint == 5) {
            flowe2.setImage(img`
                . e e e e e e . . . . . . . . . 
                . . . e e . . . . . . . . . . . 
                . . e 5 e . . . . . . . . . . . 
                . . e 5 5 e . . . . . . . . . . 
                . . e 5 5 5 e . . . . . . . . . 
                . . . e 5 5 5 e e e . . . . . . 
                . . . e 5 5 5 5 1 1 e e e e e . 
                . . . . e 5 5 5 5 1 1 5 5 5 5 e 
                . . . . . e e 5 5 5 5 5 5 e e . 
                . . . . . . . e e e e e e . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        tiles.placeOnTile(flowe2, value)
        tiles.setTileAt(value, sprites.castle.tilePath5)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        win = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 7 1 1 . . . . . 
            . . . . . . . 1 7 7 7 1 . . . . 
            . . . . . . . 1 7 7 7 7 1 1 . . 
            . 1 1 1 1 1 1 7 7 7 7 7 7 7 1 . 
            1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 
            1 1 1 1 1 1 1 7 7 7 7 7 7 7 1 . 
            . . . . . . . 1 7 7 7 7 1 1 . . 
            . . . . . . . 1 7 7 7 1 . . . . 
            . . . . . . . 1 7 1 1 . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.winning)
        if (Checkpoint == 6 || Checkpoint == 5) {
            win.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 . . . . . . . . 
                . . . . . 1 1 7 1 . . . . . . . 
                . . . . 1 7 7 7 1 . . . . . . . 
                . . 1 1 7 7 7 7 1 . . . . . . . 
                . 1 7 7 7 7 7 7 1 1 1 1 1 1 1 . 
                1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 
                . 1 7 7 7 7 7 7 1 1 1 1 1 1 1 . 
                . . 1 1 7 7 7 7 1 . . . . . . . 
                . . . . 1 7 7 7 1 . . . . . . . 
                . . . . . 1 1 7 1 . . . . . . . 
                . . . . . . . 1 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        tiles.placeOnTile(win, value)
        if (Checkpoint == 1 || Checkpoint == 5) {
            tiles.setTileAt(value, assets.tile`myTile5`)
        } else if (Checkpoint == 2 || Checkpoint == 6) {
            tiles.setTileAt(value, sprites.castle.tilePath5)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        if (Checkpoint >= 1 && Checkpoint <= 3) {
            tiles.placeOnTile(mySprite, value)
        } else if (Checkpoint >= 5 && Checkpoint <= 7) {
            tiles.placeOnTile(mySprite2, value)
        } else if (Checkpoint == 4) {
            tiles.placeOnTile(mySprite, value)
        } else if (Checkpoint == 8) {
            tiles.placeOnTile(mySprite2, value)
        }
        if (Checkpoint == 1 || Checkpoint == 5) {
            tiles.setTileAt(value, assets.tile`myTile5`)
        } else if (Checkpoint == 2 || Checkpoint == 6) {
            tiles.setTileAt(value, sprites.castle.tilePath2)
        } else if (Checkpoint == 4) {
            tiles.setTileAt(value, assets.tile`myTile15`)
        } else if (Checkpoint == 8) {
            tiles.setTileAt(value, assets.tile`myTile45`)
        } else if (Checkpoint == 3) {
            tiles.setTileAt(value, assets.tile`myTile15`)
        } else if (Checkpoint == 7) {
            tiles.setTileAt(value, assets.tile`myTile15`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile22`)) {
        trap = sprites.create(img`
            . . . . . 2 . . . . 2 2 . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . 2 . . . . . . . . . . 2 . . 
            2 2 . . 2 2 2 2 2 2 2 . . 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . 2 2 2 2 2 4 2 4 2 2 4 2 2 2 . 
            . . 2 4 2 2 2 4 4 2 2 4 2 . . . 
            . 2 2 2 2 2 4 2 4 2 2 4 2 . . . 
            . . 2 2 2 4 2 2 4 4 2 4 2 . 2 . 
            . . 2 2 2 2 2 2 2 2 2 4 2 . 2 . 
            2 . 2 2 4 2 2 4 2 2 4 4 2 . 2 . 
            . . 2 2 2 2 4 2 4 4 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 . 2 . . 
            2 . . . 2 2 2 2 2 2 2 . 2 . 2 . 
            2 . . 2 . . . . . . . 2 . . 2 . 
            . . . . 2 2 . . 2 . . . . . . . 
            `, SpriteKind.ttrap)
        tiles.placeOnTile(trap, value)
        animation.runMovementAnimation(
        trap,
        "c 0-200 0 200 0 0",
        2000,
        true
        )
        if (Checkpoint == 1 || Checkpoint == 5) {
            tiles.setTileAt(value, assets.tile`myTile5`)
        } else if (Checkpoint == 2 || Checkpoint == 6) {
            tiles.setTileAt(value, sprites.castle.tilePath5)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile21`)) {
        item = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 3 3 . . . . 3 3 3 . . . 
            . . 3 2 2 2 3 . . 3 2 2 2 3 . . 
            . 3 2 2 2 2 2 3 3 2 2 2 2 2 3 . 
            . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 . 
            . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 . 
            . . 3 2 2 2 2 2 2 2 2 2 2 3 . . 
            . . 3 3 2 2 2 2 2 2 2 2 2 3 . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . . 3 3 2 2 2 2 3 3 . . . . 
            . . . . . 3 3 2 2 3 3 . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.heath)
        tiles.placeOnTile(item, value)
        if (Checkpoint == 1 || Checkpoint == 5) {
            tiles.setTileAt(value, assets.tile`myTile5`)
        } else if (Checkpoint == 2 || Checkpoint == 6) {
            tiles.setTileAt(value, sprites.castle.tilePath5)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile44`)) {
        item2 = sprites.create(img`
            9 9 9 9 9 9 9 9 2 9 9 9 9 9 9 9 
            2 2 9 9 9 9 9 2 2 9 9 9 9 9 2 2 
            9 2 9 9 9 9 9 2 9 9 9 9 9 9 2 9 
            9 9 9 3 3 3 9 9 9 9 3 3 3 9 9 9 
            9 9 3 2 2 2 3 9 9 3 2 2 2 3 9 9 
            9 3 2 2 2 2 2 3 3 2 2 2 2 2 3 9 
            9 3 2 2 2 2 2 2 2 2 2 2 2 2 3 9 
            9 3 2 2 2 2 2 2 2 2 2 2 2 2 3 9 
            9 9 3 2 2 2 2 2 2 2 2 2 2 3 9 9 
            9 9 3 3 2 2 2 2 2 2 2 2 2 3 9 9 
            9 9 9 3 3 2 2 2 2 2 2 3 3 9 9 9 
            9 2 2 9 3 3 2 2 2 2 3 3 9 9 2 2 
            2 2 9 9 9 3 3 2 2 3 3 9 9 9 9 2 
            9 9 9 2 9 9 3 3 3 3 9 9 2 9 9 9 
            9 9 9 2 9 9 9 3 3 9 9 9 2 2 2 9 
            9 9 2 2 9 9 9 9 9 9 9 9 9 9 2 9 
            `, SpriteKind.maxheal)
        tiles.placeOnTile(item2, value)
        if (Checkpoint == 3 || Checkpoint == 7) {
            tiles.setTileAt(value, assets.tile`myTile15`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile36`)) {
        wall = sprites.create(img`
            f f f c f f f f f f f f c f f f 
            f e e e c 7 b e e b 7 c e e e f 
            f e e e c 7 b e e b 7 c e e e f 
            f e c 1 b 7 b e e b 7 b 1 c e f 
            f e c 1 b 7 b e e b 7 b 1 c e f 
            f f c 1 b b b e e b b b 1 c f f 
            f f c 1 b b 7 7 7 7 b b 1 c f f 
            f f c 1 b b e 7 7 e b b 1 c f f 
            f f c 1 b b b 7 7 b b b 1 c f f 
            f f c 1 b b b e e b b b 1 c f f 
            f f c 1 b c b e e b c b 1 c f f 
            f e e 1 b c b e e b c b 1 e e f 
            f 7 e e c c b e e b c c e e 7 f 
            f 7 e e c c b e e b c c e e 7 f 
            f 7 e e c c b e e b c c e e 7 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.callboss)
        tiles.placeOnTile(wall, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile45`)) {
        fraction = sprites.create(img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b d d b . . . . . . 
            . . . . . b d 5 5 d b . . . . . 
            . . . . b b 5 5 5 5 b b . . . . 
            . . . . b 5 5 5 5 5 5 b . . . . 
            b b b b b 5 5 5 5 1 1 d b b b b 
            b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
            b d d 5 5 5 5 5 5 1 1 1 5 d d b 
            . b d d 5 5 5 5 5 5 5 5 d d b . 
            . . b b 5 5 5 5 5 5 5 5 b b . . 
            . . c b 5 5 5 5 5 5 5 5 b c . . 
            . . c 5 5 5 5 d d 5 5 5 5 c . . 
            . . c 5 5 d b b b b d 5 5 c . . 
            . . c 5 d b c c c c b d 5 c . . 
            . . c c c c . . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Fraction)
        tiles.placeOnTile(fraction, value)
    }
    if (Checkpoint == 1) {
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            `)
        game.splash("Jiuqudong")
    } else if (Checkpoint == 2) {
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            `)
        game.splash("Sha Ka-dang Trail")
    } else if (Checkpoint == 3) {
        game.splash("Qingshui Cliff")
    } else if (Checkpoint == 5) {
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            `)
        game.splash("Jiuqudong")
    } else if (Checkpoint == 6) {
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            `)
        game.splash("Sha Ka-dang Trail")
    } else if (Checkpoint == 7) {
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("I have a bad feeling", DialogLayout.Full)
        game.splash("Qingshui Cliff")
    } else if (Checkpoint == 4) {
    	
    } else if (Checkpoint == 8) {
    	
    }
}
function bullet () {
    if (Checkpoint == 0) {
    	
    } else if (Checkpoint >= 1 && Checkpoint <= 4) {
        if (info.score() < 10) {
            if (mySprite.vx >= 0 || mySprite.vx == 0) {
                mySprite.setImage(img`
                    ........................
                    ........................
                    ........................
                    ........ffffffff........
                    .......f44eaeeeef.......
                    ......f114a5aeeeef......
                    .....f41444a4444eef.....
                    .....f41444444444eef....
                    ....f4444444444444ef....
                    ....f444444444d44eef....
                    ....f44444444ddfddef....
                    ....f44444444ddfddf.....
                    .....fe44d44edddddf.....
                    ......fe4d44eddddf......
                    .....ffe4ef44edff.......
                    .....f44ef1444ef........
                    .....f44f111e4e1f.......
                    ......fef1111e1cf.......
                    ......fef111dd11f.......
                    .......ff111dd11f.......
                    ........fddddddf........
                    .........fffffff........
                    .........faaaaaaf.......
                    .........fffffff........
                    `)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                    . . 5 f f f f f f f 5 2 5 5 5 . 
                    . . 5 f f f f f f f 5 2 5 5 5 . 
                    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 200, 30)
            } else if (mySprite.vx < 0) {
                mySprite.setImage(img`
                    ........................
                    ........................
                    ........................
                    ........ffffffff........
                    .......f44eaeeeef.......
                    ......f114a5aeeeef......
                    .....f41444a4444eef.....
                    .....f41444444444eef....
                    ....f4444444444444ef....
                    ....f444444444d44eef....
                    ....f44444444ddfddef....
                    ....f44444444ddfddf.....
                    .....fe44d44edddddf.....
                    ......fe4d44eddddf......
                    .....ffe4ef44edff.......
                    .....f44ef1444ef........
                    .....f44f111e4e1f.......
                    ......fef1111e1cf.......
                    ......fef111dd11f.......
                    .......ff111dd11f.......
                    ........fddddddf........
                    .........fffffff........
                    .........faaaaaaf.......
                    .........fffffff........
                    `)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
                    . 5 5 5 2 5 f f f f f f f 5 . . 
                    . 5 5 5 2 5 f f f f f f f 5 . . 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, -200, 30)
            }
        } else {
            if (mySprite.vx >= 0 || mySprite.vx == 0) {
                mySprite.setImage(img`
                    ........................
                    ........................
                    ........................
                    ........ffffffff........
                    .......f44eaeeeef.......
                    ......f114a5aeeeef......
                    .....f41444a4444eef.....
                    .....f41444444444eef....
                    ....f4444444444444ef....
                    ....f444444444d44eef....
                    ....f44444444ddfddef....
                    ....f44444444ddfddf.....
                    .....fe44d44edddddf.....
                    ......fe4d44eddddf......
                    .....ffe4ef44edff.......
                    .....f44ef1444ef........
                    .....f44f111e4e1f.......
                    ......fef1111e1cf.......
                    ......fef111dd11f.......
                    .......ff111dd11f.......
                    ........fddddddf........
                    .........fffffff........
                    .........faaaaaaf.......
                    .........fffffff........
                    `)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                    . . 2 5 5 5 5 5 5 5 2 5 2 2 2 . 
                    . . 2 5 5 5 5 5 5 5 2 5 2 2 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 300, 10)
            } else if (mySprite.vx < 0) {
                mySprite.setImage(img`
                    ........................
                    ........................
                    ........................
                    ........ffffffff........
                    .......f44eaeeeef.......
                    ......f114a5aeeeef......
                    .....f41444a4444eef.....
                    .....f41444444444eef....
                    ....f4444444444444ef....
                    ....f444444444d44eef....
                    ....f44444444ddfddef....
                    ....f44444444ddfddf.....
                    .....fe44d44edddddf.....
                    ......fe4d44eddddf......
                    .....ffe4ef44edff.......
                    .....f44ef1444ef........
                    .....f44f111e4e1f.......
                    ......fef1111e1cf.......
                    ......fef111dd11f.......
                    .......ff111dd11f.......
                    ........fddddddf........
                    .........fffffff........
                    .........faaaaaaf.......
                    .........fffffff........
                    `)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 2 2 5 2 5 5 5 5 5 5 5 2 . . 
                    . 2 2 2 5 2 5 5 5 5 5 5 5 2 . . 
                    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, -300, 10)
            }
        }
    } else if (Checkpoint >= 5 && Checkpoint <= 8) {
        if (info.score() < 10) {
            if (mySprite2.vx <= 0 || mySprite2.vx == 0) {
                mySprite2.setImage(img`
                    ........................
                    ........................
                    ........................
                    ........ffffffff........
                    .......f66666699f.......
                    ......f6666699991f......
                    .....f666699999911f.....
                    ....f6666666999991f.....
                    ....f66669999999999f....
                    ....f6669d999999999f.3..
                    ....f66dfd699999999f....
                    .....fddfd6969996f6f....
                    .....fddddd6dd66f.f.....
                    ......fdddddddf66f......
                    .......ffddddfffff......
                    ........f144eef.........
                    .......f11eeeeef........
                    .......f1feeeeef........
                    .......f1eddeeef........
                    .......f1fddeeef........
                    ........ffeeeeef........
                    ........fffffff.........
                    .......f888888f.........
                    ........fffffff.........
                    `)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
                    . 5 5 5 2 5 f f f f f f f 5 . . 
                    . 5 5 5 2 5 f f f f f f f 5 . . 
                    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite2, -200, 30)
            } else if (mySprite2.vx > 0) {
                mySprite2.setImage(img`
                    ........................
                    ........................
                    ........................
                    .........ffffffff.......
                    ........f99666666f......
                    .......f1999966666f.....
                    ......f119999996666f....
                    ......f1999996666666f...
                    .....f99999999996666f...
                    .....f999999999d9666f...
                    .....f999999996dfd66f...
                    .....f6f6999696dfddf....
                    ......f.f66dd6dddddf....
                    .......f66fdddddddf.....
                    .......fffffddddff......
                    ..........fee441f.......
                    .........feeeee11f......
                    .........feeeeef1f......
                    .........feeedde1f......
                    .........feeeddf1f......
                    .........feeeeeff.......
                    ..........fffffff.......
                    ..........f888888f......
                    ..........fffffff.......
                    `)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                    . . 5 f f f f f f f 5 2 5 5 5 . 
                    . . 5 f f f f f f f 5 2 5 5 5 . 
                    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite2, 200, 30)
            }
        } else {
            if (mySprite2.vx <= 0 || mySprite2.vx == 0) {
                mySprite2.setImage(img`
                    ........................
                    ........................
                    ........................
                    ........ffffffff........
                    .......f66666699f.......
                    ......f6666699991f......
                    .....f666699999911f.....
                    ....f6666666999991f.....
                    ....f66669999999999f....
                    ....f6669d999999999f....
                    ....f66dfd699999999f....
                    .....fddfd6969996f6f....
                    .....fddddd6dd66f.f.....
                    ......fdddddddf66f......
                    .......ffddddfffff......
                    ........f144eef.........
                    .......f11eeeeef........
                    .......f1feeeeef........
                    .......f1eddeeef........
                    .......f1fddeeef........
                    ........ffeeeeef........
                    ........fffffff.........
                    .......f888888f.........
                    ........fffffff.........
                    `)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 2 2 5 2 5 5 5 5 5 5 5 2 . . 
                    . 2 2 2 5 2 5 5 5 5 5 5 5 2 . . 
                    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite2, -300, 10)
            } else if (mySprite2.vx > 0) {
                mySprite2.setImage(img`
                    ........................
                    ........................
                    ........................
                    .........ffffffff.......
                    ........f99666666f......
                    .......f1999966666f.....
                    ......f119999996666f....
                    ......f1999996666666f...
                    .....f99999999996666f...
                    .....f999999999d9666f...
                    .....f999999996dfd66f...
                    .....f6f6999696dfddf....
                    ......f.f66dd6dddddf....
                    .......f66fdddddddf.....
                    .......fffffddddff......
                    ..........fee441f.......
                    .........feeeee11f......
                    .........feeeeef1f......
                    .........feeedde1f......
                    .........feeeddf1f......
                    .........feeeeeff.......
                    ..........fffffff.......
                    ..........f888888f......
                    ..........fffffff.......
                    `)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                    . . 2 5 5 5 5 5 5 5 2 5 2 2 2 . 
                    . . 2 5 5 5 5 5 5 5 2 5 2 2 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite2, 300, 10)
            }
        }
    }
    if (info.score() == 10) {
        music.powerUp.play()
    }
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    info.changeScoreBy(1)
    status.spriteAttachedTo().destroy(effects.halo, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fraction, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile54`, function (sprite, location) {
    if (Checkpoint == 4) {
        Checkpoint = 3
    } else if (Checkpoint == 8) {
        Checkpoint = 7
    }
    level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    if (Checkpoint == 4) {
        Checkpoint = 3
    } else if (Checkpoint == 8) {
        Checkpoint = 7
    }
    level()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.winning, function (sprite, otherSprite) {
    if (Checkpoint == 1) {
        Checkpoint = 2
        level()
    } else if (Checkpoint == 2) {
        Checkpoint = 3
        level()
    } else if (Checkpoint == 5) {
        Checkpoint = 6
        level()
    } else if (Checkpoint == 6) {
        Checkpoint = 7
        level()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile59`, function (sprite, location) {
    if (Checkpoint == 4) {
        Checkpoint = 3
    } else if (Checkpoint == 8) {
        Checkpoint = 7
    }
    level()
})
scene.onHitWall(SpriteKind.bossprojectile, function (sprite, location) {
    sprite.destroy()
})
function enemy () {
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        .........ff.............
        ..........fff...........
        ..........fcf...........
        ........ffffcf..........
        ........ffccff..........
        .......fffffcf..........
        ......fccfcfcff.........
        ......f2cfccfcf.........
        ......f1cfcccccf........
        .......fafccffcf........
        ........ffcfccff........
        ........fcfffccf........
        .........fccaff.........
        .........fcccf..........
        ..........ffcf..........
        ...........ff...........
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    unfriendly = statusbars.create(10, 4, StatusBarKind.EnemyHealth)
    unfriendly.setLabel("HP")
    unfriendly.setColor(7, 2)
    unfriendly.max = 100
    unfriendly.attachToSprite(myEnemy)
    if (Checkpoint >= 1 && Checkpoint <= 3) {
        animation.runImageAnimation(
        myEnemy,
        [img`
            ............fff.........
            ...........ffcff........
            ............ffccff......
            .............fcfccf.....
            .............ffcccff....
            .............fcfcaaf....
            .......ff....fcfffaff...
            .......fcf..fcfcccfcf...
            ......ffcf.ffcfffaacf...
            .....fcccf.fcfcccfacf...
            .....f2ccffcccffaacf....
            .....f1cfffccfccfaff....
            ......facccffccfaff.....
            .......faccfcffaaf......
            ........faacf.fcff......
            .........fff..fcf.......
            .............fff........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ..........fff...........
            .........ffcff..........
            ..........ffccf.........
            ...........fcfff........
            .......ff..ffccf........
            .......fcf.fcfff........
            ......ffcfffcfcf........
            .....fcccffffccf........
            .....f2ccffcffff........
            .....f1cffcfcccf........
            ......faccccffcf........
            .......faccfccff........
            .......facfccff.........
            ........ff.ffaf.........
            ............fcf.........
            ............fcf.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........ff..............
            .........fff............
            .........fcf............
            .......ffffcf...........
            .......ffccff...........
            ......fffffcf...........
            .....fccfcfcff..........
            .....f2cfccfcf..........
            .....f1cfcccccf.........
            ......fafccffcf.........
            .......ffcfccff.........
            .......fcfffccf.........
            ........fccaff..........
            ........fcccf...........
            .........ffcf...........
            ..........ff............
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ..........fff...........
            .........ffcff..........
            ..........ffccf.........
            ...........fcfff........
            .......ff..ffccf........
            .......fcf.fcfff........
            ......ffcfffcfcf........
            .....fcccffffccf........
            .....f2ccffcffff........
            .....f1cffcfcccf........
            ......faccccffcf........
            .......faccfccff........
            .......facfccff.........
            ........ff.ffaf.........
            ............fcf.........
            ............fcf.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
        myEnemy.setPosition(mySprite.x + 70, mySprite.y)
        myEnemy.follow(mySprite, 10)
    } else if (Checkpoint >= 5 && Checkpoint <= 7) {
        animation.runImageAnimation(
        myEnemy,
        [img`
            .........fff............
            ........ffcff...........
            ......ffccff............
            .....fccfcf.............
            ....ffcccff.............
            ....faacfcf.............
            ...ffafffcf....ff.......
            ...fcfcccfcf..fcf.......
            ...fcaafffcff.fcff......
            ...fcafcccfcf.fcccf.....
            ....fcaaffcccffcc2f.....
            ....ffafccfccfffc1f.....
            .....ffafccffcccaf......
            ......faaffcfccaf.......
            ......ffcf.fcaaf........
            .......fcf..fff.........
            ........fff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ...........fff..........
            ..........ffcff.........
            .........fccff..........
            ........fffcf...........
            ........fccff..ff.......
            ........fffcf.fcf.......
            ........fcfcfffcff......
            ........fccffffcccf.....
            ........ffffcffcc2f.....
            ........fcccfcffc1f.....
            ........fcffccccaf......
            ........ffccfccaf.......
            .........ffccfcaf.......
            .........faff.ff........
            .........fcf............
            .........fcf............
            ..........fff...........
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ..............ff........
            ............fff.........
            ............fcf.........
            ...........fcffff.......
            ...........ffccff.......
            ...........fcfffff......
            ..........ffcfcfccf.....
            ..........fcfccfc2f.....
            .........fcccccfc1f.....
            .........fcffccfaf......
            .........ffccfcff.......
            .........fccfffcf.......
            ..........ffaccf........
            ...........fcccf........
            ...........fcff.........
            ............ff..........
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ...........fff..........
            ..........ffcff.........
            .........fccff..........
            ........fffcf...........
            ........fccff..ff.......
            ........fffcf.fcf.......
            ........fcfcfffcff......
            ........fccffffcccf.....
            ........ffffcffcc2f.....
            ........fcccfcffc1f.....
            ........fcffccccaf......
            ........ffccfccaf.......
            .........ffccfcaf.......
            .........faff.ff........
            .........fcf............
            .........fcf............
            ..........fff...........
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
        myEnemy.setPosition(mySprite2.x + -70, mySprite2.y)
        myEnemy.follow(mySprite2, 10)
    }
    for (let index = 0; index <= 1000; index++) {
        if (Checkpoint >= 1 && Checkpoint <= 3) {
            if (unfriendly.value != 0 && mySprite.x < myEnemy.x) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . a . . . 2 . . . . . 
                    . . . . . . a a a a a 2 . . . . 
                    . . . . a a 2 a 2 a a a a . . . 
                    . . . . . 2 a a a a a . . . . . 
                    . . . . . . a . . a 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, myEnemy, -50, 0)
                projectile2.setKind(SpriteKind.enenmyprojectile)
                pause(2000)
            } else if (unfriendly.value != 0 && mySprite.x > myEnemy.x) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . a . . . 2 . . . . . 
                    . . . . . . a a a a a 2 . . . . 
                    . . . . a a 2 a 2 a a a a . . . 
                    . . . . . 2 a a a a a . . . . . 
                    . . . . . . a . . a 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, myEnemy, 50, 0)
                projectile2.setKind(SpriteKind.enenmyprojectile)
                pause(2000)
            }
        } else if (Checkpoint >= 5 && Checkpoint <= 7) {
            if (unfriendly.value != 0 && mySprite2.x > myEnemy.x) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . a . . . 2 . . . . . 
                    . . . . . . a a a a a 2 . . . . 
                    . . . . a a 2 a 2 a a a a . . . 
                    . . . . . 2 a a a a a . . . . . 
                    . . . . . . a . . a 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, myEnemy, 50, 0)
                projectile2.setKind(SpriteKind.enenmyprojectile)
                pause(2000)
            } else if (unfriendly.value != 0 && mySprite2.x < myEnemy.x) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . a . . . 2 . . . . . 
                    . . . . . . a a a a a 2 . . . . 
                    . . . . a a 2 a 2 a a a a . . . 
                    . . . . . 2 a a a a a . . . . . 
                    . . . . . . a . . a 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, myEnemy, -50, 0)
                projectile2.setKind(SpriteKind.enenmyprojectile)
                pause(2000)
            }
        }
    }
    myEnemy.ay = 50
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (_switch == true) {
        if (Checkpoint == 0) {
        	
        } else if (Checkpoint >= 1 && Checkpoint <= 4) {
            bullet()
            music.knock.play()
        } else if (Checkpoint >= 5 && Checkpoint <= 8) {
            bullet()
            music.knock.play()
        }
    }
    _switch = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    if (Checkpoint == 2) {
        Checkpoint = 4
    } else if (Checkpoint == 6) {
        Checkpoint = 8
    }
    level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile57`, function (sprite, location) {
    if (Checkpoint == 4) {
        Checkpoint = 3
    } else if (Checkpoint == 8) {
        Checkpoint = 7
    }
    level()
})
scene.onOverlapTile(SpriteKind.butten, assets.tile`tileGrass3`, function (sprite, location) {
    speak2 = true
    DoubleCheck2 = 0
    if (controller.A.isPressed()) {
        Checkpoint = 5
        story.clearAllText()
        level()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.callboss, function (sprite, otherSprite) {
    tiles.destroySpritesOfKind(SpriteKind.callboss)
    boss2()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    sprite.destroy()
    if (info.score() < 5) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -20
    } else {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -30 - info.score()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Checkpoint == 0) {
    	
    } else if (Checkpoint >= 1 && Checkpoint <= 4) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........ffffffff........
            .......f44eeaeeef.......
            ......f1144a5aeeef......
            .....f414444ae44eef.....
            .....f41444444444eef....
            ....f4444444444444ef....
            ....f4444444444de4ef....
            .....f44e4444ddfdeef....
            .....f4ee4444ddfddf.....
            .....fee444444ddddf.....
            ....fee444444ddddf......
            ...ff44444ee44dff.......
            ..f4444eff1eeef.........
            ...ff44e11dd1cf.........
            .....fe111dd1f..........
            ......fddd11ff..........
            .......fffffcaf.........
            .......faaaaaf..........
            ........ffffff..........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            .........ffffffff.......
            ........f44eeaeeef......
            .......f1144a5aeeef.....
            ......f414444ae44eef....
            ......f41444444444eef...
            .....f4444444444444ef...
            .....f4444444444de4ef...
            ......f4ee4444ddfdeef...
            ......fee44444ddfddf....
            .....fee4444444ddddf....
            ....f4ee44f444ddddf.....
            ....feeffffee44dffdf....
            ...f4efdd1111e441ddf....
            ....fefdd11c1ceeefff....
            .....feff111111ff.......
            ......facfddddfcaf......
            ......faafffffcaaf......
            .......ff....faaff......
            ..............ff........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffffffff......
            .........f44eeaeeef.....
            ........f1144a5aeeef....
            .......f414444ae44eef...
            .......f41444444444eef..
            ......f4444444444444ef..
            ......f4444444444de4ef..
            .......f44e4444ddfdeef..
            .......f4e44444ddfddf...
            ......f4ee444444ddddf...
            .....f4ff44f444ddddf....
            ....f4fddfffee44dff.....
            ....f4fdd11111e44ddf....
            .....feff11c1cceeedf....
            ......feff111111fff.....
            .......facfddddfaf......
            .......faacffffcaf......
            ........faaf...ff.......
            .........ff.............
            `],
        100,
        true
        )
    } else if (Checkpoint >= 5 && Checkpoint <= 8) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........ffffffff........
            .......f19666666f.......
            ......f1199966666f......
            .....f919999996666f.....
            .....f9999999699666f....
            ....f99999999966966f....
            ....f99999999999696f....
            ....f966999999dfd96f....
            ....f9f6999d96dfddf.....
            .....f.f666dddddddf.....
            ......f66fdddddddf......
            ......fffffddddff.......
            ........fe44e1f.........
            .......feeddf1f.........
            ......feeedd1f..........
            ......feeeeeff..........
            .......fffff98f.........
            .......f88888f..........
            ........ffffff..........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........fffffffff.......
            .......f996666666f......
            ......f19999666666f.....
            .....f1199999966666f....
            .....f19999966666666f...
            ....f999999999996666f...
            ....f96f6999999d9666f...
            ....f6ff699999ddfd66f...
            ....ff.f669999ddfddf....
            ........f66699dddddf....
            .......f66fd6dddddf.....
            ......ffffffddddffdf....
            .....fdde4ee1114eddf....
            .....fdd4eeee11eeff.....
            ......ffeeeef11ff.......
            .....f86feeee1f68f......
            .....f88ffffff688f......
            ......ff.....f88ff......
            ..............ff........
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            .........fffffffff......
            ........f996666666f.....
            .......f19999666666f....
            ......f1199999966666f...
            ......f19999966666666f..
            .....f999999999996666f..
            .....f96f6999999d9666f..
            .....f6ff699999ddfd66f..
            .....ff.f669999ddfddf...
            .........f66699dddddf...
            .......ff66fd6dddddf....
            ......fddffffddddff.....
            ......fdde4eee114ddf....
            .......ff4eeeee1eddf....
            ........ffeeeef1fff.....
            .......f86feee1f8f......
            .......f886ffff68f......
            ........f88f...ff.......
            .........ff.............
            `],
        100,
        true
        )
    }
})
statusbars.onStatusReached(StatusBarKind.BOSSHP, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Fixed, 250, function (status) {
    bossVariables = false
    evilboss.ay = 5600
    while (bossVariables2 == true) {
        projectile3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . a . . . . c . . . . . . . 
            . . . c . 7 b 7 a . . . . . . . 
            . . . . a 7 7 a 7 . c . . . . . 
            . . . 7 7 a 5 7 a 7 a . . . . . 
            . a . 7 5 a 5 7 7 a . . . . . . 
            . c . 7 a a 5 5 7 b . . . . . . 
            . . a c 5 a a a 5 7 . . . . . . 
            . a . 7 5 7 a 7 5 7 . c . . . . 
            . . a 7 a 5 5 a 7 7 c . . . . . 
            . . . c 7 7 5 7 7 7 a . . . . . 
            . . . . c 7 a 7 7 . a . . . . . 
            . . . . . 7 c 7 . a . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.bossprojectile)
        if (Checkpoint == 3) {
            projectile3.setPosition(mySprite.x + randint(-50, 50), mySprite.y - mySprite.y)
        } else if (Checkpoint == 7) {
            projectile3.setPosition(mySprite2.x + randint(-50, 50), mySprite2.y - mySprite2.y)
        }
        projectile3.ay = 150
        if (Checkpoint == 3) {
            evilboss.vx = 50
            evilboss.follow(mySprite, 50)
        } else if (Checkpoint == 7) {
            evilboss.vx = 50
            evilboss.follow(mySprite2, 50)
        }
        pause(500)
    }
})
scene.onOverlapTile(SpriteKind.butten, assets.tile`tileGrass1`, function (sprite, location) {
    speak = true
    DoubleCheck = 0
    if (controller.A.isPressed()) {
        Checkpoint = 1
        story.clearAllText()
        level()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    otherSprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, myEnemy2).value += -150
    if (Checkpoint >= 1 && Checkpoint <= 3) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite).value += -33.4
    } else if (Checkpoint >= 5 && Checkpoint <= 7) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite2).value += -33.4
    }
    info.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.res, function (sprite, otherSprite) {
    music.spooky.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
    enemy()
})
scene.onOverlapTile(SpriteKind.Enemy2, assets.tile`myTile10`, function (sprite, location) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -150
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.point, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.BOSSHP, otherSprite).value += -5 - info.score() / 35
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.butten, assets.tile`tileGrass0`, function (sprite, location) {
    speak = true
    DoubleCheck = 0
    if (controller.A.isPressed()) {
        Checkpoint = 1
        story.clearAllText()
        level()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hazardLava0`, function (sprite, location) {
    if (Checkpoint >= 1 && Checkpoint <= 3) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite).value += -100
    } else if (Checkpoint >= 5 && Checkpoint <= 7) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite2).value += -100
    }
})
function enemy2 () {
    myEnemy2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        .........ff.............
        ..........fff...........
        ..........fcf...........
        ........ffffcf..........
        ........ffccff..........
        .......fffffcf..........
        ......fccfcfcff.........
        ......f2cfccfcf.........
        ......f1cfcccccf........
        .......fafccffcf........
        ........ffcfccff........
        ........fcfffccf........
        .........fccaff.........
        .........fcccf..........
        ..........ffcf..........
        ...........ff...........
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy2)
    if (Checkpoint >= 1 && Checkpoint <= 3) {
        animation.runImageAnimation(
        myEnemy2,
        [img`
            .................fff....
            .......ffff.....fceeff..
            .....ffeeeef...fdeffeef.
            ....feeeebbcf.fecf..ff..
            ...fdddebdcf...fecff....
            ...fd2deedccf...feedf...
            ..fdddadeebcbf...fffcf..
            ..f11ddeeeebfff....fef..
            ..fddaeeeeebcbbff..faf..
            ...feaaeeeffeccbbf..fef.
            ....faeaeeeeeeeccbf.fcf.
            .fffeaeaeeeeeeeecbf.fef.
            fcebaeeeaeeefeeeecbffef.
            f3cea3ceaeeefeeeecffdf..
            f33cf33ceeefdeeeeecfef..
            .fff.ffceffdddefebbfef..
            .......ffeeebbfeeebff...
            ......feeeebffeeeecbf...
            .....feeeecf..fceeebbf..
            .....fbeeecf...feecbf...
            .....ff333f....fcbbf....
            ....f3333f....ff33ef....
            ....fffff....f333cf.....
            .............fffff......
            `,img`
            .................fff....
            .......ffff.....fceeff..
            .....ffeeeef...fdeffeef.
            ....feeeebbcf.fecf..ff..
            ...fdddebdcf...fecff....
            ...fd2deedccf...feedf...
            ..fdddadeebcbf...fffcf..
            ..f11ddeeeebfff....fef..
            ..fddaaeeeebcbbff..faf..
            ...feeaaeeffeccbbf..fef.
            ....faeeaeeeeeeccbf.fcf.
            .fffaefefaeeeeeecbf.fef.
            fcebefeeeeaefeeeecbffef.
            f3cea3ceaeaefeeeecffdf..
            f33cf33ceeafdeeeeecfef..
            .fff.ffceffdddeeebbfef..
            .......ffeeebbceeebcf...
            ......feeeecfffceeebf...
            ......feeebf..fbeecbf...
            .....feeeecf...fcbbf....
            .....fbeeecf..ff333f....
            .....ff333f..f333cf.....
            ....f3333f...fffff......
            ....fffff...............
            `],
        200,
        true
        )
        myEnemy2.setPosition(mySprite.x + 70, mySprite.y - 10)
        myEnemy2.follow(mySprite, 30)
    } else if (Checkpoint >= 5 && Checkpoint <= 7) {
        animation.runImageAnimation(
        myEnemy2,
        [img`
            ....fff.................
            ..ffeecf.....ffff.......
            .feeffedf...feeeeff.....
            ..ff..fcef.fcbbeeeef....
            ....ffcef...fcdbedddf...
            ...fdeef...fccdeed2df...
            ..fcfff...fbcbeedadddf..
            ..fef....fffbeeeedd11f..
            ..faf..ffbbcbeeeeeaddf..
            .fef..fbbcceffeeeaaef...
            .fcf.fbcceeeeeeeaeaf....
            .fef.fbceeeeeeeeaeaefff.
            .feffbceeeefeeeaeeeabecf
            ..fdffceeeefeeeaec3aec3f
            ..fefceeeeedfeeec33fc33f
            ..fefbbefedddffecff.fff.
            ...ffbeeefbbeeeff.......
            ...fbceeeeffbeeeef......
            ..fbbeeecf..fceeeef.....
            ...fbceef...fceeebf.....
            ....fbbcf....f333ff.....
            ....fe33ff....f3333f....
            .....fc333f....fffff....
            ......fffff.............
            `,img`
            ....fff.................
            ..ffeecf.....ffff.......
            .feeffedf...feeeeff.....
            ..ff..fcef.fcbbeeeef....
            ....ffcef...fcdbedddf...
            ...fdeef...fccdeed2df...
            ..fcfff...fbcbeedadddf..
            ..fef....fffbeeeedd11f..
            ..faf..ffbbcbeeeeaaddf..
            .fef..fbbcceffeeaaeef...
            .fcf.fbcceeeeeeaeeaf....
            .fef.fbceeeeeeafefeafff.
            .feffbceeeefeaeeeefebecf
            ..fdffceeeefeaeaec3aec3f
            ..fefceeeeedfaeec33fc33f
            ..fefbbeeedddffecff.fff.
            ...fcbeeecbbeeeff.......
            ...fbeeecfffceeeef......
            ...fbceebf..fbeeef......
            ....fbbcf...fceeeef.....
            ....f333ff..fceeebf.....
            .....fc333f..f333ff.....
            ......fffff...f3333f....
            ...............fffff....
            `],
        200,
        true
        )
        myEnemy2.setPosition(mySprite2.x + -70, mySprite2.y - 10)
        myEnemy2.follow(mySprite2, 30)
    }
    myEnemy2.vy = 50000
    unfriendly = statusbars.create(10, 4, StatusBarKind.EnemyHealth)
    unfriendly.setLabel("HP")
    unfriendly.setColor(7, 2)
    unfriendly.max = 150
    unfriendly.value += 150
    unfriendly.attachToSprite(myEnemy2)
    for (let index = 0; index <= 1000; index++) {
        if (Checkpoint >= 1 && Checkpoint <= 3) {
            if (unfriendly.value != 0 && mySprite.x < myEnemy2.x) {
                projecttile3 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . a . . 1 . . 1 . . . . 
                    . . . . . . a 1 a 1 2 a 1 . . . 
                    . . . . . 1 1 a a a 1 2 . . . . 
                    . . . . a a 2 a 2 a a 1 a . . . 
                    . . . . . 2 a 1 a a 1 a 1 a . . 
                    . . . . . . a . . 1 2 1 . . . . 
                    . . . . . . . . . . . . 1 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, myEnemy2, -70, 10)
                projecttile3.setKind(SpriteKind.enenmyprojectile)
                pause(2000)
            } else if (unfriendly.value != 0 && mySprite.x > myEnemy2.x) {
                projecttile3 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 1 . . 1 . . a . . . . . 
                    . . . 1 a 2 1 a 1 a . . . . . . 
                    . . . . 2 1 a a a 1 1 . . . . . 
                    . . . a 1 a a 2 a 2 a a . . . . 
                    . . a 1 a 1 a a 1 a 2 . . . . . 
                    . . . . 1 2 1 . . a . . . . . . 
                    . . . 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, myEnemy2, 70, 10)
                projecttile3.setKind(SpriteKind.enenmyprojectile)
                pause(2000)
            }
        } else if (Checkpoint >= 5 && Checkpoint <= 7) {
            if (unfriendly.value != 0 && mySprite2.x > myEnemy.x) {
                projecttile3 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . a . . 1 . . 1 . . . . 
                    . . . . . . a 1 a 1 2 a 1 . . . 
                    . . . . . 1 1 a a a 1 2 . . . . 
                    . . . . a a 2 a 2 a a 1 a . . . 
                    . . . . . 2 a 1 a a 1 a 1 a . . 
                    . . . . . . a . . 1 2 1 . . . . 
                    . . . . . . . . . . . . 1 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, myEnemy2, 70, 10)
                projecttile3.setKind(SpriteKind.enenmyprojectile)
                pause(2000)
            } else if (unfriendly.value != 0 && mySprite2.x < myEnemy.x) {
                projecttile3 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 1 . . 1 . . a . . . . . 
                    . . . 1 a 2 1 a 1 a . . . . . . 
                    . . . . 2 1 a a a 1 1 . . . . . 
                    . . . a 1 a a 2 a 2 a a . . . . 
                    . . a 1 a 1 a a 1 a 2 . . . . . 
                    . . . . 1 2 1 . . a . . . . . . 
                    . . . 1 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, myEnemy2, -70, 10)
                projecttile3.setKind(SpriteKind.enenmyprojectile)
                pause(2000)
            }
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (Checkpoint >= 1 && Checkpoint <= 3) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite).value += -100
        info.changeScoreBy(-2)
    } else if (Checkpoint >= 5 && Checkpoint <= 7) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite2).value += -100
        info.changeScoreBy(-2)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enenmyprojectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Checkpoint >= 1 && Checkpoint <= 3) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite).value += -10
    } else if (Checkpoint >= 5 && Checkpoint <= 7) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite2).value += -10
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bossprojectile, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += -40
    otherSprite.destroy()
})
statusbars.onStatusReached(StatusBarKind.BOSSHP, statusbars.StatusComparison.GT, statusbars.ComparisonType.Fixed, 250, function (status) {
    while (bossVariables == true) {
        projectile3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . a . . . . c . . . . . . . 
            . . . c . 7 b 7 a . . . . . . . 
            . . . . a 7 7 a 7 . c . . . . . 
            . . . 7 7 a 5 7 a 7 a . . . . . 
            . a . 7 5 a 5 7 7 a . . . . . . 
            . c . 7 a a 5 5 7 b . . . . . . 
            . . a c 5 a a a 5 7 . . . . . . 
            . a . 7 5 7 a 7 5 7 . c . . . . 
            . . a 7 a 5 5 a 7 7 c . . . . . 
            . . . c 7 7 5 7 7 7 a . . . . . 
            . . . . c 7 a 7 7 . a . . . . . 
            . . . . . 7 c 7 . a . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.bossprojectile)
        if (Checkpoint == 3) {
            projectile3.setPosition(mySprite.x + randint(-50, 50), mySprite.y - mySprite.y)
        } else if (Checkpoint == 7) {
            projectile3.setPosition(mySprite2.x + randint(-50, 50), mySprite2.y - mySprite2.y)
        }
        projectile3.ay = 110
        pause(350)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile53`, function (sprite, location) {
    if (Checkpoint == 4) {
        Checkpoint = 3
    } else if (Checkpoint == 8) {
        Checkpoint = 7
    }
    level()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Checkpoint == 0) {
    	
    } else if (Checkpoint >= 1 && Checkpoint <= 4) {
        if (mySprite.vy != 0) {
            mySprite.vy = 200
        }
    } else if (Checkpoint >= 5 && Checkpoint <= 8) {
        if (mySprite2.vy != 0) {
            mySprite2.vy = 200
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile51`, function (sprite, location) {
    if (Checkpoint == 2) {
        Checkpoint = 4
    } else if (Checkpoint == 6) {
        Checkpoint = 8
    }
    level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile56`, function (sprite, location) {
    if (Checkpoint == 4) {
        Checkpoint = 3
    } else if (Checkpoint == 8) {
        Checkpoint = 7
    }
    level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile55`, function (sprite, location) {
    if (Checkpoint == 4) {
        Checkpoint = 3
    } else if (Checkpoint == 8) {
        Checkpoint = 7
    }
    level()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    if (info.score() < 10) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -20
    } else {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -20 - info.score() / 2
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, myEnemy).value += -100
    if (Checkpoint >= 1 && Checkpoint <= 3) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite).value += -33.4
    } else if (Checkpoint >= 5 && Checkpoint <= 7) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite2).value += -33.4
    }
    info.changeScoreBy(-1)
})
let DIE = 0
let moving = false
let projecttile3: Sprite = null
let myEnemy2: Sprite = null
let DoubleCheck = 0
let speak = false
let _switch = false
let projectile2: Sprite = null
let unfriendly: StatusBarSprite = null
let myEnemy: Sprite = null
let projectile: Sprite = null
let bossHP: StatusBarSprite = null
let bossVariables = false
let evilboss: Sprite = null
let fraction: Sprite = null
let wall: Sprite = null
let item2: Sprite = null
let item: Sprite = null
let trap: Sprite = null
let win: Sprite = null
let flowe2: Sprite = null
let flowe: Sprite = null
let friendly: StatusBarSprite = null
let button: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let projectile3: Sprite = null
let bossVariables2 = false
let DoubleCheck2 = 0
let speak2 = false
let life = false
let Checkpoint = 0
music.setVolume(15)
game.setDialogFrame(img`
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    `)
game.setDialogTextColor(2)
game.splash("Taroko Adventure")
game.showLongText("January 8, 2022 \\n 8:26 a.m.", DialogLayout.Full)
game.showLongText("We have received reports of anomalies in the flora and fauna of Taroko National Park", DialogLayout.Full)
game.showLongText("Dispatch professionals to investigate immediately.", DialogLayout.Full)
game.splash("Please prass\"a\" to select", "your role")
Checkpoint = 0
menu()
game.onUpdate(function () {
    if (Checkpoint == 0) {
        if (speak2 == true && DoubleCheck2 == 0) {
            story.startCutscene(function () {
                story.spriteSayText(button, "Tobe", 15, 9, story.TextSpeed.Fast)
            })
            speak2 = false
        } else if (speak2 == false && DoubleCheck2 == 0) {
            story.cancelAllCutscenes()
            DoubleCheck2 = 1
        }
        if (speak == true && DoubleCheck == 0) {
            story.startCutscene(function () {
                story.spriteSayText(button, "Toby", 15, 4, story.TextSpeed.Fast)
            })
            speak = false
        } else if (speak == false && DoubleCheck == 0) {
            story.cancelAllCutscenes()
            DoubleCheck = 1
        }
    }
})
game.onUpdate(function () {
    if (Checkpoint != 0) {
        button.destroy()
    }
})
game.onUpdate(function () {
    if (Checkpoint == 0) {
    	
    } else if (Checkpoint >= 1 && Checkpoint <= 4) {
        moving = controller.left.isPressed() || controller.right.isPressed()
        if (!(moving)) {
            mySprite.setImage(img`
                ........................
                ........................
                ........................
                ........ffffffff........
                .......f44eaeeeef.......
                ......f114a5aeeeef......
                .....f41444a4444eef.....
                .....f41444444444eef....
                ....f4444444444444ef....
                ....f444444444d44eef....
                ....f44444444ddfddef....
                ....f44444444ddfddf.....
                .....fe44d44edddddf.....
                ......fe4d44eddddf......
                .....ffe4ef44edff.......
                .....f44ef1444ef........
                .....f44f111e4e1f.......
                ......fef1111e1cf.......
                ......fef111dd11f.......
                .......ff111dd11f.......
                ........fddddddf........
                .........fffffff........
                .........faaaaaaf.......
                .........fffffff........
                `)
        }
    } else if (Checkpoint >= 5 && Checkpoint <= 8) {
        moving = controller.left.isPressed() || controller.right.isPressed()
        if (!(moving)) {
            mySprite2.setImage(img`
                ........................
                ........................
                ........................
                ........ffffffff........
                .......f66666699f.......
                ......f6666699991f......
                .....f666699999911f.....
                ....f6666666999991f.....
                ....f66669999999999f....
                ....f6669d999999999f....
                ....f66dfd699999999f....
                .....fddfd6969996f6f....
                .....fddddd6dd66f.f.....
                ......fdddddddf66f......
                .......ffddddfffff......
                ........f144eef.........
                .......f11eeeeef........
                .......f1feeeeef........
                .......f1eddeeef........
                .......f1fddeeef........
                ........ffeeeeef........
                ........fffffff.........
                .......f888888f.........
                ........fffffff.........
                `)
        }
    }
    if (Checkpoint == 0) {
    	
    } else if (Checkpoint >= 1 && Checkpoint <= 4) {
        life = friendly.value != 0
        if (life == false) {
            if (Checkpoint == 1) {
                Checkpoint = 1
            } else if (Checkpoint >= 2 && Checkpoint <= 3) {
                Checkpoint = 2
            } else if (Checkpoint == 5) {
                Checkpoint = 5
            } else if (Checkpoint >= 6 && Checkpoint <= 7) {
                Checkpoint = 6
            }
            friendly.value = 100
            bossVariables = false
            bossVariables2 = false
            DIE = randint(1, 5)
            game.setDialogFrame(img`
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                `)
            game.setDialogTextColor(2)
            if (DIE == 1) {
                game.showLongText("Despise not death, but welcome it, for nature wills it take all else.--Marcus Aurelius", DialogLayout.Full)
            } else if (DIE == 2) {
                game.showLongText("Death is a delightful place for weary men.--Herodotus", DialogLayout.Full)
            } else if (DIE == 3) {
                game.showLongText("Death never takes the wise man by surprise ,he is always ready to go.--Jean de la Fontaine", DialogLayout.Full)
            } else if (DIE == 4) {
                game.showLongText("Death pay all debts.--WillIam Shakespeare", DialogLayout.Full)
            } else if (DIE == 5) {
                game.showLongText("It is not death a man should fear never beginning to live.--Marcus Aurelius", DialogLayout.Full)
            }
            DIE = 0
            level2()
        }
    } else if (Checkpoint >= 5 && Checkpoint <= 8) {
        life = friendly.value != 0
        if (!(life)) {
            if (Checkpoint == 5) {
                Checkpoint = 5
            } else if (Checkpoint >= 6 && Checkpoint <= 7) {
                Checkpoint = 6
            }
            friendly.value += 100
            bossVariables = false
            bossVariables2 = false
            DIE = randint(1, 5)
            game.setDialogFrame(img`
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f 
                `)
            game.setDialogTextColor(2)
            if (DIE == 0) {
                game.showLongText("Despise not death, but welcome it, for nature wills it take all else.--Marcus Aurelius", DialogLayout.Full)
            } else if (DIE == 1) {
                game.showLongText("Death is a delightful place for weary men.--Herodotus", DialogLayout.Full)
            } else if (DIE == 2) {
                game.showLongText("Death never takes the wise man by surprise ,he is always ready to go.--Jean de la Fontaine", DialogLayout.Full)
            } else if (DIE == 3) {
                game.showLongText("Death pay all debts.--WillIam Shakespeare", DialogLayout.Full)
            } else if (DIE == 4) {
                game.showLongText("It is not death a man should fear never beginning to live.--Marcus Aurelius", DialogLayout.Full)
            }
            DIE = 0
            level2()
        }
    }
})
game.onUpdateInterval(200, function () {
    _switch = true
})
