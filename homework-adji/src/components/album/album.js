const Album = ({Img, NameAlbum, NameArtist, Button}) => (
  <div className="Album">
    <img src={Img} alt="true"/>
      <p>{NameAlbum}</p>
      <p>{NameArtist}</p>
      <a href={Button}>Select</a>
  </div>
);

export default Album;