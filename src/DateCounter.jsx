import { useState } from 'react';
import Button from './Button';

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
  const newDate = new Date(today);
  newDate.setDate(today.getDate() + count);

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
        <span>
          {count === 0
            ? `Today is ${today.toDateString()}`
            : count > 0
            ? `${count} days after today is `
            : `${Math.abs(count)} days before today is `}
        </span>
        <span>{newDate.toDateString()}</span>
      </div>
    </div>
  );
};
export default DateCounter;
