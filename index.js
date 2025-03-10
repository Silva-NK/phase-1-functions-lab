function distanceFromHqInBlocks(pickupStreet) {
    //returns the number of blocks given a value
    const hqStreet = 42;

    if(pickupStreet <= hqStreet){
        return hqStreet - pickupStreet;
    }
    else {
        return pickupStreet - hqStreet;
    }
  }



  function distanceFromHqInFeet(pickupStreet) {
    distanceFromHqInBlocks(pickupStreet);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    const distanceInBlocks = distanceFromHqInBlocks(pickupStreet);

    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceInBlocks * 264;
  }



  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled

    if(start <= destination){
        return (destination - start) * 264;
    }
    else {
        return (start - destination) * 264;
    }

  }



  function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
    //returns the fare for the customer

    const distInFeet = distanceTravelledInFeet(start, destination);

    if (distInFeet <= 400){
        return 0; //Yay! Your ride today is a free sample.
    }

    else if (distInFeet > 400 && distInFeet <= 2000){
        return (distInFeet - 400) * 0.02;
    }

    else if (distInFeet < 2500){
        return 25;
    }

    else {
        return 'cannot travel that far'
    }

  }
