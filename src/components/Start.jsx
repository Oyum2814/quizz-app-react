import { useRef } from "react";
import useSound from "use-sound";

import play from "../assets/play.mp3";

export default function Start({ setUsername }) {
  const inputRef = useRef();
  const [letsPlay] = useSound(play);
  const handleClick = () => {
    letsPlay();

    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <div>
      <div className="start w-[250px] h-[200px] flex flex-col items-center justify-around absolute top-0 bottom-0 left-0 right-0 m-auto">
        <input
          placeholder="Enter your name"
          className="startInput w-full h-[30px] border-none rouned-[5px] text-center text-xl focus:outline-none text-black"
          ref={inputRef}
        />
        <button
          className="startButton text-xl w-full  border-none rounded-[5px] p-1 cursor-pointer bg-white text-black"
          onClick={handleClick}
        >
          Start
        </button>
      </div>
    </div>
  );
}
