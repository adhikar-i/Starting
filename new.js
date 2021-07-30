let time;
let a;

setInterval(() => {
var a= new Date();
time=a.getHours() + ":"+ a.getMinutes()+ ":"+ a.getSeconds();
document.getElementById('time').innerHTML = time;

},1000);


