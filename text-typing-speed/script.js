const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
//const text = 'consectetur, adipisci velit'
const text = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
let idx = 1
let speed = 300 / speedEl.value
writeText()
function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)