import songs from "../constants";
import SongCard from "../components/SongCard";

const Songs = () => {
  return (
    <section
      id="songs"
      className="max-w-[960px] mx-auto px-8 py-10 text-white"
    >
      <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-wide">Track List</h2>

      <div className="mt-8">
        {songs.map((song, index) => {
          return <SongCard className="" {...song} num={index + 1} song={song} />;
        })}
      </div>
    </section>
  );
}
export default Songs;