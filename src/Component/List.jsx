import React from "react";
import hapus from "../img/delete.png";
import edit from "../img/edit.png";

function List({ dataPerson, setDataPerson, handleEdit }) {
  const handleDelete = (id) => {
    let data = [...dataPerson];
    let filterData = data.filter((person) => person.id !== id);
    setDataPerson(filterData);
  };

  return (
    <section className="w-full px-10 ">
      {dataPerson.map((res) => (
        <div
          className="flex justify-between mb-2 bg-white mt-2 border-l-8 bg-white items-center border-blue-500"
          key={res.id}
        >
          <button className="w-11/12" onClick={() => handleEdit(res.id)}>
            <div className=" p-2 text-left px-2">
              <h1 className="text-md font-semibold text-blue-500">
                {res.nama}
              </h1>
              <p className="text-sm font-light text-[#333]">{res.telepon}</p>
            </div>
          </button>

          <div className="shadow-sm p-2  text-center">
            <button onClick={() => handleDelete(res.id)}>
              <img src={hapus} alt="delete" className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default List;
