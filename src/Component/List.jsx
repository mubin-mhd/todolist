import React from "react";

function List({ dataPerson, handleEdit }) {
  return (
    <section className="mt-8">
      <h1 className="text-md font-semibold text-center">Table Data</h1>
      <table className="table-auto w-1/2 mx-auto scale-90 ">
        <thead className="bg-gray-200 text-lg h-10">
          <tr>
            <th className="p-2 font-medium text-lg text-slate-700 text-center">
              No
            </th>
            <th className="p-2 font-medium text-lg text-slate-700 text-left">
              Nama
            </th>
            <th className="p-2 font-medium text-lg text-slate-700 text-left p-2">
              Telepon
            </th>
            <th className="p-2 font-medium text-lg text-slate-700 text-center p-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {dataPerson.map((res, index) => (
            <tr className="h-10" key={res.id}>
              <td className="shadow-sm p-2 text-center">{index + 1}</td>
              <td className="shadow-sm p-2">{res.nama}</td>
              <td className="shadow-sm p-2">{res.telepon}</td>
              <td className="shadow-sm p-2 mx-auto text-center">
                <button
                  onClick={() => handleEdit(dataPerson.id)}
                  className="p-2 bg-green-400 text-white rounded-md mr-4"
                >
                  edit
                </button>
                <button className="p-2 bg-red-400 text-white rounded-md">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default List;
