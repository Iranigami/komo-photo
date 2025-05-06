import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import reload from "../assets/images/icons/reload.svg";
import ErrorModal from "../comps/ErrorModal";
import LoadingModal from "../comps/LoadingModal";
import SaveModals from "../comps/SaveModals";

export default function Result() {
  const [isPhotoLoading, setPhotoLoading] = useState(true);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [isSaveModalsOpen, setSaveModalsOpen] = useState(false);
  const navigate = useNavigate();
  const [bg, setBg] = useState("src/assets/images/testCat.jpg");
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setTimeout(() => {
      setBg(
        "http://i2.wp.com/www.mordeo.org/files/uploads/2018/10/Cute-Kitten-Blue-Eyes-Flower-4K-Ultra-HD-Mobile-Wallpaper.jpg",
      );
      setPhotoLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="w-[100vw] h-[100vh] bg-linear-to-b from-light-blue to-blue-accent top-0 fixed">
      {isPhotoLoading && <LoadingModal />}
      <img src={bg} alt="" className="w-[100vw] h-[100vh] absolute z-[-1]" />
      {!isPhotoLoading && !isSaveModalsOpen && (
        <div className="fixed bottom-0 w-full h-[360px] bg-white rounded-t-[136px] flex justify-center items-center font-osnova-pro font-bold text-[48px]">
          <button
            onClick={() => navigate("/")}
            className="w-[435px] h-[168px] rounded-[72px] flex justify-center items-center bg-blue-accent text-white"
          >
            На главную
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-[774px] h-[168px] rounded-[72px] flex justify-center items-center border-6 border-blue-accent text-blue-accent ml-[94px] gap-[24px]"
          >
            <img src={reload} alt="try again" className="size-[72px]" />
            Попробовать еще раз
          </button>
          <button
            onClick={() => setSaveModalsOpen(true)}
            className="w-[697px] h-[168px] rounded-[72px] flex justify-center items-center bg-blue-accent text-white ml-[32px]"
          >
            Получить фотографию
          </button>
        </div>
      )}
      {isErrorModalOpen && <ErrorModal />}
      {isSaveModalsOpen && <SaveModals />}
    </div>
  );
}
