import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import reload from "../assets/images/icons/reload.svg";
import logo from "../assets/images/firmLogo.svg";
import ErrorModal from "../comps/ErrorModal";
import SaveModals from "../comps/SaveModals";
import axios from "axios";
import Waiting from "../comps/Waiting";

export default function Result() {
  const [isPhotoLoading, setPhotoLoading] = useState(true);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
    //@ts-ignore
  const apiUrl = window.__API_CONFIG__.apiUrl;
  const [isSaveModalsOpen, setSaveModalsOpen] = useState(false);
  const navigate = useNavigate();
  const [bg, setBg] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("error")) setErrorModalOpen(true);
    if (searchParams.get("id"))
      axios
        .get(`${apiUrl}/api/image_results/${searchParams.get("id")}`)
        .then((response) => {
          setBg(apiUrl + response.data.image);
          setPhotoLoading(false);
        });
  }, []);
  return (
    <div className="w-[100vw] h-[100vh] bg-linear-to-b from-light-blue to-blue-accent top-0 fixed">
      {!isPhotoLoading && (
        <img src={bg} alt="" className="w-[100vw] h-[100vh] absolute z-[-1]" />
      )}
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
      {isSaveModalsOpen && (
        <>
          <img
            src={logo}
            alt="logo"
            className="fixed bottom-[64px] right-[64px] h-[256px]"
          />
          <SaveModals />
        </>
      )}
      <Waiting />
    </div>
  );
}
