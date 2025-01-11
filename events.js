window.addEventListener('keydown', event => {
    switch(event.key){
        case 'w':
            if(player.jumps > 0) {
                player.velocity.y = -20
                player.jumps -= 1
            }
        break
        case 'a':
            player.left = true
        break
        case 'd':
            player.right = true
        break
        case ' ':
            player.shot = true
        break 
        case 's':
            player.velocity.y = 50
        break
    }
})

window.addEventListener('keyup', event => {
    switch(event.key){
        case 'a':
            player.left = false
        break
        case 'd':
            player.right = false
        break
    }
})