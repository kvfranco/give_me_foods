import { useState, useEffect } from "react";

interface CompanyNumbersType {
  yearsOfExperience: number;
  storesSelling: number;
  loyalCustomers: number;
}

function updateShowValues(values: CompanyNumbersType, animationDuration: number, timeRemaining: number): CompanyNumbersType {
  // If time remaining goes bellow zero, it'll change the company numbers values (only for protection)
  if (timeRemaining < 0) {
    return values;
  }

  const updatedValues: CompanyNumbersType = {
    yearsOfExperience: 0,
    storesSelling: 0,
    loyalCustomers: 0,
  }

  for (const index in values) {
    const key = index as keyof CompanyNumbersType;
    updatedValues[key] = Math.round(values[key] * ((animationDuration - timeRemaining) / animationDuration));
  }

  return updatedValues;
}

export default function useCounterUp(valuesToUpdate: CompanyNumbersType, animationDuration: number, updateInterval: number): CompanyNumbersType {
  const [timeRemaining, setTimeRemaining] = useState(animationDuration);

  useEffect(() => {
    let timerId: number;
    if (timeRemaining > 0) {
      timerId = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - updateInterval);
      }, updateInterval);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining, updateInterval]);

  return updateShowValues(valuesToUpdate, animationDuration, timeRemaining);
}