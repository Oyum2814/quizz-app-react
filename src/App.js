import { useState, useEffect, useMemo } from "react";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");
  const data = [
    {
      id: 1,
      question:
        "Which of the following is used in React.js to increase performance?",
      answers: [
        {
          text: "Virtual DOM",
          correct: true,
        },
        {
          text: "Original DOM",
          correct: false,
        },
        {
          text: "Both A and B",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is ReactJS?",
      answers: [
        {
          text: "Server Side Framework",
          correct: false,
        },
        {
          text: "User Interface Framework",
          correct: true,
        },
        {
          text: "Both a and b",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question:
        "Identify the one which is used to pass data to components from outside",
      answers: [
        {
          text: "Render With Arguments",
          correct: false,
        },
        {
          text: "setState",
          correct: false,
        },
        {
          text: "PropTypes",
          correct: false,
        },
        {
          text: "props",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who created React.js?",
      answers: [
        {
          text: "Jordan Mike",
          correct: false,
        },
        {
          text: "Jordan Walke",
          correct: true,
        },
        {
          text: "Time Lee",
          correct: false,
        },
        {
          text: "Jordan Lee",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "In which languages is React.js written?",
      answers: [
        {
          text: "Python",
          correct: false,
        },
        {
          text: "Javascript",
          correct: true,
        },
        {
          text: "Java",
          correct: false,
        },
        {
          text: "PHP",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is Babel?",
      answers: [
        {
          text: "JavaScript Compiler",
          correct: true,
        },
        {
          text: "Javascript interpreter",
          correct: false,
        },
        {
          text: "JavaScript transpiler",
          correct: false,
        },
        {
          text: "Javascript Framework",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "How many elements can a valid react component return?",
      answers: [
        {
          text: "2",
          correct: false,
        },
        {
          text: "1",
          correct: true,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "A state in React.js is also known as?",
      answers: [
        {
          text: "The internal storage of the component",
          correct: true,
        },
        {
          text: "External Storage of the component",
          correct: false,
        },
        {
          text: "Permanent Storage",
          correct: false,
        },
        {
          text: "All of the above",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "In which languages is React.js written?",
      answers: [
        {
          text: "Python",
          correct: false,
        },
        {
          text: "Javascript",
          correct: true,
        },
        {
          text: "Java",
          correct: false,
        },
        {
          text: "PHP",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "In MVC, what does React.js act as?",
      answers: [
        {
          text: "Model",
          correct: false,
        },
        {
          text: "Controller",
          correct: false,
        },
        {
          text: "View",
          correct: true,
        },
        {
          text: "Middleware",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        "Using which of the following command can prevent default behaviour at in react?",
      answers: [
        {
          text: "preventDefault()",
          correct: true,
        },
        {
          text: "avoidDefault()",
          correct: false,
        },
        {
          text: "revokeDefault()",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "dentify the smallest building block of React.JS.",
      answers: [
        {
          text: "Props",
          correct: false,
        },
        {
          text: "Elements",
          correct: false,
        },
        {
          text: "Components",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is ReactJS mainly used for building?",
      answers: [
        {
          text: "Database",
          correct: false,
        },
        {
          text: "Connectivity",
          correct: false,
        },
        {
          text: "User interface",
          correct: true,
        },
        {
          text: "Design platform",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "Among the following which acts as the input of class-based component?",
      answers: [
        {
          text: "Factory",
          correct: false,
        },
        {
          text: "Render",
          correct: false,
        },
        {
          text: "Class",
          correct: false,
        },
        {
          text: "props",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question:
        "Among the following which is used to create a class inheritance?",
      answers: [
        {
          text: "Inherits",
          correct: false,
        },
        {
          text: "Extends",
          correct: true,
        },
        {
          text: "Create",
          correct: false,
        },
        {
          text: "this",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 1000" },
        { id: 2, amount: "₹ 2000" },
        { id: 3, amount: "₹ 3000" },
        { id: 4, amount: "₹ 5000" },
        { id: 5, amount: "₹ 10 ,000" },
        { id: 6, amount: "₹ 20 ,000" },
        { id: 7, amount: "₹ 40 ,000" },
        { id: 8, amount: "₹ 80 ,000" },
        { id: 9, amount: "₹ 1,60, 000" },
        { id: 10, amount: "₹ 3,20,000" },
        { id: 11, amount: "₹ 6,40,000" },
        { id: 12, amount: "₹ 12,50,000" },
        { id: 13, amount: "₹ 25,00,000" },
        { id: 14, amount: "₹ 50,00,000" },
        { id: 15, amount: "₹ 1 Crore!!!!" },
        { id: 16, amount: "₹ 7 Crore" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber]);

  return (
    <div className="h-screen flex bg-[#020230] text-white app">
      {username ? (
        <>
          <div className="flex flex-col w-3/4 main">
            {stop ? (
              <h1 className="endText relative bottom-0 m-auto text-4xl w-full text-center bg-[#f0b024] p-4">
                {username} earned :{earned}
              </h1>
            ) : (
              <>
                <div className="h-[50%] relative top">
                  <div className="absolute font-bold bottom-[-30px] left-[10%] h-[90px] w-[90px] rounded-full border-4  border-white border-solid flex justify-center items-center text-4xl timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="h-[50%] bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="w-1/4 flex items-center pyramid">
            <div className="list-none w-full p-4 moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "flex items-center p-2 rounded-[5px] moneyListItem active"
                      : "flex items-center p-2 rounded-[5px] moneyListItem "
                  }
                >
                  <span className="text-lg font-normal w-[30%] moneyListItemNumber">
                    {m.id}
                  </span>
                  <span className="text-lg font-medium moneyListItemAmount">
                    {m.amount}
                  </span>
                </li>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
