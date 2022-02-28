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
      nama: "mubin",
      telepon: 628378484747,
    },
    {
      id: 2,
      nama: "anggi",
      telepon: 628378484345,
    },
    {
      id: 3,
      nama: "vita",
      telepon: 62837846565,
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

  function handleEdit(id) {
    let data = [...dataPerson];
    let foundData = data.find((person) => person.id === id);
    console.log(foundData);
    setFormulir({ nama: foundData.nama, telepon: foundData.telepon });
    setIsUpdate({
      id: id,
      status: true,
    });
  }

  return (
    <div>
      <Formulir
        formulir={formulir}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <List
        dataPerson={dataPerson}
        handleEdit={handleEdit}
        setFormulir={setFormulir}
      />
    </div>
  );
}

export default Home;
