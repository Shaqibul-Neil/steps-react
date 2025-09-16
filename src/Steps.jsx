import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  //in setOpen, setState always use callback
  const handleIncreaseStep = () =>
    setStep(curStep => (curStep >= messages.length ? 1 : curStep + 1));

  const handleDecreaseStep = () =>
    setStep(curStep => (curStep <= 1 ? messages.length : curStep - 1));

  const handleOpen = () => {
    setOpen(currState => !currState);
  };
  return (
    <div>
      <button className="close" onClick={handleOpen}>
        &times;
      </button>

      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            {[1, 2, 3].map(n => (
              <div key={n} className={step === n ? 'active' : ''}>
                {n}
              </div>
            ))}
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: '#7950f2' }}
              onClick={handleDecreaseStep}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2' }}
              onClick={handleIncreaseStep}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p className="message">Hidden</p>
      )}
    </div>
  );
};
export default Steps;
