import logo from "../assets/images/firmLogo.svg";
import girl1 from "../assets/images/Понёвный_женский_комплекс_XIX_в_2ВЕР.png";
import girl2 from "../assets/images/Сарафанный_женский_комплекс_ XIX_в_2В_РЕД_Problembo.png";
import boy1 from "../assets/images/image (46) 1.png";
import pick from "../assets/images/icons/pick.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/select")}
      className="w-full h-full fixed top-0 bg-linear-to-b from-light-blue to-blue-accent justify-center pt-[164px]"
    >
      <img src={logo} alt="logo" className="mx-auto h-[600px]" />
      <div className="mt-[128px] text-white text-[240px] tracking-[-9.6px] leading-[100%] uppercase text-center font-bold font-osnova-pro">
        Примерь народный Костюм
      </div>
      <div className="flex w-full">
        <img
          src={girl2}
          alt=""
          className="absolute w-[1165px] h-[2014px] top-[1843px] left-[36px] z-0"
        />
        <img
          src={boy1}
          alt=""
          className="absolute w-[860px] h-[2492px] top-[1752px] left-[1064px] z-0"
        />
        <img
          src={girl1}
          alt=""
          className="absolute w-[1233px] h-[2345px] top-[1629px] left-[551px] z-0"
        />
        <div className="size-[520px] rounded-full bg-white mx-auto z-10 mt-[1240px]">
          <div className="mt-[100px] text-blue-accent text-[56px] tracking-0 leading-[100%] uppercase text-center font-bold font-osnova-pro">
            Коснитесь экрана
          </div>
          <img
            src={pick}
            alt="pick"
            className="h-[400px] mt-[-20px] mx-auto animate-float"
          />
        </div>
      </div>
    </div>
  );
}
