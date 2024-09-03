export const NavItem = ({ label, href }) => {
  return (
    <a
      href={`${href}`}
      className="text-gray-400 flex items-center gap-2 font-medium font-mono hover:text-white"
    >
      <span className="text-emerald-400">#</span>
      {label}
    </a>
  );
};
