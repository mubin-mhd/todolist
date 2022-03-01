import { useState } from "react";
import { uid } from "uid";
import Formulir from "../Component/Formulir";
import List from "../Component/List";

function Home() {
  //update data
  const [isUpdate, setIsUpdate] = useState({
    id: null,
    status: false,
  });

  //tambah data
  const [dataPerson, setDataPerson] = useState([
    {
      id: 1,
      nama: "apa yang mau kamu kerjakan?",
      telepon: "tulis sekarang, nanti lupa",
    },
  ]);

  //formulir
  const [formulir, setFormulir] = useState({
    nama: "",
    telepon: "",
  });

  function handleChange(e) {
    const inputan = { ...formulir };
    inputan[e.target.name] = e.target.value;
    setFormulir(inputan);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isiData = [...dataPerson];

    if (isUpdate.status) {
      isiData.forEach((dataPersons) => {
        dataPersons.nama = formulir.nama;
        dataPersons.telepon = formulir.telepon;
      });
    } else {
      isiData.push({
        id: uid(),
        nama: formulir.nama,
        telepon: formulir.telepon,
      });
    }

    if ((formulir.nama === "", formulir.telepon === "")) {
      return false;
    }

    setDataPerson(isiData);
    setFormulir({
      nama: "",
      telepon: "",
    });
  }

  const handleEdit = (id) => {
    let data = [...dataPerson];
    let foundData = data.find((result) => result.id == id);
    setFormulir({ nama: foundData.nama, telepon: foundData.telepon });
    setIsUpdate({ id: id, status: true });
  };

  return (
    <div className="bg-yellow-300 h-screen">
      <div className="bg-gray-100 pb-10 max-w-xl mx-auto rounded-md shadow-xl">
        <Formulir
          formulir={formulir}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <List
          dataPerson={dataPerson}
          setFormulir={setFormulir}
          setIsUpdate={setIsUpdate}
          setDataPerson={setDataPerson}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default Home;
