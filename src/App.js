import { useState } from "react";
import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Navbar from "./components/Navbar";
import Playing from "./components/Playing";
import { Songs } from "./Context";

import DataSongs from "./data/songs.json";

function App() {
  const [song, setSongs] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const songChoose = DataSongs.find((songChoose) => songChoose.id === idSong);
    if (!songChoose) setSongs(DataSongs[0]);
    else setSongs(songChoose);
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-600 h-screen-navbar-player overflow-hidden">
          {/* span1 */}
          <DetailSong />
          {/* span2 */}
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
