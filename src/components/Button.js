export const Button = ({ children, onClick, className = "" }) => (
  <button
    className={
      className +
      " p-2 w-1/2 px-8 text-flamingo-800 bg-white transition hover:bg-flamingo-100 rounded-xl font-jellee border-flamingo-800 border-2 block transform active:scale-[.98] focus:outline-none"
    }
    onClick={onClick}
  >
    {children}
  </button>
);
