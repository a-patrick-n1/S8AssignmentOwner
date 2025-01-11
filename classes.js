class Sprite {
    constructor({position, color = 'red', imageSrc}){
        this.position = position
        this.color = color
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 150
        this.height = 150
        this.sides = {
            bottom: this.position.y + this.height,
            right: this.position.x + this.width
        }
        this.left = false
        this.right = false
        this.shot = false
        this.jumps = 2
        this.image = new Image()
        this.image.src = imageSrc
    }
    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        this.sides.bottom = this.position.y + this.height
        if(this.sides.bottom >= canvas.height){
            this.velocity.y = 0
            this.position.y = canvas.height - this.height
            this.jumps = 2
        } else {
            this.velocity.y++
        }
    }
}

class Projectile {
    constructor(){
        this.position = {
            x: 0,
            y: 0
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 50
        this.height = 20
    }
    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update(){
        this.position.x += this.velocity.x
        if(!player.shot){
            this.position.x = player.position.x + 75
            this.position.y = player.position.y + 75
        }
    }
}