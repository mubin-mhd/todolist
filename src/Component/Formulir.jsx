import React from "react";

function Formulir({ formulir, handleChange, handleSubmit }) {
  return (
    <section className="bg-gray-200 w-1/2 mx-auto p-10 mt-10 rounded-lg scale-90">
      <h1 className="text-center font-semibold text-slate-700 text-lg">
        Form Todo
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="nama"
            className="text-slate-600 font-sans font-semibold text-md"
          >
            Nama :
          </label>
          <input
            type="text"
            name="nama"
            value={formulir.nama}
            onChange={handleChange}
            className="rounded-md block h-10 ring-2 ring-blue-500/50 focus:outline-none focus:ring-blue-600/50 p-2 w-full mt-2"
          />
        </div>
        <div className="mt-8">
          <label
            htmlFor="telp"
            className="text-slate-600 font-sans font-semibold text-md"
          >
            Telepon :
          </label>
          <input
            type="text"
            name="telepon"
            value={formulir.telepon}
            onChange={handleChange}
            className="rounded-md block h-10 ring-2 ring-blue-500/50 focus:outline-none focus:ring-blue-600/50 p-2 w-full mt-2"
          />
        </div>
        <div>
          <button className="rounded-lg bg-blue-400 text-white px-4 py-2 mt-8 hover:bg-blue-500">
            create
          </button>
        </div>
      </form>
    </section>
  );
}

export default Formulir;
