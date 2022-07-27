// ########################################## Dates objects ######################################################

// create object first => crruent time basis
const MyDate = new Date();
console.log(MyDate);  // output => 2022-07-27T02:59:35.420Z // from the internet

// .getTime() => date returns in milisecond :
console.log(MyDate.getTime()); // output => 1658892028880
// Date.now() => time in milisec
console.log(Date.now());
//.getDay() => days retruns Monday to sunday

console.log(MyDate.getDay()); //  output => 3

// .getHours() => retruns the only hour digit
console.log(MyDate.getHours()); // output => 9
// .getMinutes() =>
console.log(MyDate.getMinutes()); // output => 0
// .getSecond() =>
console.log(MyDate.getSeconds()); // output => 45
// .getMonth() => retruns month value start with 0 and end in 11.
console.log(MyDate.getMonth()); // output => 6 // its july right now but in js number start 0-11 (jan -0) and (Dec-11)
// .getFullYear() => retruns the  year 
console.log(MyDate.getFullYear()); // output => 2022
// there are many more methods


// We use Date object with customized date as well passing as and argument.
// there are seven parameter we use =>  (Year,MonthIdx,Date, Hours, Minutes, seconds,miliseconds)

const OldDate = new Date(2019 ,11 ,10 , 17 ,10 ,20 , 30); // passparameters year to mili second as per the requirment.
 
console.log(OldDate.getFullYear()); // OUTPUT => 2019

console.log(OldDate.getMonth()); // output => 11 // as same as above

// Passing argument as and string formate =>
console.log(MyDate.toString()); // output => Wed Jul 27 2022 09:29:35 GMT+0530 (India Standard Time)
console.log(OldDate.toString()); // output => Tue Dec 10 2019 17:10:20 GMT+0530 (India Standard Time)

const StrDate = new Date("Tue Dec 10 2019 17:10:20"); // pass value as string
console.log(StrDate.getFullYear()); // output =>2019
console.log(StrDate.getMonth()); // output =>11
console.log(StrDate.getDate()); // output =>10 // all methord work as same as above

//****************************************************************************************************************************************\



