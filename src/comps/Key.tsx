import backspace from "../assets/images/icons/backspace-inactive.svg";
import globe from "../assets/images/icons/globe.svg";
import shift from "../assets/images/icons/Shift Off.svg";

type Props = {
  type: string;
  text: string;
  className?: string;
  clickHandler?: () => void;
};

export default function Key({ type, text, className, clickHandler }: Props) {
  return (
    <button
      className={`w-full h-full max-w-[158px] flex justify-center items-center text-center rounded-[8px] bg-[#FAFAFA] ${className} active:bg-[#E1E3E3] key-shadow font-montserrat`}
      onClick={clickHandler}
    >
      {text}
      {type === "backspace" && <img src={backspace} alt="backspace" />}
      {type === "lang" && <img src={globe} alt="lang" />}
      {type === "shift" && <img src={shift} alt="shift" />}
    </button>
  );
}
