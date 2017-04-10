c = document.createElement('canvas') 
c.width = 800;
c.height = 600;
document.body.appendChild(c);
ctx = c.getContext('2d');
ctx.beginPath();
ctx.fillRect(0,0,800,600);
ctx.fillStyle = 'red';
ctx.fillRect(0,0,800,600);
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,750,600);
ctx.fillRect(0,0,750,550);
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,750,550);
ctx.fillStyle = 'red';
ctx.fillRect(0,0,750,550);
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,700,500);
ctx.fillStyle = 'red';
ctx.fillRect(20,20,700,500);
ctx.fillStyle = 'blue';
ctx.fillRect(40,40,600,400);
ctx.fillStyle = 'red';
ctx.fillRect(50,50,60,40);
ctx.fillStyle = 'red';
ctx.fillRect(60,50,60,40);
ctx.fillStyle = 'red';
ctx.fillRect(120,50,60,40)
ctx.fillStyle = 'blue';
ctx.fillRect(80,10,60,40);
ctx.font = "30px Arial";
ctx.strokeText;
ctx.strokeText("DANK JAVASCRIPT",10, 10)
