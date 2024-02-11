import { FaPlay, FaShareAlt, FaPause } from "react-icons/fa";
import { useRef, useState, useEffect, useContext} from "react";
import { SongContext } from "../App";

const SongCard = ({ name, artist, track, cover, num, song}) => {
  // to replace the big song cover & details in hero
  const [currentSong, setCurrentSong] = useContext(SongContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioEle = audioRef.current;
    if (isPlaying) {
      audioEle.play();
    } else {
      audioEle.pause();
    }
  }, [isPlaying]);

  const handlePlayMusic = () => {
    setIsPlaying(!isPlaying);
    setCurrentSong(song);
  };

  return (
    <div className="mb-4 flex justify-start items-center">
      <audio ref={audioRef} src={track} controls className="hidden">
        no audio suppported
      </audio>
      <div className="flex items-center gap-4 text-xl font-semibold">
        {num}
        {isPlaying ? (
          <FaPause className="cursor-pointer" onClick={handlePlayMusic} />
        ) : (
          <FaPlay className="cursor-pointer" onClick={handlePlayMusic}></FaPlay>
        )}
      </div>

      <div className="w-full flex justify-between items-center pl-8">
        <div className="capitalize tracking-wide">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-lg">{artist}</p>
        </div>
        <div className="text-xl">
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default SongCard;
