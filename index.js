const returnFirstTwoDrivers=(driver) =>{

return[driver[0],driver[1]];

};

const returnLastTwoDrivers=(driver) =>{

   return(driver.slice(-2));
    
    };


    const selectingDrivers= [ 
        returnFirstTwoDrivers, 
        returnLastTwoDrivers
     ];
    

     function createFareMultiplier(i){
        return function (x){
          return i * x;
        }
      }

      const fareDoubler = createFareMultiplier(2);
       let fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driver, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(driver);
};