import javaScriptQuiz from "../data/javaScriptQuiz.json";

export default function englishInterview() {
  const quiz = javaScriptQuiz.data.map((question) => {
    return (
      <div key={question.id}>
        <details>
          <summary>{question.question}</summary>
          <p>{question.answer}</p>
        </details>
      </div>
    );
  });

  return (
    <div className="main">
      <h1>Frontend Developer Interview (EN)</h1>
      <h2>Javascript</h2>
      {quiz}
    </div>
  );
}
