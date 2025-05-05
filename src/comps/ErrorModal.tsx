import { useNavigate } from "react-router-dom"
import err from "../assets/images/icons/err.svg"
import reload from "../assets/images/icons/reload.svg"

export default function ErrorModal(){
    const navigate = useNavigate();
    return(
        <div className="fixed w-[1347px] h-[866px] top-[1487.5px] left-[407px] rounded-[64px] py-[128px] px-[64px] bg-white shadow-[24px_16px_24px_0px_#2D374426]">
            <img src={err} alt="error" className="size-[156px] mx-auto" />
            <div className="mt-[64px] text-gray-primary text-[80px] tracking-0 leading-[100%] uppercase text-center font-bold font-osnova-pro">
                Ошибка
            </div>
            <div className="text-gray-primary text-[40px] tracking-[0.8px] leading-[100%] text-center font-normal font-osnova-pro mt-[32px]">
                Лицо не распознано. Попробуйте еще раз
            </div>
            <div className="flex mt-[64px] justify-center gap-[32px]">
                <button 
                    onClick={() => navigate("/")}
                    className="w-[413px] h-[168px] rounded-[64px] flex justify-center items-center bg-blue-accent text-white font-osnova-pro font-bold text-[48px] leading-[100%] tracking-0 text-center">
                    На главную
                </button>
                <button 
                    onClick={() => navigate("/camera")}
                    className="w-[774px] h-[168px] rounded-[72px] flex gap-[24px] justify-center items-center bg-white border-[6px] border-blue-accent text-blue-accent font-osnova-pro font-bold text-[48px] leading-[100%] tracking-0 text-center">
                    <img src={reload} alt="try again" className="size-[72px]" />
                    Попробовать еще раз
                </button>
            </div>
        </div>
    )
}