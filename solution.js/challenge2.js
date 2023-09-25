// calculateDemeritPoints//
function calculateDemeritPoints(speed) 
  // Define the speed limit and the number of kilometers per demerit point
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
   // Check if the given speed is within the legal limit
    if (speed < speedLimit) {
      console.log("Ok");

    } else {
      // Calculate the demerit points based on the exceeded speed
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      // Check if the demerit points exceed the limit for license suspension
      if (demeritPoints >= 12) {
      if (demeritPoints >= 12) {
        console.log("License suspended");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }
  }
  
  // Get the speed as input, e.g., 80
  const speed = 80;
  
  // Calculate and display demerit points
  calculateDemeritPoints(speed);
  