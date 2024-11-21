import Countdown from './modules/countdown.js';

const futureDate = new Countdown('29 June 2090 23:30:00 GMT-0300');
const data = document.querySelectorAll("span");
setInterval(() =>{
    const period = futureDate.periodToDate;
    const periodArr = Array.from(period);
    for(let i=0;i<data.length;i++){
        data[i].innerText = periodArr[i]
    }
}, 1000);