import imgLink from "../assets/images/va-vaathi.jpg";
import Button from "../components/Button";
import { useContext } from "react";
import { SongContext } from "../App";

const Hero = () => {
  // not using setState() here
  const [currentSong, setCurrentSong] = useContext(SongContext);

  return (
    <section className="max-container pt-32 lg:pt-40 px-10 pb-10 md:flex justify-around items-center gap-8 lg:min-h-screen">
      <div>
        <img
          src={currentSong.cover}
          alt="song cover image"
          className="max-w-[300px] max-h-[300px] sm:max-w-[400px] sm:max-h-[400px] md:max-w-[500px] md:max-h-[500px] mx-auto lg:mx-0"
        />
      </div>

      <div className="text-white uppercase">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mt-4">
          {currentSong.name}
        </h3>
        <p className="text-xl lg:text-3xl font-semibold tracking-wide mt-3 mb-4">
          {currentSong.artist}
        </p>
        <Button text="Play Now" href="songs"></Button>
      </div>
    </section>
  );
}
export default Hero;