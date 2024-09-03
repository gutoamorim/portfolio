export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className="bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 shadow-but hover:bg-emerald-500 transition-all"
      {...props}
    >
      {children}
    </button>
  );
};
