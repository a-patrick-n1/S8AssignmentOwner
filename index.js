const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1880
canvas.height = 880

const player = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    color: 'green',
    imageSrc: './player.png'
})
const enemy = new Sprite({
    position: {
        x: 1200,
        y: 0
    }
})
const bullet = new Projectile()

function animate() {
    window.requestAnimationFrame(animate)

    c.fillStyle = 'black'
    c.fillRect(0,0,canvas.width,canvas.height)

    if(player.left){
        player.velocity.x = -7
    } else if (player.right) {
        player.velocity.x = 7
    } else {
        player.velocity.x = 0
    }

    if(player.shot){
        bullet.velocity.x = 100
    }
    if(bullet.position.x >= canvas.width) {
        player.shot = false
    }
    bullet.draw()
    bullet.update()
    enemy.draw()
    enemy.update()
    player.draw()
    player.update()
}

animate()