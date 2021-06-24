const textE1= document.getElementById('text')
const speedE1= document.getElementById('speed')
const text= 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'

let idx = 1
let speed = 300/speedE1.value

writeText()
function writeText(){
    textE1.innerText = text.slice(0, idx)
    idx++
    if(idx>text.length){
        idx = 1
    }
    setTimeout(writeText, speed)
}
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)