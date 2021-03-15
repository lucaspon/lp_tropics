// parameters in this artwork:
//  number of circles
//  size of each circle
//  color of each circle
//  position of each circle
//  transparency of each circle

function setup() {
    // background color
    let bg = [color(0, 0, 0), color(250, 250, 250)]

    createCanvas(min(window.innerWidth, window.innerHeight) * 0.75, min(window.innerWidth, window.innerHeight) * 0.75)
    strokeWeight(0)
    background(bg[0])
    noLoop()
}

function draw() {
    let circlecount = Math.round(random(4, 8)) // define how many circles there are
    let px = []
    let py = []
    let bcl = []
    let bsz = []
    let palette1 = []
    // let palette2 = []

    // limit possible colors ------------
    palette1 = [
        color(112, 132, 68), // light green
        color(58, 90, 45), // dark green
        color(252, 188, 25), // light yellow
        color(251, 215, 0), // dark yellow
        color(183, 37, 46), // red
        color(248, 147, 29), // light orange
        color(255, 255, 255), // white
        color(223, 103, 39) // dark orange
    ]
   

    // define each circle
    for (i = 0; i < circlecount; i++) {
        if (i <= 4) {
            if (i % 2 == 0) {
                px[i] = Math.round(random(-width * 0.5, width * 1 / 8)) // pos x
                py[i] = Math.round(random(0, height)) // pos y
            } else {
                px[i] = Math.round(random(width * 7 / 8, width * 1.5)) // pos x
                py[i] = Math.round(random(0, height)) // pos y
            }
        } else {
            if (i % 2 == 0) {
                px[i] = Math.round(random(-width * 0.5, width * 1 / 8)) // pos x
                py[i] = Math.round(random(height * 3 / 4, height * 1.25)) // pos y
            } else {
                px[i] = Math.round(random(width * 7 / 8, width * 1.5)) // pos x
                py[i] = Math.round(random(-height * 1 / 4, height * 1 / 4)) // pos y
            }
        }

        bsz[i] = random(width / 2, width * 2) // circle size
        bcl[i] = random(palette1) // circle color
        if (i > 2) {
            bcl[i].setAlpha(random(75, width / circlecount)) // set transparency
        }
    }

    // draw circles
    for (i = 0; i < circlecount; i++) {
        fill(bcl[i])
        circle(px[i], py[i], bsz[i])
    }
}