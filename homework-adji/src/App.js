import { useEffect } from 'react';

const getPlaylist = async () => {
  try {
    const response = await fetch(
      'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json'
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    alert(error);
  }
};

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY;

function App() {
  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    getPlaylist();
  }, []);

  return (
<html>
  <head>
    <title>Create Playlist</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="src/styles.css" />
  </head>

  <body>
    <div class="container">
      <h1>Create Playlist</h1>
      <form class="form">
        <p for="title">Title</p>
        <input type="text" id="title" name="title" />
        <p for="description">Description</p>
        <textarea
          id="description"
          cols="30"
          rows="10"
          name="description"
        ></textarea>
        <input type="submit" id="callApi" value="Add to Playlist" />
      </form>
      <h2>Songs</h2>
      <div class="playlist">
        <img src="https://i.ytimg.com/vi/sHI_ZV40qiE/maxresdefault.jpg" />
        <p>Title : Satru</p>
        <p>Artist : Denny Caknan & Happy Asmara</p>
        <p>Albums : Fortuna Enterprise Record</p>
        <input type="submit" value="Add to Playlist" class="btn" />
      </div>
      <div class="playlist">
        <img
          src="https://cdn-2.tstatic.net/jatim/foto/bank/images/download-mp3-ku-puja-puja-happy-asmara.jpg"
        />
        <p>Title : Ku Puja Puja</p>
        <p>Artist : Happy Asmara</p>
        <p>Albums : DSA Record</p>
        <input type="submit" value="Add to Playlist" class="btn" />
      </div>
    </div>

  </body>
</html>

  );
}

export default App;