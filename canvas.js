//at the first frame
window.addEventListener('load', () => {
    
    //canvas properties
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    const button = document.querySelector('#button');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    let painting = false;
    
    //canvas functionalities
    function startPosition(e) {
        painting = true;
        draw(e);
    }
    
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    
    
    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    
    function changeToRed() {
        ctx.strokeStyle = `rgb(${generateRandomIntegerInRange(0, 255)}, ${generateRandomIntegerInRange(0, 255)}, ${generateRandomIntegerInRange(0, 255)})`;
    }
    
    button.addEventListener('click', changeToRed)
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
})

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

