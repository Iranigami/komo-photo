import { useEffect, useState } from "react";
import SelectModal from "../comps/SelectModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import type { VariantData } from "../Types";
import Waiting from "../comps/Waiting";

export default function Selecting() {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [characterList, setCharacterList] = useState<VariantData[]>([]);
  const [backgroundList, setBackgroundList] = useState<VariantData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(1);
  const [selectedBackground, setSelectedBackground] = useState(1);
  const [openedModal, setOpenedModal] = useState("none");
  useEffect(() => {
    setLoading(true);
    axios.get(`${apiUrl}/api/costumes`).then((response) => {
      setCharacterList(response.data);
      setLoading(false);
      setOpenedModal("character");
    });
    axios.get(`${apiUrl}/api/backgrounds`).then((response) => {
      setBackgroundList(response.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="w-full h-full fixed top-0 justify-center">
      {loading === false &&
        backgroundList[selectedBackground] !== undefined &&
        characterList[selectedCharacter] !== undefined && (
          <div className="w-full h-full">
            <img
              src={apiUrl + backgroundList[selectedBackground].image}
              alt="background"
              className="absolute w-full h-full"
            />
            <img
              src={apiUrl + characterList[selectedCharacter].image}
              alt="costume"
              className="absolute h-[3234px] mt-[606px] left-0 right-0 mx-auto"
            />
          </div>
        )}
      {openedModal === "character" && !loading && (
        <SelectModal
          init={selectedCharacter}
          data={characterList}
          texts={["Персонажи", "Перейти к выбору фона", ""]}
          onSelect={(id) => setSelectedCharacter(id)}
          onNext={() => setOpenedModal("background")}
        />
      )}
      {openedModal === "background" && !loading && (
        <SelectModal
          init={selectedBackground}
          data={backgroundList}
          texts={["Фоновое изображение", "Сделать фотографию", "Назад"]}
          onSelect={(id) => setSelectedBackground(id)}
          onBack={() => {
            setOpenedModal("character");
          }}
          onNext={() =>
            navigate(
              `/camera?character=${selectedCharacter + 1}&background=${selectedBackground + 1}`,
            )
          }
        />
      )}
      <Waiting />
    </div>
  );
}
