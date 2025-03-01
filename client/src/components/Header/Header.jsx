import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center px-4 shadow-sm bg-green-800">
      <div className="flex items-center gap-2">
        <img src={logo} className="h-10" />
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-100"> HealthBD </h1>
      </div>
      {/* Search Bar */}

      <input
        type="text"
        placeholder="Search"
        className="border p-2 rounded-full px-4 w-1/4 h-8 outline-none placeholder:text-sm text-sm text-gray-500"
      />
      {/* Language dropdown */}
      <select name="language" className="p-1 rounded-sm px-4 bg-white text-sm">
        <option value="English">English</option>
        <option value="French">French</option>
      </select>
    </div>
  );
};

export default Header;
