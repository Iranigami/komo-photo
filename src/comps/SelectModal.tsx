import { useState } from "react";
import type { VariantData } from "../Types";
import next from "../assets/images/icons/next.svg";
import back from "../assets/images/icons/blue next.svg";

type Props = {
  data: VariantData[];
  texts: string[];
  onSelect: (id: number) => void;
  onNext?: () => void;
  onBack?: () => void;
};

export default function SelectModal({
  data,
  texts,
  onSelect,
  onNext,
  onBack,
}: Props) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="w-full bottom-0 pt-[64px] pb-[128px] bg-white fixed gap-[64px] rounded-t-[136px] px-[64px]">
      <div className="text-gray-primary text-[80px] tracking-0 leading-[100%] uppercase text-left font-bold font-osnova-pro">
        {texts[0]}
      </div>
      <div className={"w-[2032px] h-[874px] mt-[32px] bg-black"}></div>
      <div className="mt-[64px] font-osnova-pro font-bold text-[56px] leading-[100%] tracking-0 text-gray-primary">
        {data[selected].title}
      </div>
      <div className="mt-[32px] font-osnova-pro font-normal text-[40px] leading-[100%] tracking-0 text-gray-secondary">
        {data[selected].description}
      </div>
      <div className="w-full mt-[64px] flex justify-end gap-[64px] items-center h-[146px]">
        <button
          hidden={!texts[2]}
          className="w-[378px] h-[146px] border-[4px] border-blue-accent rounded-[72px] mr-[662px] gap-[24px] font-osnova-pro font-bold text-[48px] leading-[100%] tracking-0 flex justify-center items-center text-blue-accent"
        >
          <img src={back} alt="back" className="size-[48px] rotate-180" />
          {texts[2]}
        </button>
        <div className="w-[520px] flex gap-[16px] font-osnova-pro font-normal leading-[100%] tracking-0 text-[40px] text-gray-secondary">
          {texts[1]}
          <img src={next} alt="next step" className="size-[48px]" />
        </div>
        <button
          onClick={onNext}
          className="w-[461px] h-[146px] rounded-[72px] bg-blue-accent flex justify-center items-center font-osnova-pro font-bold text-[48px] text-white leading-[100%] tracking-0 text-center"
        >
          Продолжить
        </button>
      </div>
    </div>
  );
}
