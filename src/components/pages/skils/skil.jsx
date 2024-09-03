export const Skil = ({ name, icon }) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex items-center justify-between hover:text-emerald-400 hover:bg-gray-600/30 transition-all">
      <p className="font-medium">{name}</p>
      {icon}
    </div>
  );
};
