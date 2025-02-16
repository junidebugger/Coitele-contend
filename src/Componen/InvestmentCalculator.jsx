import React, { useState } from 'react';
import './InvestmentCalculator.css';

const InvestmentCalculator = () => {
  const [investment, setInvestment] = useState('');
  const [updatedInvestment, setUpdatedInvestment] = useState(null);

  const handlePercentageIncrease = (percentage) => {
    if (!investment || isNaN(investment)) {
      alert('Please enter a valid investment amount.');
      return;
    }
    const newInvestment = parseFloat(investment) * (1 + percentage / 100);
    setUpdatedInvestment(newInvestment.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h1>Investment Calculator</h1>
      <input
        type="number"
        value={investment}
        onChange={(e) => setInvestment(e.target.value)}
        placeholder="Enter initial investment"
        className="investment-input"
      />
      <div className="button-container">
        {[10, 25, 50, 100].map((percent) => (
          <button
            key={percent}
            className="percentage-button"
            onClick={() => handlePercentageIncrease(percent)}
          >
            Increase by {percent}%
          </button>
        ))}
      </div>
      {updatedInvestment && (
        <div className="result">
          <p>Updated Investment Amount:</p>
          <h2>${updatedInvestment}</h2>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;
