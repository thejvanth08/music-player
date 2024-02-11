import { Nav, Hero, Songs, Footer} from "./sections";
import { useState, createContext } from "react";
import songs from "./constants";

export const SongContext = createContext();

const App = () => {
  const [currentSong, seCurrentSong] = useState(songs[0]);
  
  return (
    <SongContext.Provider value={[currentSong, seCurrentSong]}>
      <main>
        <Nav></Nav>
        <section className="bg-slate-900">
          <Hero></Hero>
        </section>
        <section className="bg-slate-950">
          <Songs></Songs>
        </section>
        <section className="bg-slate-950">
          <Footer></Footer>
        </section>
      </main>
    </SongContext.Provider>
  );
}
export default App;