console.log("Welcome to Employee Wage");
//UC1-To Check If Employee is Absent Or Present
console.log("UC1-To Check If Employee is Absent Or Present");
const  IS_ABSENT=0;
{
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is absent");
}
else
{
    console.log("Employee is present");
}
}
//UC2-To Check PartTime and FullTime Wage
console.log("uc2-PartTime or fulltime wage")
const IS_Full_TIME=2;
const IS_PART_TIME=1;
const WAGE_PER_HOUR=20;
let emp_hours=0;
let checkForEmployeePresence= Math.floor((Math.random()*10)%3);
switch(checkForEmployeePresence)
{
    case 1:       
        emp_hours=4;
        break;
    case 2:      
        emp_hours=8;
        break;
    default:
        emp_hours=0;
        break;
}
let employeeWage= WAGE_PER_HOUR*emp_hours;
console.log("empWage : "+employeeWage);
