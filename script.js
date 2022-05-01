

const title = document.querySelector('h1')

setInterval(()=>{
    const time = new Date()
    let sec = time.getSeconds()
    let min = time.getMinutes()
    let hour = time.getHours()
    if(sec<10){
        sec = "0" + sec
    }
    if(min<10){
        min = "0" + min
    }
    console.log(hour,min,sec)
    title.innerHTML = `${hour} : ${min} : ${sec}`
}, 1000)