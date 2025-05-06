import { useState } from "react";
import SelectModal from "../comps/SelectModal";
import { useNavigate } from "react-router-dom";

export default function Selecting() {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const [selectedBackground, setSelectedBackground] = useState(0);
  const [openedModal, setOpenedModal] = useState("character");
  const tempData = [
    {
      id: 0,
      image:
        "https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649172.jpg?semt=ais_hybrid&w=740",
      title: "Котик",
      description: "Да, ето котик",
    },
    {
      id: 1,
      image:
        "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
      title: "Котик2",
      description: "Да, ето котик2",
    },
    {
      id: 2,
      image:
        "https://vet-centre.by/wp-content/uploads/2016/11/kot-eti-udivitelnye-kotiki.jpg",
      title: "Котик2",
      description: "Да, ето котик2",
    },
    {
      id: 3,
      image:
        "https://vet-centre.by/wp-content/uploads/2016/11/kot-eti-udivitelnye-kotiki.jpg",
      title: "",
      description: "",
    },
  ];
  return (
    <div className="w-full h-full fixed top-0 bg-linear-to-b from-light-blue to-blue-accent justify-center pt-[164px]">
      <div></div>
      {openedModal === "character" && (
        <SelectModal
          data={tempData}
          texts={["Персонажи", "Перейти к выбору фона", ""]}
          onSelect={(id) => setSelectedCharacter(id)}
          onNext={() => setOpenedModal("background")}
        />
      )}
      {openedModal === "background" && (
        <SelectModal
          data={tempData}
          texts={["Фоновое изображение", "Сделать фотографию", "Назад"]}
          onSelect={(id) => setSelectedBackground(id)}
          onBack={() => {
            setOpenedModal("character");
          }}
          onNext={() =>
            navigate(
              `/camera?character=${selectedCharacter}&background=${selectedBackground}`,
            )
          }
        />
      )}
    </div>
  );
}
