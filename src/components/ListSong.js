import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState();
  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setIdSong(song.id);
  }, [song]);
  return (
    <div className="col-span-2  overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa-solid fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={song.id}
              className={`bg-slate-800 h-12 text-gray-400 hover:bg-slate-900 cursor-pointer ${
                idSong === song.id ? "text-teal-400 bg-gray-900" : ""
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <th className="text-center">{index + 1}</th>
              <th className="text-left">{song.name}</th>
              <th className="text-center">{song.author}</th>
              <th className="text-center">
                <a href={song.url}>
                  <i className="fa-solid fa-download"></i>
                </a>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
