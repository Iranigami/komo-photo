import backspace from "../assets/images/icons/backspace-inactive.svg";
import globe from "../assets/images/icons/globe.svg";

type Props = {
  type: string;
  text: string;
  className?: string;
  clickHandler?: () => void;
  shift?: number;
};

export default function Key({
  type,
  text,
  className,
  clickHandler,
  shift,
}: Props) {
  return (
    <button
      className={`h-[96px] flex justify-center items-center text-center rounded-[16px] text-[36px] bg-[#FAFAFA] ${className} active:bg-[#E1E3E3] shadow-[0px_2px_0px_0px_#0000004D] font-montserrat`}
      onClick={clickHandler}
    >
      {text}
      {type === "backspace" && <img src={backspace} alt="backspace" />}
      {type === "lang" && <img src={globe} alt="lang" />}
      {type === "shift" && (
        <img src={`src/assets/images/icons/Shift${shift}.svg`} alt="shift" />
      )}
    </button>
  );
}
