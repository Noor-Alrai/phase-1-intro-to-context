function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Function to create an array of employee records from an array of arrays
  function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(employeeData => createEmployeeRecord(employeeData));
  }
  const employeeData = ["John", "Doe", "Manager", 20];
  const employeeRecord = createEmployeeRecord(employeeData);
  console.log(employeeRecord);
  
  // Creating an array of employee records
  const employeeDataArray = [
    ["John", "Doe", "Manager", 20],
    ["Jane", "Smith", "Salesperson", 15],
    // Add more employee data arrays here if needed
  ];
  
  const employeeRecords = createEmployeeRecords(employeeDataArray);
  console.log(employeeRecords);
  const employee = employeeRecords[0];
  const dateStampIn = "2023-04-05 900"
  function createTimeInEvent(employee, dateStamp){
    const [date , hour] = dateStamp.split(" ");
    employee.timeInEvents.push(
        {
            type:"TimeIn",
            hour: parseInt(hour, 10),
            date:date
        }
    )
    return employee;
    
  } 
  const dateStampOut ="2023-04-05 1800"
  function createTimeOutEvent(employee, datestamp){
    const [date , hour] = datestamp.split(" ");
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour:parseInt(hour, 10),
        date: date
    })
    return employee
  }
  function hoursWorkedOnDate(employee , date){
  const timeIn=  employee.timeInEvents.find(timeIn => timeIn.date === date)
  const timeOut= employee.timeOutEvents.find(timeOut=> timeOut.date === date)
  if(timeIn && timeOut){
   return (timeOut.hour - timeIn.hour) /100
  }else{
    return 0;
  }

  }
  const wagesEarnedOnDate = (employee,date )=>{
   const hoursWork = hoursWorkedOnDate(employee,date) 
   const payOwed = hoursWork * employee.payPerHour
    return payOwed
  }
  const totalWages = allWagesFor(employeeRecords[0])
  function allWagesFor(employee) {
    const datesWorked = employee.timeInEvents.map(event => event.date);
    const totalWages = datesWorked.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
    return totalWages;
  }
  function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, employee) => total + allWagesFor(employee), 0);
    return totalPayroll;
  }

  console.log( createTimeInEvent(employee, dateStampIn))
  console.log( createTimeOutEvent(employee, dateStampOut))
  console.log(hoursWorkedOnDate(employee , "2023-04-05"))
  console.log(wagesEarnedOnDate(employee, '2023-04-05'))
  console.log(totalWages)

  // Example usage:
  
  // Creating a single employee record
