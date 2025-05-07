import React, { useState } from "react";
import axios from "axios";

const ImageUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [costumeId, setCostumeId] = useState<number>(1); // Пример ID костюма

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      alert("Пожалуйста, выберите файл для загрузки.");
      return;
    }

    const formData = new FormData();
    formData.append("userImage", file, file.name);
    formData.append("costumeId", costumeId.toString());

    try {
      const response = await axios.post(
        "https://api.fitting-room-kurgan.test.itlabs.top/api/image_results",
        formData,
        {
          headers: {
            accept: "multipart/form-data",
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/png" onChange={handleFileChange} />
      <input
        type="number"
        value={costumeId}
        onChange={(e) => setCostumeId(Number(e.target.value))}
        placeholder="Введите ID костюма"
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ImageUpload;
