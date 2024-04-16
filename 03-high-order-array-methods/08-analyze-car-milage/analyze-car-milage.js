function analyzeCarMileage(carsArr) {
  const totalMileage = parseInt(
    carsArr.reduce((total, car) => {
      return total + car.mileage;
    }, 0)
  );
  const averageMileage = totalMileage / carsArr.length;

  const lowestMileageCar = carsArr.reduce((lowest, current) => {
    return current.mileage < lowest.mileage ? current : lowest;
  }, carsArr[0]);

  const highestMileageCar = carsArr.reduce((highest, current) => {
    return current.mileage > highest.mileage ? current : highest;
  }, carsArr[0]);
  console.log(totalMileage);
  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
