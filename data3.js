var Holidays = require('date-holidays')
var hd = new Holidays()
var moment = require('moment-business-days');

 var date='09/12/2021'
// console.log(new Date(date))
// hd = new Holidays('US')

// a=hd.getHolidays(2016)

/*
a.map((item)=>{
  if(item.date.slice(0,10)==date){
    a=parseInt(date.slice(8,10))
    console.log(item)
  }
})
*/
//console.log(moment('31-01-2015', 'DD-MM-YYYY').isBusinessDay()) // false

if(moment(date, 'MM/DD/YYYY').isBusinessDay()){
  //console.log('yes')
  console.log(date)
}
else{
  a=moment(date, 'MM/DD/YYYY').nextBusinessDay()
  a=moment(a).format('L');
  console.log(a)
}

//console.log(a[0].date.slice(0,10))
//2016-12-31T05:00:00.000Z
//console.log(parseInt(date.slice(7,10)))

// a=moment('2021-09-21', 'YYYY-MM-DD').nextBusinessDay()
// console.log(new moment(a))
// //const d = new Date(a);

// a=moment(a).format();
// console.log(a.slice(0,10))
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'))