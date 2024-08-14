import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderWithToggle from '../components/HeaderWithToggle';
import ResultCard from '../Pages/ResultCard';

const questions = [
  {
    id: 1,
    question: "Which weekend activity do you prefer?",
    options: ['Hiking', 'Watching Movies', 'Coding', 'Reading', 'Playing Music'],
  },
  {
    id: 2,
    question: "What inspires you the most?",
    options: ['Nature', 'Art', 'Technology', 'Literature', 'Music'],
  },
  {
    id: 3,
    question: "Which type of events excite you?",
    options: ['Outdoor Adventures', 'Film Festivals', 'Hackathons', 'Book Readings', 'Live Concerts'],
  },
  {
    id: 4,
    question: "Which club would you join first?",
    options: ['Adventure Club', 'Film Club', 'Tech Club', 'Book Club', 'Music Club'],
  },
  {
    id: 5,
    question: "What are your hobbies?",
    options: ['Hiking', 'Watching Movies', 'Programming', 'Writing', 'Playing an Instrument'],
  },
];

const SurveyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  // background: linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%);
  min-height: 100vh;
  box-sizing: border-box;
`;

const SurveyContent = styled.div`
  width: 100%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

const QuestionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 15px;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  margin-bottom: 30px;
`;

const OptionButton = styled.button`
  padding: 15px;
  background: rgba(255, 255, 255, 0.25);
  color: ${props => (props.selected ? '#000000' : '#333')};
  border: 2px solid ${props => (props.selected ? '#007bff' : 'rgba(255, 255, 255, 0.3)')};
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover {
    background: #007bff;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  background: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  box-sizing: border-box;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-top: 20px;
`;

const SurveyPage = () => {
  const [answers, setAnswers] = useState({});
  const [recommendedClub, setRecommendedClub] = useState(null);

  const handleAnswer = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    const counts = { 'Adventure Club': 0, 'Film Club': 0, 'Tech Club': 0, 'Book Club': 0, 'Music Club': 0 };

    Object.values(answers).forEach((answer) => {
      if (answer.includes('Adventure')) counts['Adventure Club']++;
      if (answer.includes('Film')) counts['Film Club']++;
      if (answer.includes('Tech')) counts['Tech Club']++;
      if (answer.includes('Book')) counts['Book Club']++;
      if (answer.includes('Music')) counts['Music Club']++;
    });

    const recommended = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
    setRecommendedClub(recommended);
  };

  return (
    <SurveyPageContainer>
      <HeaderWithToggle />
      {!recommendedClub ? (
        <SurveyContent>
          <Title>Club Recommendation Survey</Title>
          {questions.map((q) => (
            <div key={q.id}>
              <QuestionTitle>{q.question}</QuestionTitle>
              <OptionsContainer>
                {q.options.map((option) => (
                  <OptionButton
                    key={option}
                    selected={answers[q.id] === option}
                    onClick={() => handleAnswer(q.id, option)}
                  >
                    {option}
                  </OptionButton>
                ))}
              </OptionsContainer>
            </div>
          ))}
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </SurveyContent>
      ) : (
        <ResultContainer>
          <ResultCard club={recommendedClub} />
        </ResultContainer>
      )}
    </SurveyPageContainer>
  );
};

export default SurveyPage;
