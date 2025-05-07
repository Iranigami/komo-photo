import { useEffect, useRef, useState, type ChangeEvent } from "react";
import Keyboard from "./Keyboard";
import axios from "axios";
import type { ShareLink } from "../Types";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SaveModals() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const photoId = [`${searchParams.get("id")}`];
  const [isKeyboardOpen, setKeyboardOpen] = useState(false);
  const inputField = document.getElementById("email")!;
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;
  const shareLinks = useRef<ShareLink[]>([]);
  const [isEmailCorrect, setEmailCorrect] = useState(false);
  const checkEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailCorrect(re.test(email));
    setText(email);
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`${apiUrl}/api/share_links`).then((response) => {
      shareLinks.current = response.data;
      setLoading(false);
    });
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    checkEmail(event.target.value);
  };

  const sendPhoto = () => {
    const data = {
      email: text,
      imageResults: photoId,
    };
    axios
      .post(`${apiUrl}/api/image_results`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
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
            onChange={handleChange}
            value={text}
            autoComplete="off"
            id="email"
            onClick={() => setKeyboardOpen(true)}
            placeholder="email@example.com"
            className="w-[777px] h-[168px] bg-[#FAFAFA] rounded-[64px] px-[80px] text-gray-secondary text-[40px] font-normal"
          />
          <button
            onClick={sendPhoto}
            disabled={!isEmailCorrect}
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
        enterButton={(button: string) => {
          (inputField as HTMLInputElement).value += button;
          checkEmail((inputField as HTMLInputElement).value);
        }}
        onBackspace={() => {
          (inputField as HTMLInputElement).value = (
            inputField as HTMLInputElement
          ).value.substring(
            0,
            (inputField as HTMLInputElement).value.length - 1,
          );
          checkEmail((inputField as HTMLInputElement).value);
        }}
        opened={isKeyboardOpen}
        onClose={() => setKeyboardOpen(false)}
      />
    </div>
  );
}
