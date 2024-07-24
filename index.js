/* Your Code Here */
class EmployeeRecord {
    constructor(firstName, familyName, title, payPerHour) {
      this.firstName = firstName;
      this.familyName = familyName;
      this.title = title;
      this.payPerHour = payPerHour;
      this.timeInEvents = [];
      this.timeOutEvents = [];
    }
  }

    

// Add a timeIn event to the employee's record
  function createTimeInEvent(dateTime){
    const [date, hour] = dateTime.split(" ");
    this.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour) });
    return this
  }

  // Add a timeOut event to the employee's record
  function createTimeOutEvent(dateTime){
    const [date, hour] = dateTime.split(" ");
    this.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour) });
    return this
  }

  // Calculate the hours worked by the employee on a specific date
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find((event) => event.date === date);
    const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);

    if (!timeInEvent || !timeOutEvent) {
      return 0;
    }

    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  }

  // Calculate the wages earned by the employee on a specific date
  function wagesEarnedOnDate(date) {
    const hoursWorked = this.hoursWorkedOnDate(date);
    return hoursWorked * this.payPerHour;
  }

// Define the createEmployeeRecord function
function createEmployeeRecord(array) {
  const [firstName, familyName, title, payPerHour] = array;
  return new EmployeeRecord(firstName, familyName, title, payPerHour);
}


// Define the findEmployeeByFirstName function
function findEmployeeByFirstName(collection, firstName) {
  return collection.find((employee) => employee.firstName === firstName);
}
// Define the createEmployeeRecords function
function createEmployeeRecords(arrays) {
  return arrays.map(createEmployeeRecord);
}

// Define the allWagesFor function
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


// Define the calculatePayroll function
function calculatePayroll(employeeRecords) {
  const wages = employeeRecords.reduce((totalWages, employee) => {
    return totalWages + allWagesFor(employee);
  }, 0);

  const taxes = wages * TAX_RATE;

  return wages - taxes;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */