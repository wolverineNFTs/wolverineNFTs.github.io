var deadline = new Date("March 14, 2022 12:00:00").getTime();
curr_time = new Date().getTime()
var distance = deadline - curr_time;
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);


console.log(distance)
console.log(seconds)
console.log(minutes)
console.log(hours)
console.log(days)