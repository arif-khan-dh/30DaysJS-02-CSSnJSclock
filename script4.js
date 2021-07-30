const clock = document.getElementById('clock')
const btnStart = document.getElementById('btnStart')
const btnStop = document.getElementById('btnStop')

let secHand = document.getElementById('sec')
let minHand = document.getElementById('min')
let hourHand = document.getElementById('hour')


const initDeg = 90, incDeg = 6
const finalDeg = initDeg + 360

let degSec = initDeg
let degMin = initDeg
let degHour = initDeg

let toggle = false

function rotateSec () {    
    if(degSec == finalDeg) {
        degSec = initDeg
        rotateMin()
        secHand = reset(secHand)
    }    
    degSec += 6    
    secHand.style.transform = 'rotate('+ degSec +'deg)'    
}

function rotateMin() {
    if(degMin == finalDeg) {
        degMin = initDeg
        minHand = reset(minHand)  
    }

    if( (degMin % 72) == 0) {
        rotateHour()
    }
    degMin += 6
    minHand.style.transform = 'rotate('+ degMin +'deg)'
}

function rotateHour() {
    if(degHour == finalDeg) {
        degHour = initDeg
        hourHand = reset(hourHand)
    }
    degHour += 6
    hourHand.style.transform = 'rotate('+ degHour +'deg)'
}

let timer = undefined
// let states = {init: true, running: false, paused: false}

btnStart.addEventListener('click', () => {
    toggle = !toggle
    btnStop.classList.toggle('disabled')
    if(toggle) {
        timer =  setInterval(rotateSec, 500)
        btnStart.textContent = 'Pause'        
    } else {
        clearInterval(timer)
        btnStart.textContent = 'Start'
    }
});

btnStop.addEventListener('click', (e) => {
    if(toggle) {
        btnStart.textContent = 'Start'
        clearInterval(timer)
        const hands = clock.querySelectorAll('.hand')
        hands.forEach(hand => {
            hand.style.transform = `rotate(90deg)`
        })
        resetAllDeg()
        toggle = !toggle
        btnStop.classList.toggle('disabled')
    }
})

function resetAllDeg() {
    degSec = initDeg
    degMin = initDeg
    degHour = initDeg
}

function reset(hand) {
    let newHand = hand.cloneNode(true)
    clock.replaceChild(newHand, hand)
    return newHand
}