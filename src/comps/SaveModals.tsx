import { useEffect, useRef, useState } from "react";
import Keyboard from "./Keyboard";
import axios from "axios";
import type { ShareLink } from "../Types";
import { useNavigate } from "react-router-dom";

export default function SaveModals() {
  const navigate = useNavigate();
  const [isKeyboardOpen, setKeyboardOpen] = useState(false);
  const [isSendButtonDisabled, setSendButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;
  const shareLinks = useRef<ShareLink[]>([]);
  useEffect(() => {
    setLoading(true);
    axios.get(`${apiUrl}/api/share_links`).then((response) => {
      shareLinks.current = response.data;
      setLoading(false);
    });
  }, []);
  return (
    <div className="fixed top-[885px] w-full h-full">
      <div
        className={`${isKeyboardOpen && "translate-y-[-401px]"} w-[1347px] h-[1001px] rounded-[64px] bg-white pt-[128px] font-osnova-pro text-center mx-auto transition duration-700`}
      >
        <div className="text-gray-primary text-[80px] font-bold uppercase leading-[100%]">
          Социальные сети
        </div>
        <div className="mt-[32px] tracking-[0.8px] text-gray-secondary text-[40px] font-normal leading-[100%]">
          Сканируйте QR-код для перехода в социальную сеть
        </div>
        <div className="flex mx-auto justify-center items-center gap-[64px]">
          <div className="size-[461px] bg-blue-bg rounded-[64px] p-[20px] mt-[64px]">
            {!loading && (
              <img
                src={apiUrl + shareLinks.current[0].image}
                alt=""
                className=""
              />
            )}
            {!loading && (
              <div className="font-normal tracking-[0.4px] text-[40px] text-gray-primary mt-[20px]">
                {shareLinks.current[0].tag}
              </div>
            )}
          </div>
          <div className="size-[461px] bg-blue-bg rounded-[64px] p-[20px] mt-[64px]">
            {!loading && (
              <img
                src={apiUrl + shareLinks.current[1].image}
                alt=""
                className=""
              />
            )}
            {!loading && (
              <div className="font-normal tracking-[0.4px] text-[40px] text-gray-primary mt-[20px]">
                {shareLinks.current[1].tag}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${isKeyboardOpen && "translate-y-[-401px]"} w-[1347px] h-[1001px] rounded-[64px] bg-white pt-[128px] font-osnova-pro text-center mx-auto mt-[64px] transition duration-700`}
      >
        <div className="text-gray-primary text-[80px] font-bold uppercase leading-[100%]">
          введите E-mail для получения фото
        </div>
        <div className="mt-[32px] tracking-[0.8px] text-gray-secondary text-[40px] font-normal leading-[100%]">
          Введите адрес электронной почты,
          <br />
          на которую будет отправлена фотография
        </div>
        <div className="w-full flex gap-[32px] justify-center items-center mt-[64px]">
          <input
            onClick={() => setKeyboardOpen(true)}
            placeholder="email@example.com"
            className="w-[777px] h-[168px] bg-[#FAFAFA] rounded-[64px] px-[80px] text-gray-secondary text-[40px] font-normal"
          />
          <button
            disabled={isSendButtonDisabled}
            className="w-[410px] h-[168px] bg-blue-accent rounded-[64px] text-white font-bold text-[48px] disabled:opacity-[50%]"
          >
            Отправить
          </button>
        </div>
        <button
          onClick={() => navigate("/")}
          className="w-[435px] h-[168px] bg-blue-accent rounded-[64px] text-white font-bold text-[48px] mt-[64px]"
        >
          На главную
        </button>
      </div>
      <Keyboard
        opened={isKeyboardOpen}
        onClose={() => setKeyboardOpen(false)}
      />
    </div>
  );
}
