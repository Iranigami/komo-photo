import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";

export default function Waiting() {
  const [isUserInactive, setUserInactive] = useState(false);
  let time: number;
  const resetTimer = () => {
    clearTimeout(time);
    time = setTimeout(() => {
      setUserInactive(true);
    }, 60000); //1min of inactivity
  };
  document.addEventListener("touchstart", resetTimer);
  const navigate = useNavigate();
  useEffect(() => {
    clearTimeout(time);
    time = setTimeout(() => {
      setUserInactive(true);
    }, 60000); //1min of inactivity
  }, []);

  function MyTimer() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 15);
    const expiryTimestamp = time;
    const { seconds } = useTimer({
      expiryTimestamp,
      onExpire: () => navigate("/"),
    });

    return (
      <div>
        <div className="text-black-accent text-[72px] font-osnova-pro font-bold">
          <span>{seconds}</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {isUserInactive && (
        <div className="z-[1000] fixed w-[1347px] h-[750px] top-[1487.5px] left-[407px] rounded-[64px] py-[64px] px-[64px] bg-white shadow-[24px_16px_24px_0px_#2D374426]">
          <div className="text-gray-primary text-[72px] tracking-0 leading-[100%] uppercase text-center font-bold font-osnova-pro">
            Хотите выйти в главное меню?
          </div>
          <div className="text-gray-primary text-[40px] tracking-[0.8px] leading-[100%] text-center font-normal font-osnova-pro mt-[96px]">
            <MyTimer />
          </div>
          <div className="flex mt-[128px] justify-center gap-[32px]">
            <button
              onClick={() => navigate("/")}
              className="w-[413px] h-[168px] rounded-[64px] flex justify-center items-center bg-blue-accent text-white font-osnova-pro font-bold text-[48px] leading-[100%] tracking-0 text-center"
            >
              На главную
            </button>
            <button
              onClick={() => {
                setUserInactive(false);
                resetTimer;
              }}
              className="w-[774px] h-[168px] rounded-[72px] flex gap-[24px] justify-center items-center bg-white border-[6px] border-blue-accent text-blue-accent font-osnova-pro font-bold text-[48px] leading-[100%] tracking-0 text-center"
            >
              Остаться
            </button>
          </div>
        </div>
      )}
    </>
  );
}
