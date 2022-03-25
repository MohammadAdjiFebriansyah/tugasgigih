import './App.css';
import Album from "./components/album/album";
import data from "./data/spotify.js";

function App() {
  return (
    <div className="header">
      <h2>Song</h2>
        <div>
        <Album Img={data.album.images[1].url}
        NameAlbum={data.album.name}
        NameArtist={data.artists[0].name}
        Button={data.uri}></Album>
        </div>
    </div>
  );
}

export default App;