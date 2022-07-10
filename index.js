// Code your solution here

const findMatching = (drivers, searchingString)=>{
    return drivers.filter( driver => 
        driver.toUpperCase() === searchingString.toUpperCase())
   }
   
   const fuzzyMatch =  (drivers, searchingString)=>{
       return drivers.filter(driver =>
          driver.startsWith(searchingString))
      }
   
   const matchName =  (drivers, searchingString)=>{
       return drivers.filter(driver =>
          driver.name === searchingString)
      }
   
   