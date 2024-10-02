let time = 1500; // 25 minutes = 1500 seconds
const timer = setInterval(() => {
    if(time <= 0){
        clearInterval(timer);
        alert('Time for a break!');
    } else {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60; 
        document.getElementById('timer').innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--;
    }
}, 1000

)