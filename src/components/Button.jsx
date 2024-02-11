const Button = ({ text, href }) => {
  return (
    <button className="bg-teal-500 text-white hover:bg-white hover:text-black px-4 py-3 uppercase tracking-wide font-semibold">
      <a href={`#${href}`}>{text}</a>
    </button>
  );
}
export default Button;