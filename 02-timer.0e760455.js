function t(t){return String(t).padStart(2,"0")}({start(){const o=Date.now();console.log(o),setInterval((()=>{const e=function(o){const e=t(Math.floor(o%864e5/36e5)),n=t(Math.floor(o%864e5/6e4)),r=t(Math.floor(o%864e5/1e3));return{hours:e,mins:n,secs:r}}(Date.now()-o);console.log(e)}),1e3)}}).start();
//# sourceMappingURL=02-timer.0e760455.js.map
