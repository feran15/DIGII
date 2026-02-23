const Nav = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src="/Logo.png" alt="Logo" className="w-24 object-contain" />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 font-semibold">
          <li className="cursor-pointer hover:text-red-600 hover:border-b-[2px]">Products</li>
          <li className="cursor-pointer hover:text-red-600 hover:border-b-[2px]">Solutions</li>
          <li className="cursor-pointer hover:text-red-600 hover:border-b-[2px]">Clientele</li>
          <li className="cursor-pointer hover:text-red-600 hover:border-b-[2px]">Blog</li>
          <li className="cursor-pointer hover:text-red-600 hover:border-b-[2px]">New Initiatives</li>
          <li className="cursor-pointer hover:text-red-600 hover:border-b-[2px]">Company</li>
        </ul>

        {/* CTA Button */}
        <button className="px-6 py-2 rounded-full border-[2px] border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition hover:cursor-pointer">
          Request a Demo
        </button>

      </div>
    </nav>
  );
};

export default Nav;