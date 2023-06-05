var names = [
    { Name: 'Umar', RollNo: 34, Class: 7, dob: 2002 },
    { Name: 'Farooq', RollNo: 35, Class: 7, dob: 2006 },
    { Name: 'Usman', RollNo: 37, Class: 7, dob: 2008 }
  ];
  
  var currentDate = new Date();  // Get the current date
  
  names.forEach(function(person) {
    var dob = new Date(person.dob);  // Create a Date object from the dob
  
    var age = currentDate.getFullYear() - dob.getFullYear();  // Calculate the difference in years
  
    // Adjust the age if the current date has not passed the person's birth month and day
    if (
      currentDate.getMonth() < dob.getMonth() ||
      (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())
    ) {
      age--;
    }
  
    person.age = age;  // Add the age property to the object
  });
  
  console.log(names);
  
  
  