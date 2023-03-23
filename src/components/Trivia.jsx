import { useState, useEffect } from "react";
import useSound from "use-sound";
// import play from "../assets/play.mp3";
import wrong from "../assets/wrong.mp3";
import correct from "../assets/correct.mp3";

export default function Trivia({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState(
    "answer my-[10px] mr-[20px] font-extralight cursor-pointer w-[40%] p-4 text-center  bg-gradient-to-br from-[#013eb8] to-[#021e54] border-[1px] border-white rounded-[15px] text-2xl  hover:from-[#195feb]  hover:to-[#195feb]"
  );
  // const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  // useEffect(() => {
  //   letsPlay();
  // }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName(
      "answer active my-[10px] mr-[20px] font-extralight cursor-pointer w-[40%] p-4 text-center  bg-gradient-to-br from-[#013eb8] to-[#021e54] border-[1px] border-white rounded-[15px] text-2xl  hover:from-[#195feb]  hover:to-[#195feb]"
    );
    delay(3000, () => {
      setClassName(
        a.correct
          ? "answer correct my-[10px] mr-[20px] font-extralight cursor-pointer w-[40%] p-4 text-center  bg-gradient-to-br from-[#013eb8] to-[#021e54] border-[1px] border-white rounded-[15px] text-2xl  hover:from-[#195feb]  hover:to-[#195feb]"
          : "answer wrong my-[10px] mr-[20px] font-extralight cursor-pointer w-[40%] p-4 text-center  bg-gradient-to-br from-[#013eb8] to-[#021e54] border-[1px] border-white rounded-[15px] text-2xl  hover:from-[#195feb]  hover:to-[#195feb]"
      );
    });

    delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };
  return (
    <div className="h-[100%] flex flex-col items-center justify-around trivia">
      <div className="question text-2xl w-[80%] bg-gradient-to-br from-[#013eb8] to-[#021e54] border-2 border-solid border-white text-center p-5 rounded-[10px] ">
        {question?.question}
      </div>

      <div className="w-[100%] flex justify-center flex-wrap answers">
        {question?.answers.map((a) => (
          <div
            className={
              selectedAnswer === a
                ? className
                : "answer my-[10px] mr-[20px] font-extralight cursor-pointer w-[40%] p-4 text-center  bg-gradient-to-br from-[#013eb8] to-[#021e54] border-[1px] border-white rounded-[15px] text-2xl  hover:from-[#195feb]  hover:to-[#195feb] "
            }
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
