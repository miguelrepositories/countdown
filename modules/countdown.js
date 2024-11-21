export default class Countdown {
    constructor(date){
        this.date = date;
    }
    get _futureDate(){
        return new Date(this.date);
    }
    get _timeStampDiff(){
        let currentDate = new Date();
        return this._futureDate - currentDate;
    }
    get _days(){
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
    }
    get _hours(){
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
    }
    get _minutes(){
        return Math.floor(this._timeStampDiff / (60 * 1000));
    }
    get _seconds(){
        return Math.floor(this._timeStampDiff / 1000);
    }
    get periodToDate(){
        return {
            0: (this._days).toString(),
            1: (this._days % 24).toString().padStart(2, '0'), 
            2: (this._minutes % 60).toString().padStart(2, '0'), 
            3: (this._seconds % 60).toString().padStart(2, '0'), 
            length: 4
        };
    }
}