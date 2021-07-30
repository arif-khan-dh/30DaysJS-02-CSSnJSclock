const button = document.getElementById('clickme')
const secHand = document.getElementById('sec')
const minHand = document.getElementById('min')
const hourHand = document.getElementById('hour')

function setTime() {
    const now = new Date()
    const secs  = now.getSeconds()
    const angle = ((secs / 60) * 360) + 90

    secHand.style.transform = 'rotate(' + angle + 'deg)'

    // console.log(angle)
}

setTime()

setInterval(setTime, 1000)