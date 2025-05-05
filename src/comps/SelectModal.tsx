import { useState } from "react"
import type { VariantData } from "../Types"
import next from "../assets/images/icons/next.svg"

type Props = {
    data: VariantData[],
}

export default function SelectModal({data}: Props){
    const [selected, setSelected] = useState(0);
    return(
        <div className="w-full bottom-0 pt-[64px] pb-[128px] bg-white fixed gap-[64px] rounded-t-[136px] px-[64px]">
            <div className="text-gray-primary text-[80px] tracking-0 leading-[100%] uppercase text-left font-bold font-osnova-pro">
                Персонажи
            </div>
            <div className={"w-[2032px] h-[874px] mt-[32px] bg-black"}>

            </div>
            <div className="mt-[64px] font-osnova-pro font-bold text-[56px] leading-[100%] tracking-0 text-gray-primary">
                {data[selected].title}
            </div>
            <div className="mt-[32px] font-osnova-pro font-normal text-[40px] leading-[100%] tracking-0 text-gray-secondary">
                {data[selected].description}
            </div>
            <div className="w-full mt-[64px] flex justify-end gap-[64px] items-center h-[146px]">
                <div className="w-[520px] flex gap-[16px] font-osnova-pro font-normal leading-[100%] tracking-0 text-[40px] text-gray-secondary">
                    Перейти к выбору фона
                    <img src={next} alt="next step" className="size-[48px]" />
                </div>
                <button className="w-[461px] h-[146px] rounded-[72px] bg-blue-accent flex justify-center items-center font-osnova-pro font-bold text-[48px] text-white leading-[100%] tracking-0 text-center">
                    Продолжить
                </button>
            </div>
        </div>
    )
}