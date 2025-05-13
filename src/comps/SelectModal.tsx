import { useState } from "react";
import type { VariantData } from "../Types";
import next from "../assets/images/icons/next.svg";
import back from "../assets/images/icons/blue next.svg";
import selectedIcon from "../assets/images/icons/selected.svg";
import arrRight from "../assets/images/icons/arrow_right.svg";
import { useNavigate } from "react-router-dom";
type Props = {
  data: VariantData[];
  texts: string[];
  init: number;
  onSelect: (id: number) => void;
  onNext?: () => void;
  onBack?: () => void;
};

export default function SelectModal({
  data,
  texts,
  init,
  onSelect,
  onNext,
  onBack,
}: Props) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [selected, setSelected] = useState(init);
  const [currPage, setPage] = useState(0);
  const maxPages = data.length / 3;
  const scrollable = document.getElementById("scrollable");
  return (
    <div
      className={`w-full bottom-0 pt-[64px] pb-[128px] bg-white fixed gap-[64px] rounded-t-[136px] px-[64px] ${texts[2] ? "h-[1375px]" : "h-[1750px]"}`}
    >
      <div className="text-gray-primary text-[80px] tracking-0 leading-[100%] uppercase text-left font-bold font-osnova-pro">
        {texts[0]}
      </div>
      <div
        onScroll={() => {
          setPage(0);
        }}
        id={"scrollable"}
        className={
          "w-[2032px] h-[874px] mt-[32px] flex gap-[32px] overflow-auto hide-scroll"
        }
      >
        <button
          onClick={() => {
            setPage((prev) => prev - 1);
            scrollable?.scroll(0, 0);
          }}
          disabled={currPage === 0}
          className="absolute mt-[393px] left-[96px] disabled:opacity-[30%] size-[88px] shadow-[0px_8px_12px_0px_#58687C26] rounded-full bg-white flex justify-center items-center z-100"
        >
          <img src={arrRight} alt="prev" className="rotate-180 " />
        </button>
        <button
          onClick={() => {
            setPage((prev) => prev + 1);
            scrollable?.scroll(0, 0);
          }}
          disabled={currPage >= maxPages - 1}
          className="absolute mt-[393px] right-[96px] disabled:opacity-[30%] size-[88px] shadow-[0px_8px_12px_0px_#58687C26] rounded-full bg-white flex justify-center items-center z-100"
        >
          <img src={arrRight} alt="prev" />
        </button>
        {data!.map((variant: VariantData, index: number) => (
          <div
            onClick={() => {
              setSelected(index);
              onSelect(index);
            }}
            style={{
              transform: `translateX(-${currPage * 2064}px)`,
            }}
            key={variant.id}
            className={`duration-150 relative min-w-[656px] h-[874px] rounded-[72px] ${index === selected ? "bg-blue-accent text-white font-bold" : "bg-blue-bg text-gray-secondary font-normal"} p-[48px] overflow-hidden`}
          >
            <img
              hidden={index !== selected}
              src={selectedIcon}
              alt="selected"
              className="size-[64px] absolute top-[37px] right-[40px] z-100"
            />
            <div className="font-osnova-pro text-[32px] leading-[100%] w-[436px]">
              {variant.title}
              <img
                src={apiUrl + variant.image}
                alt=""
                className={`${texts[2] ? "absolute top-0 h-full w-full" : "h-[830px] mt-[32px]"} left-0 right-0 mx-auto`}
              />
            </div>
          </div>
        ))}
      </div>
      <div hidden={!!texts[2]}>
        <div className="mt-[64px] font-osnova-pro font-bold text-[64px] leading-[100%] tracking-0 text-gray-primary">
          {data[selected].title}
        </div>
        <div className="mt-[32px] font-osnova-pro font-normal text-[40px] leading-[100%] tracking-0 text-gray-secondary">
          {data[selected].description}
        </div>
      </div>
      <div className="w-[2032px] fixed bottom-[128px] right-[64px] flex justify-end gap-[64px] items-center h-[146px]">
        <button
          onClick={() => navigate("/")}
          hidden={!!texts[2]}
          className="absolute w-[432px] h-[146px] border-[4px] border-blue-accent rounded-[72px] fixed left-[64px] gap-[24px] font-osnova-pro font-bold text-[48px] leading-[100%] tracking-0 flex justify-center items-center text-blue-accent"
        >
          <img src={back} alt="back" className="size-[48px] rotate-180" />
          На главную
        </button>
        <button
          onClick={onBack}
          hidden={!texts[2]}
          className="absolute w-[378px] h-[146px] border-[4px] border-blue-accent rounded-[72px] fixed left-[64px] gap-[24px] font-osnova-pro font-bold text-[48px] leading-[100%] tracking-0 flex justify-center items-center text-blue-accent"
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
