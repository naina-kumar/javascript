// Write an ES6 function that takes an array of objects containing car information (make, model,
// year) and returns an array with only the car model that were made after the year 2012.
 const cars = [
 { make: 'Toyota', model: 'Corolla', year: 2010 },
{ make: 'Honda', model: 'Civic', year: 2012 },
 { make: 'Toyota', model: 'Camry', year: 2015 },
 { make: 'Ford', model: 'Mustang', year: 2018 },
 ]
 const carModel=cars.filter((years)=> years.year>2012);
 console.log(carModel.map((x)=>x.model));
 