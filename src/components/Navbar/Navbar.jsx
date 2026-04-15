"use client";
import { ChartLine, Clock, House, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    return setShowMenu((p) => !p);
  };
  const NAV_LINKS = [
    { id: 1, name: "Home", icon: House, to: "/" },
    { id: 2, name: "Timeline", icon: Clock, to: "/timeline" },
    { id: 3, name: "Stats", icon: ChartLine, to: "/stats" },
  ].map((i) => (
    <Link
      onClick={()=>setShowMenu(false)}
      key={i.id}
      href={i.to}
      className={`justify-center flex items-center gap-2  px-4 py-2 rounded-md  text-base  font-medium ${pathname === i.to ? "bg-[#244d3f] text-white" : "bg-transparent text-[#64748b]"} hover:bg-[#244d3f] hover:text-white transition-colors duration-150`}
    >
      <i.icon size={18}></i.icon>
      {i.name}
    </Link>
  ));

  return (
    <>
      <nav className="flex items-center justify-between h-15 px-4 md:px-8 bg-white border-b border-base-300 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-[#1f2937] font-bold text-2xl">
          Keen<span className="text-[#244d3f]">Keeper</span>
        </h1>
        <ul className=" hidden md:flex items-center gap-4">{NAV_LINKS}</ul>
        <button className="btn md:hidden " onClick={toggleMenu}>
          <Menu />
        </button>
      </nav>

      <section
        className={`fixed inset-0 backdrop-blur-[2px] z-40 transition-opacity duration-300 
  ${showMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-full md:w-md absolute z-50 min-h-screen  bg-white right-0 border-l  border-base-300 p-4 transform  ${showMenu ? "translate-x-0" : "translate-x-full"} transition-all duration-200   ease-in-out `}
        >
          <div className="flex justify-between items-center px-4">
            <h1 className="text-[#1f2937] font-bold text-2xl">
              Keen<span className="text-[#244d3f]">Keeper</span>
            </h1>
            <button onClick={toggleMenu} className="btn">
              <X />
            </button>
          </div>
          <div className="space-y-2 mt-15 " >
            {NAV_LINKS}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
