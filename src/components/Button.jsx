export const Button = ({ className, type = "button", children, onClick }) => {
  return (
    <>
      <button
        type={type}
        className={`w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
