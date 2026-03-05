function startVintageClock() {
    function update() {
        const now = new Date();
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();

        const ampm = h >= 12 ? 'PM' : 'AM';

        h = h % 12;
        h = h ? h : 12; 

        
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        document.getElementById('clock-text').innerHTML = 
            `${h}:${m}:${s} <span style="font-size: 11px; color: #00ff00;">${ampm}</span>`;
    }
    
    setInterval(update, 1000);
    update();
}

startVintageClock();
