import { linkDat } from "../Dtalink/data";
import { Dessert } from "lucide-react";
import { Search } from "lucide-react";
function navbar() {
  return (
    <>
      <nav>
        <div className="container">
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 uppercase">
            <Dessert color={"#FA5053"} />
            <p>Urban</p>
            <p className="text-pink-600">eats</p>
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul>
              {linkDat.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons section */}
          {/* mobile hamburger Menu section */}
        </div>
      </nav>
      {/*Mobile sidebar section*/}
    </>
  );
}
export default navbar;
