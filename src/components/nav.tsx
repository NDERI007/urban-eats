import { linkDat } from "../Dtalink/data";
import { Dessert } from "lucide-react";
import { Search } from "lucide-react";
import { AlignJustify } from "lucide-react";
import discord from "../assets/discord.svg";
import React from "react";
import { ResponsiveMenu } from "./resp";
function navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 uppercase px-3">
            <Dessert color={"#FA5053"} />
            <p>Urban</p>
            <p className="text-pink-600">eats</p>
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="text-lg flex items-center gap-6 text-gray-600">
              {linkDat.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="inline-block py-1 px-3 hover:text-yellow-400 font-semi-bold"
                  >
                    <a href={item.link}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:text-yellow-500 rounded-full p-2 duration-200">
              <Search size={"20px"} />
            </button>
            <button>
              <img src={discord} alt="discord" width={25} height={25} />
            </button>
            <button className="text-2xl hover:bg-[#5865F2] hover:text-white p-2 duration-200 font-semibold rounded-md border-2 border-[#5865F2] px-6 py-2 hidden md:block">
              login
            </button>
          </div>
          {/* mobile hamburger Menu section */}
          <div className="md:hidden md:p-0 pr-1" onClick={() => setOpen(!open)}>
            <AlignJustify size={"30px"} color={"gray"} />
          </div>
        </div>
      </nav>
      {/*Mobile sidebar section*/}
      <ResponsiveMenu open={open} />
    </>
  );
}
export default navbar;
