import React from "react";
import plus from "../img/plus.png";

function Formulir({ formulir, handleChange, handleSubmit }) {
  return (
    <section className="mx-auto">
      <div className="p-4 font-semibold text-slate-700 text-2xl border-b-2">
        Form Todo
      </div>
      <form className="relative  px-10 py-2" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="nama"
            value={formulir.nama}
            onChange={handleChange}
            className="block h-10 focus:outline-none rounded-t-sm p-2 w-full mt-2"
            placeholder="Title"
          />
        </div>
        <div>
          <input
            type="text"
            name="telepon"
            value={formulir.telepon}
            onChange={handleChange}
            className=" block h-8 focus:outline-none rounded-b-sm shadow-[0_0px_2px_0px_rgba(0,0,0,0.3)] focus:ring-blue-600/50 p-2 w-full"
            placeholder="deskripsi..."
          />
        </div>
        <div>
          <button className="absolute -right-5 top-7 px-10 py-2">
            <img src={plus} alt="tambah" className="w-10 h-10" />
          </button>
        </div>
      </form>
    </section>
  );
}

export default Formulir;
