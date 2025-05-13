const Question = ({ data, onAnswer, feedbackColor }) => {
  return (
    <div style={{ backgroundColor: feedbackColor }}>
      <h2>{data.question}</h2>
      <ul>
        {data.options.map((option, index) => (
          <li key={index} onClick={() => onAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
