

function time(){ 
    const time = new Date()
    const title = document.querySelector('h1')
    let sec = time.getSeconds()
    let min = time.getMinutes()
    let hour = time.getHours()
    if(sec<10){
        sec = "0" + sec
    }
    if(min<10){
        min = "0" + min
    }
    title.innerHTML = `${hour} : ${min} : ${sec}`
}
time();
function setvalue(){ 
    document.getElementById('ora').value = 00
    document.getElementById('min').value = 00
    document.getElementById('sec').value = 00
}
setvalue()
const timeInterval = setInterval(()=>{
    time()
}, 1000)
const sveglia = document.querySelector('button')
const sveglieImpostate = document.querySelector('.sveglie')
const Sveglie =[]
sveglia.addEventListener('click',()=>{
    const hourSveglia = parseInt(document.getElementById('ora').value)
    const minSveglia = parseInt(document.getElementById('min').value) 
    const secSveglia = parseInt(document.getElementById('sec').value)
    console.log(hourSveglia,minSveglia,secSveglia)
    const newSveglia = {ore : hourSveglia + ":",min : minSveglia + ":",sec : secSveglia }
    Sveglie.push(newSveglia)
    console.log(Sveglie)
    Sveglie.forEach(el=>{
        const p = document.createElement('p')
        sveglieImpostate.appendChild(p)
        p.append(el.ore,el.min,el.sec)
    })
    setvalue()
    setIntervalSveglia(hourSveglia,minSveglia,secSveglia)
})

function setIntervalSveglia (hourParam, minParam,secParam){
    const sveglietta = setInterval(()=>{
    const time = new Date()
    let sec = time.getSeconds()
        let min = time.getMinutes()
        let hour = time.getHours()
        if(sec == secParam && hour == hourParam && min == minParam){
            clearInterval(sveglietta)
            alert("sveglia!!!!!!!!!!")
        }
    },1000)
}