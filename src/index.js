import './compositor.js'

const cmp = new Compositor()

function updateLoop() {
    cmp.render()
    window.requestAnimationFrame(updateLoop)
}

window.requestAnimationFrame(updateLoop)