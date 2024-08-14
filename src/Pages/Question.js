import React from 'react';
import '../css/Question.css';

const Question = ({ question, onAnswer }) => {
  const handleChange = (e) => {
    onAnswer(question.id, e.target.value);
  };

  return (
    <div className="question">
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name={`question-${question.id}`}
            value={option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;
