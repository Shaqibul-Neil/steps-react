import { useState } from 'react';
import Button from './Button';
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const DateCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrease = () => {
    return setStep(prev => prev + 1);
  };
  const handleDecrease = () => {
    return setStep(prev => prev - 1);
  };

  const handleCountIncrease = () => {
    return setCount(prev => prev + step);
  };
  const handleCountDecrease = () => {
    return setCount(prev => prev - step);
  };
  const today = new Date();
  const date = new Date(today).getDate();

  const day = days[today.getDay()];

  console.log(date, day);
  return (
    <div className="dateContainer">
      <div className="stepContainer">
        <Button text="-" onClick={handleDecrease} />
        <p>Step: {step} </p>
        <Button text="+" onClick={handleIncrease} />
      </div>
      <div className="stepContainer">
        <Button text="-" onClick={handleCountDecrease} />
        <p>Count: {count} </p>
        <Button text="+" onClick={handleCountIncrease} />
      </div>
      <div className="date">
        <p>Today is: {date}</p>
      </div>
    </div>
  );
};
export default DateCounter;
