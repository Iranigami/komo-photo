import loading from "../assets/images/icons/loading.svg";

export default function LoadingModal() {
  return (
    <div className="w-[1347px] fixed h-[606px] top-[1617.5px] left-[407px] rounded-[64px] py-[128px] px-[64px] bg-white shadow-[24px_16px_24px_0px_#2D374426]">
      <div className="text-gray-primary text-[80px] tracking-0 leading-[100%] uppercase text-center font-bold font-osnova-pro">
        Пожалуйста, подождите
      </div>
      <div className="text-gray-primary text-[40px] tracking-[0.8px] leading-[100%] text-center font-normal font-osnova-pro mt-[32px]">
        Ваша фотография обрабатывается
      </div>
      <img
        src={loading}
        alt="loading"
        className="mt-[64px] animate-spin mx-auto"
      />
    </div>
  );
}
