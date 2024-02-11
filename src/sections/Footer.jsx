import { IoMusicalNotesSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="max-container mx-auto pt-4 text-white">
      <hr className="w-1/2 mx-auto border border-white" />

        <div className="max-w-80 pt-10 pb-8 mx-auto">
          <IoMusicalNotesSharp size={30} />
          <p className="mt-4">
            Let the rhythm of the music guide your soul through the melody of
            life.
          </p>
        </div>

        <hr className="w-1/2 mx-auto border border-white" />
        <div>
          <p className="text-center py-4">All rights reserved.</p>
        </div>
    
    </footer>
  );
};
export default Footer;
