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
//UC2-To Check PartTime and FullTime WageS
console.log("UC2-PartTime or fulltime wage")
const IS_Full_TIME=2;
const IS_PART_TIME=1;
const WAGE_PER_HOUR=20;
let emp_hours=0;
let empCheck= Math.floor((Math.random()*10)%3);
switch(empCheck)
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
console.log("empWage for UC2 : "+employeeWage);
//UC3-Refractoring UC2 to Write Functions
{
    console.log("UC3-Refractor UC2 to Write Functions");  
    const IS_Full_TIME=2;
    const IS_PART_TIME=1;
    const Full_TIME_HRS=8;
    const PART_TIME_HRS=4;
    const WAGE_PER_HOUR=20;
    function getWorkingHrs(empCheck)
    {
        switch(empCheck)
        {
            case 1:       
                return PART_TIME_HRS;
                
            case 2:      
                 return Full_TIME_HRS;           
            default:
                return 0;        
    
        }
    }
    let empCheck= Math.floor((Math.random()*10)%3);
    let empHrs=getWorkingHrs(empCheck);
    let employeeWage= WAGE_PER_HOUR*emp_hours;
    console.log("empWage For UC3: "+employeeWage);
    //UC4-Calculating Wage For a month 
    const NUM_OF_WORKING_DAYS=20;
    let totalWorkinghrs=0;
    for(let day=0;day<=NUM_OF_WORKING_DAYS;day++)
    {
        let empCheck= Math.floor((Math.random()*10)%3);
        empHrs=getWorkingHrs(empCheck); 
        totalWorkinghrs+=empHrs   
    }
    employeeWage= totalWorkinghrs*WAGE_PER_HOUR;
    console.log("EmployeeWage for month UC4 : "+ employeeWage);

    //UC5-Total Working Hours Less Than 100 or Total working days less than 20
    console.log("UC5-Total Working Hours Less Than 100 or Total working days less than 20");
    const MAX_WORKING_HOURS=160;
    let daysWorked=0;
    let workingHrs=0;
    while(totalWorkinghrs<MAX_WORKING_HOURS && daysWorked<NUM_OF_WORKING_DAYS)
    {
        daysWorked++;
        empCheck= Math.floor((Math.random()*10)%3);
        empHrs=getWorkingHrs(empCheck); 
        workingHrs+=empHrs;
    }
    employeeWage= workingHrs*WAGE_PER_HOUR;
    console.log("total working days for UC5 : "+daysWorked +" EmployeeWage for month UC5 : "+ employeeWage);
}

