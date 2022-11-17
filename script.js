const tiltEls = document.querySelectorAll('.tilt')

const tiltMove = (x, y) => `perspective(500px) rotateX(${x}deg) rotateY(${y}deg)`

tiltEls.forEach(tilt => {
    const height = tilt.clientHeight
    const width = tilt.clientWidth
    // console.log(height, width)

    tilt.addEventListener('mousemove', (e) => {
        const x = e.layerX
        const y = e.layerY

        const multiplier = 10;

        const xRotate = -multiplier * ((y - width / 2) / width * .5)
        const yRotate = multiplier * ((x - height / 2) / height * 1.25)

        tilt.style.transform = tiltMove(xRotate, yRotate)
    })

    tilt.addEventListener('mouseout', () => tilt.style.transform = tiltMove(0, 0))
})